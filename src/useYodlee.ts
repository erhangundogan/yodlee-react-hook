import { useEffect, useState } from 'react';
import { TokenType, YodleeHookType } from '../index';

const useYodlee: YodleeHookType = ({
  containerId,
  createScriptTag = true,
  fastLinkOptions: {
    fastLinkURL,
    token,
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
    let script: HTMLScriptElement;
    if (createScriptTag) {
      script = document.createElement('script');

      script.id = 'yodlee-fastlink-script';
      script.src = 'https://cdn.yodlee.com/fastlink/v3/initialize.js';
      script.async = true;
      script.defer = true;
      script.onload = () => setReady(true);
      script.onerror = () => setError('Yodlee FastLink library could not be loaded!');

      document.body.appendChild(script);
    }

    return () => {
      window.fastlink?.close();
      if (createScriptTag) {
        document.body.removeChild(script);
      }
    }
  }, []);

  const init = (currentToken?: TokenType) => {
    const getTokenString = (t : TokenType) => {
      switch (t.tokenType) {
        case 'AccessToken': {
          return { accessToken: `Bearer ${t.tokenValue}` };
        }
        case 'JwtToken': {
          return { jwtToken: `Bearer ${t.tokenValue}` };
        }
      }
    }

    setActive(true);

    window.fastlink?.open({
      fastLinkURL,
      params: { userExperienceFlow },
      ...getTokenString(currentToken || token),
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
