import pkg from "pg";
const { Pool } = pkg;
const pool = new Pool({
   user: "postgres",
   password: "akshit@15",
   host: "localhost",
   port: 5432, 
   database: "perncrud"
});

pool.connect((err)=>{
    if(err){
        console.error("Error connecting",err.stack)
    }
    else{
        console.log("Connect")
    }
})

export default pool;
