yodlee-react-hook
=================

[Yodlee](https://www.yodlee.com/) [FastLink 3.0](https://developer.yodlee.com/docs/fastlink/3.0/product-guide) React hook.

This tiny library helps you to use Yodlee FastLink v3.0 in your React projects.

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
