
function cadenaAleatoria() { 
    const banco = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let aleatoria = "";
    for (let i = 0; i < 6; i++) {
        aleatoria += banco.charAt(Math.floor(Math.random() * banco.length));
    }
    return aleatoria;
};


// get crypto module
const crypto = require("crypto");
function encriptar(pass,s_key) { 
const skey = "elihvg561houjtDDDgjean";
const sha256Hasher = crypto.createHmac("sha256", s_key);
const hash = sha256Hasher.update(pass).digest("hex");
    return hash;
};

module.exports = encriptar;
module.exports = cadenaAleatoria;