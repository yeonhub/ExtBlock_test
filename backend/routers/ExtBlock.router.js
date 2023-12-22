const express = require('express')
const { getExtBlockFixed, getExtBlockCustom } = require('../controllers/ExtBlock.controllers')
const ExtBlockRouter = express.Router()

ExtBlockRouter.get('/ExtBlockFixed', getExtBlockFixed)
ExtBlockRouter.get('/ExtBlockCustom', getExtBlockCustom)

module.exports = ExtBlockRouter