const env = process.env

console.log("Hello, TypeScript! Config is loaded.");

// export default {
//     test:true   
// };

export const PORT = env.PORT || 8080;
export const HOST = env.HOST || "localhost";
export const SERVER_URL = `http://${HOST}:${PORT}`;
export const MONGO_URI = env.MONGO_URI || "mongodb://localhost:27017";
export const DATABASE_NAME = env.DATABASE_NAME || "local";

export default {
    PORT,
    HOST,
    SERVER_URL,
};