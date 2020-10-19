/**
 * 判断一个对象是不是平面对象plain-object
 * @param {*} reducer
 * @param {*} defaultState
 */
export default function isPlainObject(obj) {
  if (typeof obj !== "object") {
    return false;
  }
  return Object.getPrototypeOf(obj) === Object.prototype;
}
