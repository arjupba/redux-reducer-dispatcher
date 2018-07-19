

redux-reducer-dispatcher
=========

This is a small module to help dispatch an action in a reducer asynchronously.

## Installation

  `npm install redux-reducer-dispatcher`

## Usage

```javascript
import { applyMiddleware, createStore } from 'redux';

import reducerDispatcherMiddleware from "redux-reducer-dispatcher";

const store = createStore(
  reducer,
  applyMiddleware(reducerDispatcherMiddleware)
)

// Note passing middleware as the third argument requires redux@>=3.1.0
```

