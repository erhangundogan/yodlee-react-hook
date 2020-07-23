yodlee-react-hook
=================

Yodlee FastLink React hook.

This tiny library helps you to use Yodlee FastLink v3.0 integration in your React project.

Installation
============

```bash
# with npm
npm install yodlee-react-hook
# with yarn
yarn add yodlee-react-hook
```

Usage
=====

```jsx
const YodleeComponent = ({ accessToken }) => {
  const { ready, init } = useYodlee({
    containerId: 'container-fastlink',
    fastLinkOptions: {
      accessToken
    }
  });

  return (
    <div className="container">
      <div id="container-fastlink"></div>
      { ready ? <button onClick={init}>Open your account</button> : 'Loading...' }
    </div>
  );
};
```
