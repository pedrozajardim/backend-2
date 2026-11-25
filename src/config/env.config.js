import dotenv from "dotenv"


dotenv.config()

export const config = {
    port: process.env.PORT || 8080,
    node_env: process.env.NODE_ENV,
    mongo_uri: process.env.MONGO_URI,
    jwt_secret: process.env.JWT_SECRET
}

if (!config.mongo_uri) {
    throw new Error("Falta MONGO_URI en el .env");
}