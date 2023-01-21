import { friendRepository, userRepository } from "../../utils/repositories.utils"

const AddFriendService = async (idUser: string, idFriend: string) => {
    
    const user   = await userRepository.findOneBy({id: idUser})
    const friend = await userRepository.findOneBy({id: idFriend})
    
    const newFriend = friendRepository.create({user: user, friend: friend})
    const returned = await friendRepository.save(newFriend)

    return returned
}

export default AddFriendService