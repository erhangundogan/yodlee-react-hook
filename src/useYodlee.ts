import { useEffect, useState } from 'react';
import { YodleeHookType } from '../index';

const useYodlee: YodleeHookType = ({
 containerId,
 fastLinkOptions: {
   fastLinkURL = 'https://node.sandbox.yodlee.com/authenticate/restserver',
   accessToken,
   jwtToken,
   userExperienceFlow = 'Verification'
 },
 onSuccess,
 onError,
 onExit,
 onEvent,
}) => {
  const [ready, setReady] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://cdn.yodlee.com/fastlink/v3/initialize.js';
    script.async = true;
    script.defer = true;

    script.onload = () => setReady(true);
    script.onerror = () => setError('Yodlee FastLink library could not be loaded!');

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      window.fastlink.close();
    }
  }, []);

  const init = () => {
    const token: { accessToken?: string; jwtToken?: string } = {};

    setActive(true);

    if (accessToken) {
      token.accessToken = `Bearer ${accessToken}`;
    } else {
      token.jwtToken = `Bearer ${jwtToken}`;
    }

    window.fastlink.open({
      fastLinkURL,
      ...token,
      params: {
        userExperienceFlow
      },
      onSuccess: (customerData: any) => {
        setData(customerData);
        onSuccess && onSuccess(customerData);
      },
      onError: (fastLinkError: any) => {
        setError(fastLinkError);
        onError && onError(fastLinkError);
      },
      onExit,
      onEvent
    }, containerId);
  };

  return {
    init,
    data,
    error,
    ready,
    active
  }
}

export default useYodlee;
