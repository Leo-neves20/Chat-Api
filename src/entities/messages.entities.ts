import {Entity, Column, PrimaryGeneratedColumn,CreateDateColumn, ManyToOne} from "typeorm"
import Users from "./users.entities"

@Entity("messages")
class Messages{

    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({length: 1500})
    message: string

    @CreateDateColumn()
    createdAt: Date

    @ManyToOne(() => Users, users => users.id)
    user: Users
}

export default Messages