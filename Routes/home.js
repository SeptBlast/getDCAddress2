const router = require('express').Router()

router.get('/', async(req, res) => {
    res.json({
        status: {
            errorCode: '0',
            message: 'Successful Connection Established.'
        }
    })
})

module.exports = router