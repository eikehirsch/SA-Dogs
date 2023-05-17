import connection from "./config/db.js";

const migrate = async () => {
    try {
        const result = await connection.sync();
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

migrate();