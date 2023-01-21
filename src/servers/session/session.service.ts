import { sign } from "jsonwebtoken"
import { compare } from "bcrypt"
import { AppError } from "../../errors/error"
import { iSession } from "../../interfaces/session.interface"
import { userRepository } from "../../utils/repositories.utils"
import "dotenv/config"

const createSessionService = async(data: iSession): Promise<{token: string}> => {

    const findUser = await userRepository.findOneBy({email: data.email})

    if(!findUser){
        throw new AppError("Email or Password is incorrect", 401)
    }

    const verifyPassword = await compare(data.password, findUser.password)

    if(!verifyPassword){
        throw new AppError("Email or Password is incorrect", 401)
    }

    await userRepository.update(findUser.id, {...findUser, isOnline: true})

    const token = sign(
        {}, 
        process.env.SECRET_KEY, 
        {
            subject: findUser.id,
            expiresIn: "24h"
        }
    )

    return {token: token}

}

export default createSessionService