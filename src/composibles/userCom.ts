import { UserService } from "@/api/user"
import { reactive } from "vue"

export function useUser() {
    const userdata = reactive({
        Account: 'admin', //账户
        Password: 'hhhh', //密码
    })

    const handleLogin = async () => {
        const loginParams = {
            username: userdata.Account,
            password: userdata.Password,
        }
        const res = await UserService.login(loginParams)
        console.log(res)
    }

    const handleRegister = async () => {
        const loginParams = {
            username: userdata.Account,
            password: userdata.Password,
        }
        const res = await UserService.resgister(loginParams)
        console.log(res)
    }


    return {
        handleLogin,
        handleRegister,
    }
}