let extblockdb = require('../models')

const getExtBlockFixed = (req, res) => {
    const sql = 'SELECT * FROM ExtBlockFixed'

    extblockdb.query(sql, (error, result) => {
        if (error) {
            console.log(`---${error}---`);
        } else {
            console.log(result);
            res.send(result)
        }
    })
}
const getExtBlockCustom = (req, res) => {
    const sql = 'SELECT * FROM ExtBlockCustom'
    extblockdb.query(sql, (error, result) => {
        if (error) {
            console.log(`---${error}---`);
        } else {
            console.log(result);
            res.send(result)
        }
    })
}

module.exports = {
    getExtBlockFixed,
    getExtBlockCustom
}