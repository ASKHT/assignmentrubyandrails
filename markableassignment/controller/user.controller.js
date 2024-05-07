import pool from "../db/db.js";

// Controller function to add a new patient
const addPatient = async (req, res) => {
    try {
        const { name, gender, age, address, phone_number } = req.body;
        
        // Insert query
        const query = `
            INSERT INTO patients (name, gender, age, address, phone_number)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *;
        `;
        // console.log(query)

        // Execute the query
        const {rows} = await pool.query(query, [name, gender, age, address, phone_number]);
        
        res.status(201).json({
            success: true,
            message: "Patient added successfully",
            data:rows[0]
        });
    } catch (error) {
        console.error("Error adding patient:", error);
        res.status(500).json({
            success: false,
            message: "An error occurred while adding the patient",
            error: error.message
        });
    }
};

export { addPatient };