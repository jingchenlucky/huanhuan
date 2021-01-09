function createThunkMiddleware() {
  return store => next => action => {
    if (typeof action === 'function') {
      return action(store.dispatch, store.getState);
    }
    return next(action);
  };
}

const thunk=createThunkMiddleware();
export default thunk;