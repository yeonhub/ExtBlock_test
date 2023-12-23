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
const putExtBlockFixedChk = (req, res) => {
    const id = Number(req.params.id)
    const isChk = req.body.currentChk
    const sql = `
    UPDATE ExtBlockFixed
    SET isChecked = ?
    WHERE id = ?
    `
    extblockdb.query(sql, [isChk, id], (error, result) => {
        if (error) {
            console.log(`---${error}---`);
        } else {
            res.send(result)
        }
    })
}

const postExtBlockCustom = (req, res) => {
    const extension  = req.params.newCustom
    const id  = req.params.id
    const isChecked = false
    const sql = `
    INSERT INTO ExtBlockCustom
    (id, extension, isChecked)
    VALUES (?, ?, ?)
    `;
    extblockdb.query(sql, [id, extension, isChecked], (error, result) => {
        if (error) {
            console.log(`---${error}---`);
        } else {
            res.send(result)
        }
    })
}
const deleteExtBlockCustom = (req, res) => {
    const id = Number(req.params.id)
    const sql = `
    DELETE 
    FROM ExtBlockCustom
    WHERE id = ${id}`
    extblockdb.query(sql, (error, result) => {
        if (error) {
            console.log(`---${error}---`);
        } else {
            res.send(result)
        }
    })
}

module.exports = {
    getExtBlockFixed,
    getExtBlockCustom,
    putExtBlockFixedChk,
    postExtBlockCustom,
    deleteExtBlockCustom
}