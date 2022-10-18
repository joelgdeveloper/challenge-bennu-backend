const { response, request } = require('express');

const usersGet = (req = request, res = response) => {

  res.json({
    msg: 'get API - usersGet',
  });
}

const userGet = (req = request, res = response) => {
  const { id } = req.params;

  res.json({
    msg: 'get API - userGet specific',
    id
  });
}

const usersCount = (req = request, res = response) => {

  res.json({
    msg: 'get API - userGetCounts'
  });
}

const usersPost = (req, res = response) => {

  const { nombre, edad } = req.body;

  res.json({
    msg: 'post API - usuariosPost',
    nombre,
    edad
  });
}

module.exports = {
  usersGet,
  userGet,
  usersPost,
  usersCount
}