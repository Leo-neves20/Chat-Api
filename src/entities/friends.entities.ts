import {Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm"
import Users from "./users.entities"

@Entity("friends")
class Friends{

    @PrimaryGeneratedColumn("increment")
    id: number

    @ManyToOne(() => Users, user => user.id)
    user: Users
}

export default Friends