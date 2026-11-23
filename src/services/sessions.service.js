import UsersRepository from "../repositories/users.repository.js";
import { hashPassword } from "../utils/bcrypt.js";
import { createdError } from "../utils/createdError.js";
import validator from "validator"

class SessionsService {
    constructor(repository = new UsersRepository) {
        this.repository = repository
    }

    async register(newUser) {

        const { first_name, last_name, email, password } = newUser;
        if (!first_name || !last_name || !email || !password) {
            throw createdError("Faltan Campos obligatorios", 400)
        }

        const emailNormalized = email.trim().toLowerCase()

        if(!validator.isEmail(emailNormalized)){
            throw createdError("Email invalido", 409)
        }

        if (password.length < 6) {
            throw createdError("La contraseña debe de tener por lo menos 6 caracteres", 400)
        }

        const existing = await this.repository.findByEmail(emailNormalized)
        if(existing){
            throw createdError("Este email ya existe",409)
        }

        const hash = await hashPassword(password)
        const user = await this.repository.created({
            first_name,
            last_name,
            password: hash,
            email: emailNormalized

        }
        )
        return {
            id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            email : user.email,
            role: user.role
        }

    }
}

export default SessionsService