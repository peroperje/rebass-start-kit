[Error Boundary Component](https://reactjs.org/docs/error-boundaries.html)

with default error:

```js
const WithError = ({ name = 'joker' }) => {
    if (name === 'joker') {
        throw new Error('crashed');
    }
    return <>{name}</>;
};
<ErrorBoundary>
    <WithError />
    <WithError name="petar" />
    <WithError name="petar" />
</ErrorBoundary>;
```

with custom error:

```js
const WithError = ({ name = 'joker' }) => {
    if (name === 'joker') {
        throw new Error('crashed');
    }
    return <div>{name}</div>;
};
<ErrorBoundary component={<>Custom error message</>}>
    <WithError />
    <WithError name="petar" />
    <WithError name="petar" />
</ErrorBoundary>;
```

without error:

```js
const WithError = ({ name = 'joker' }) => {
    if (name === 'joker') {
        throw new Error('crashed');
    }
    return <>{name}</>;
};
<ErrorBoundary component={<>Custom error message</>}>
    <WithError name="some name" />
    <WithError name="petar" />
    <WithError name="petar" />
</ErrorBoundary>;
```
