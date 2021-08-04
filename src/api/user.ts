import Axios from 'axios'

/**
 * @interface loginParams -登录参数
 * @property {string} username -用户名
 * @property {string} password -用户密码
 */
interface LoginParams {
  username: string
  password: string
}
//封装User类型的接口方法
export class UserService {
  /**
   * @description 查询User的信息
   * @param {number} teamId - 所要查询的团队ID
   * @return {any} result
   */
  static async login(params: LoginParams): Promise<any> {
    return Axios('/api/user', {
      method: 'get',
      responseType: 'json',
      params: {
        ...params
      },
    })
  }

  static async resgister(params: LoginParams): Promise<any> {
    return Axios('/api/user/resgister', {
      method: 'get',
      responseType: 'json',
      params: {
        ...params
      },
    })
  }
}