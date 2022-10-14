const Pool = require("pg").Pool;

/*
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "test",
    password: "xxx",
    port: 5432,    
});
*/

const pool = new Pool({
    user: "mfaebpejhrtipe",
    host: "ec2-52-20-166-21.compute-1.amazonaws.com",
    database: "d40nr1bm7h11hj",
    password: "bc7629832fcbde524a0353c6af1fb1dc3f52b5428c157eadfe32c48fc35764ee",
    //ssl: { "rejectUnauthorized": false },
    //rejectUnauthorized: false,//add when working with https sites
    //requestCert: false,//add when working with https sites
    //agent: false,//add when working with https sites
    port: 5432,
    //uri: "postgres://ojgrffiqcutdjy:f1172a619a1c25e586cae8e33ef3cc762744f817876cf8c1535abff96a592c1d@ec2-44-206-214-233.compute-1.amazonaws.com:5432/ddm46h90v1f25t", 
});

module.exports = pool;