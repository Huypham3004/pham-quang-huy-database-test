var express = require('express');
var router = express.Router();
const UserModel = require('../model/user.model')

// Tạo user
router.post('/', (req, res) => {
  const user = new UserModel();
  user.id = req.body.id;
  user.email = req.body.email;
  user.salary = req.body.salary;

  user.save((err, user) => {
    if (err) {
      res.send('Lỗi lưu thông tin người dùng')
    } else {
      console.log('Lưu thông tin người dùng thành công', user);
      res.send(user);
    }
  })
})

//Lấy hết tất cả thông tin của người dùng
router.get('/', (req, res) => {
  UserModel.find({}).exec((err, user) => {
    if (err) {
      res.send('Không thể lấy thông tin user');
    } else {
      console.log('Lấy thông tin use thành công');
      res.json(user);
    }
  })
})

module.exports = router;
