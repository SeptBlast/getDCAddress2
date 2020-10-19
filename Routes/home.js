import express from 'express'

const router = express.Router()

/**
 * @swagger
 * /:
 *   get:
 *     description: healthcheck
 *     responses:
 *       '200':
 *         description: Successful
 *         content: application/json
 *       '406':
 *         description: Passed Initals is not correct
 *         content: application/json
*/
router.get('/', async function(req, res) {
    await res.json({
        status: {
            errorCode: '0',
            message: 'Successful Connection Established.'
        }
    })
})

export default router