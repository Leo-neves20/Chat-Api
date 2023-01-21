import { Exclude } from "class-transformer"
import {Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import Friends from "./friends.entities"
import Talks from "./talks.entities"

@Entity('users')
class Users {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({length: 100})
    name: string

    @Column({length: 100, unique: true})
    email: string

    @Column({length: 500})
    @Exclude()
    password: string

    @Column({length: 80})
    nickname: string

    @Column({default: true})
    isOnline: boolean

    @OneToMany(() => Talks, talks => talks.userAt)
    talks: Talks[]

    @OneToMany(() => Friends, friends => friends.user)
    friends: Friends[]

}

export default Users