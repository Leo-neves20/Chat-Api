import AppDataSource from "../data-source"
import Friends from "../entities/friends.entities"
import Messages from "../entities/messages.entities"
import Talks from "../entities/talks.entities"
import Users from "../entities/users.entities"

const userRepository    = AppDataSource.getRepository(Users) 
const talksRepository   = AppDataSource.getRepository(Talks)
const messageRepository = AppDataSource.getRepository(Messages)
const friendRepository  = AppDataSource.getRepository(Friends)

export {
    userRepository, 
    talksRepository, 
    messageRepository, 
    friendRepository
}