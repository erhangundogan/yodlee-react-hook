import React from 'react';
import { render, waitFor } from '@testing-library/react';
import useYodlee from '../useYodlee';

describe('useYodlee', () => {
  const YodleeComponent = () => {
    const { ready, init } = useYodlee({
      containerId: 'container-fastlink',
      fastLinkOptions: {
        fastLinkURL: 'https://node.sandbox.yodlee.com/authenticate/restserver',
        accessToken: 'foo'
      }
    });

    return (
      <div className="container">
        <div id="container-fastlink"></div>
        { ready ? <button onClick={ init }>Open Yodlee</button> : 'Loading...' }
      </div>
    );
  }

  test('adds script tag to the component', async () => {
    render(<YodleeComponent />);

    await waitFor(() => {
      expect(document.getElementById('yodlee-fastlink-script')).toBeInTheDocument();
    });
  });

  test('shows loading screen', async () => {
    const { getByText } = render(<YodleeComponent />);

    await waitFor(() => {
      expect(getByText('Loading...')).toBeInTheDocument();
    })
  });
});
