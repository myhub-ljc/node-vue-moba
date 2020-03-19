module.exports = app => {
  const express = require('express')
  const router = express.Router()
  const Categories = require('../../models/Category')

  //新建列表
  router.post('/categories', async(req, res) => {
    const model = await Categories.create(req.body)
    res.send(model)
  })

  router.put('/categories/:id', async(req, res) => {
    const model = await Categories.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })

  router.delete('/categories/:id', async(req, res) => {
   await Categories.findByIdAndDelete(req.params.id, req.body)
    res.send({
      success: true
    })
  })

  //分类列表
  router.get('/categories', async(req, res) => {
    const items = await Categories.find().populate('parent').limit(10)
    res.send(items)
  })
  
  //获取某个信息的详情
  router.get('/categories/:id', async(req, res) => {
    const model = await Categories.findById(req.params.id)
    res.send(model)
  })

  app.use('/admin/api', router)
}