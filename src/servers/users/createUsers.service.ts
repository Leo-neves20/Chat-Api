import { hash } from "bcrypt"
import { AppError } from "../../errors/error"
import { userRepository } from "../../utils/repositories.utils"
import { iUserRequest, iUserResponse } from "../../interfaces/user.interface"

const createUserService = async (data: iUserRequest): Promise<iUserResponse> => {

    const findUser = await userRepository.findOneBy({email: data.email})

    if(findUser){
        throw new AppError("Email already Registred")
    }

    data.password = await hash(data.password, 10)

    const newUser = userRepository.create(data)
    const user    = await userRepository.save(newUser)

    return user

}

export default createUserService