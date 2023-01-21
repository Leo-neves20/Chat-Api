import { userRepository } from "../../utils/repositories.utils"

const logoutSessionService = async (idUser: string): Promise<void> => {

    const findUser = await userRepository.findOneBy({id: idUser})

    await userRepository.update(findUser, {...findUser, isOnline: false})

}

export default logoutSessionService