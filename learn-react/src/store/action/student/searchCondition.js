export const actionTypes = {
  change: 'CHANGE',
};

export function change(newCondition) {
  return {
    type: actionTypes.change,
    payload: newCondition,
  };
}
