const { response, request } = require('express');

const User = require('../models/user');

const usersGet = async (req = request, res = response) => {
  total = await User.find();

  res.json({
    msg: 'get API - usersGet',
    total
  });
}

const usersCount = async (req = request, res = response) => {
  const total = await User.countDocuments();
  res.json({
    msg: 'get API - userGetCounts',
    total
  });
}

const usersPost = async (req, res = response) => {

  const { name, username, email, address, phone, website, company } = req.body;

  const user = new User({ name, username, email, address, phone, website, company });

  await user.save();

  res.json({
    msg: 'User creado con exito!!',
    name,
    username,
    email,
    address,
    phone,
    website,
    company
  });
}

module.exports = {
  usersGet,
  usersPost,
  usersCount
}