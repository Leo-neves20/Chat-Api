
export interface iUserRequest{
    name: string,
    email: string,
    nickname: string,
    password: string
}

export interface iUserResponse{
    id: string,
    name: string,
    email: string,
    nickname: string,
    isOnline: boolean
}