const logger = store => next => action => {
  console.log('之前状态', store.getState());
  next(action);
  console.log('后状态', store.getState());
};
export default {
  onAction: logger,
};
