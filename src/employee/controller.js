const pool = require('../../database');

const getEmployees = (req, res) => {
     pool.query("SELECT * FROM PROFILE", (error, results) =>{
        if (error) throw error;
        res.status(200).json(results.rows);
     })
    };

const Controller = (req, res) => {console.log("getting employees")
};

module.exports = {
   getEmployees,
}
