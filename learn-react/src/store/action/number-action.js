import * as actionType from './action-type';

export function getIncreaseAction() {
    return {
        type: actionType.INCREASE
    }
}

export function getDecreaseAction() {
    return {
        type: actionType.DECREASE
    }
}

export function setAction(newNum) {
    return {
        type: actionType.SET,
        payload: newNum
    }
}
