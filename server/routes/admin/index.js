module.exports = app => {
  const express = require('express')
  const router = express.Router()
  const Categories = require('../../models/Category')

  router.post('/categories', async(req, res) => {
    const model = await Categories.create(req.body)
    res.send(model)
  })

  app.use('/admin/api', router)
}