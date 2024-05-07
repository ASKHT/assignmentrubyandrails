import pool from "../db/db.js";
import asyncWrapper from "../middleware/asyncWrapper.middleware.js"
// Controller function to add a new patient
const addPatient = asyncWrapper(async (req, res) => {
    const { name, gender, age, address, phone_number } = req.body;
    // Insert query
    const query = `
        INSERT INTO patients (name, gender, age, address, phone_number)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *;
    `;
    // Execute the query
    const { rows } = await pool.query(query, [name, gender, age, address, phone_number]); 
    res.status(201).json({
        success: true,
        message: "Patient added successfully",
        data: rows[0]
    });
});


export { addPatient };