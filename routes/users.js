const { Router } = require('express');

const { usersGet,
        userGet,
        usersPost,
        usersCount
       } = require('../controllers/users');

const router = Router();

router.get('/', usersGet );

router.get('/:id', userGet );

router.get('/counts', usersCount );

router.post('/', usersPost );





module.exports = router;