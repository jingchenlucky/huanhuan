export const SETLOGINUSERTYPE = Symbol('set-login-user');

/**
 * 设置登录用户对action
 * @param user
 * @returns {{payload: *, type: symbol}}
 */
export function createSetLoginUserAction(user) {
    return {
        type: SETLOGINUSERTYPE,
        payload: user
    }
}
