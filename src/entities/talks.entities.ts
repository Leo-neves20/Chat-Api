import {Entity , PrimaryGeneratedColumn, OneToMany, ManyToOne} from "typeorm"
import Messages from "./messages.entities"
import Users from "./users.entities"

@Entity("talks")
class Talks{

    @PrimaryGeneratedColumn("increment")
    id: number

    @ManyToOne(() => Users, users => users.id)
    userAt: Users

    @ManyToOne(() => Users, users => users.id)
    user_from: Users

    @OneToMany(() => Messages, messages => messages.id)
    messages: Messages[]
}

export default Talks