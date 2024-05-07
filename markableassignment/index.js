import dotenv from "dotenv/config";
import app from "./app.js";
import pool from "./db/db.js"; // Assuming db.js exports the pool object

const port = process.env.PORT || 4000;

pool.connect()
    .then(() => {
        console.log("Database connected");
        app.listen(port, () => {
            console.log(`Server running at port ${port}`);
        });
    })
    .catch((error) => console.log(error));
