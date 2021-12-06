const { Router, request, response } = require('express');

const router = Router();


router.get('/', (req = request, res = response, next) => {

    res.render('home');

});



module.exports = router;