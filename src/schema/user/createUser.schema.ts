import * as yup from "yup"
import {SchemaOf} from "yup"
import { iUserRequest } from "../../interfaces/user.interface"

export const createUserSchema: SchemaOf<iUserRequest> = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    nickname: yup.string().required()
})