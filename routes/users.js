const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');

const { usersGet,
       usersPost,
       usersCount
      } = require('../controllers/users');

const router = Router();

router.get('/', usersGet);

router.get('/counts', usersCount);

router.post('/', [
       check('name', 'El nombre es obligatorio').not().isEmpty(),
       check('username', 'El nombre es obligatorio').not().isEmpty(),
       check('email', 'El email es obligatorio').not().isEmpty(),
       check('phone', 'El telefono es obligatoria').not().isEmpty(),
       check('website', 'El sitio web es obligatorio').not().isEmpty(),
       validarCampos
], usersPost);





module.exports = router;