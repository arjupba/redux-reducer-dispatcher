//reducerDispatcherMiddleware
// This middleware will just add the property "async dispatch"
// to actions with the "async" propperty set to true

const reducerDispatcherMiddleware = store => next => action => {
  let syncActivityFinished = false;
  let actionQueue = [];

  function flushQueue() {
    actionQueue.forEach(a => store.dispatch(a)); // flush queue
    actionQueue = [];
  }

  function reducerDispatch(asyncAction) {
    actionQueue = actionQueue.concat([asyncAction]);
    if (syncActivityFinished) {
      flushQueue();
    }
  }

  const actionWithReducerDispatcher = Object.assign({}, action, { reducerDispatch });

  const res = next(actionWithReducerDispatcher);
  syncActivityFinished = true;
  flushQueue();
  return res;
};
export default reducerDispatcherMiddleware;
