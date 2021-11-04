const router = require('express').Router();
const path = require('path')


router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

router.get('/exercise', (req, res, next)=> {
    res.sendFile(path.join(__dirname, '../public/exercise.html'))
});

router.get('/stats', (req, res, next) =>  {
    res.sendFile(path.join(__dirname, '../public/stats.html'))

});

module.exports = router;