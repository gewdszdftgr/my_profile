import express from 'express'
const router = express.Router()

// 檢查空物件, 轉換req.params為數字
import { getIdParam } from '#db-helpers/db-tool.js'

// 資料庫使用
import sequelize from '#configs/db.js'
const { OrderGroup } = sequelize.models

/* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('index', { title: 'order-group' })
// })

//http://localhost:3005/api/ordergroup

// GET - 得到所有資料
router.get('/', async function (req, res) {
  const order = await OrderGroup.findAll({ logging: console.log })
  // 處理如果沒找到資料

  // 標準回傳JSON
  return res.json({ status: 'success', data: { order } })
})

// GET - 得到單筆資料(注意，有動態參數時要寫在GET區段最後面)
router.get('/:id', async function (req, res) {
  // 轉為數字
  const id = getIdParam(req)

  const product = await OrderGroup.findByPk(id, {
    raw: true, // 只需要資料表中資料
  })

  return res.json({ status: 'success', data: { product } })
})

// POST - 送回資料庫
// router.post('/ordergroup', async (req, res, next) =>{
//   const newOrdergroup =req.body

//   const [ordergroup, created] =await Ordergroup.
// })
export default router
