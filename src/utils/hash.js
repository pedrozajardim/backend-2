import brcypt from "bcrypt";

export async function hashPassword (password){
    return await brcypt.hash(password,10)
}