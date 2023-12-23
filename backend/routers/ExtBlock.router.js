const express = require('express')
const { getExtBlockFixed, getExtBlockCustom, putExtBlockFixedChk, postExtBlockCustom, deleteExtBlockCustom } = require('../controllers/ExtBlock.controllers')
const ExtBlockRouter = express.Router()

ExtBlockRouter.get('/ExtBlockFixed', getExtBlockFixed)
ExtBlockRouter.get('/ExtBlockCustom', getExtBlockCustom)
ExtBlockRouter.put('/ExtBlockFixed/:id', putExtBlockFixedChk)
ExtBlockRouter.post('/ExtBlockCustom/:newCustom', postExtBlockCustom)
ExtBlockRouter.delete('/ExtBlockCustom/:id', deleteExtBlockCustom)

module.exports = ExtBlockRouter