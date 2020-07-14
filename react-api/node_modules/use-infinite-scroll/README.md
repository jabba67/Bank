# use-infinite-scroll

> A react hook to use infinite scroll

[![NPM](https://img.shields.io/npm/v/use-infinite-scroll.svg)](https://www.npmjs.com/package/use-infinite-scroll) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-infinite-scroll
yarn add use-infinite-scroll
```

## Demo

https://y2507wpz01.codesandbox.io/

## Usage

```jsx
import React, { useState, useEffect } from 'react'
import useInfiniteScroll from 'use-infinite-scroll'

const Example = () => {
  // Note: If you don't set initial value for items,
  // use useEffect(fetchData, []) to load data initially,
  // see example/src/App.js for usecase
  const [ items, setItems ] = useState(Array.from(Array(30).keys(), n => n + 1));
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchData)

  // replace this with your own data fetch function
  function fetchData() {
    setTimeout(() => {
      setItems(prevItems =>
        ([...prevItems, ...Array.from(Array(20).keys(), n => n + prevItems.length + 1)])
      );
      setIsFetching(false);
    }, 2000);
  }

  return (
    <div>
      <ul>
        {items.map(item => <li key={item}>{item}</li>)}
      </ul>
      {isFetching ? 'Fetching...' : 'Not Fetching'}
    </div>
  )
}
// see this code live at https://y2507wpz01.codesandbox.io/
```

## License

MIT © [abdullahtariq1171](https://github.com/abdullahtariq1171)

---

created using [create-react-hook](https://github.com/hermanya/create-react-hook).
