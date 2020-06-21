/**
 * 浅比较，这里只比较了第一层
 * @param obj1
 * @param obj2
 * @returns {boolean}
 * @constructor
 */
export function ObjectEqual(obj1, obj2) {
    for (let prop in obj1) {
        if (obj1[prop] !== obj2[prop]) {
            return false;
        }
        return true;
    }
}
