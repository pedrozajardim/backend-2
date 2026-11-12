import dotenv from "dotenv"


dotenv.config()

export const config = {
    port: process.env.PORT || 8080,
    node_env: process.env.NODE_ENV,
    mongo_url: process.env.MONGO_URL,
    jwt_secret: process.env.JWT_SECRET
}