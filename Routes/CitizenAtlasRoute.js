import express, { response } from 'express';
import request from 'request';

const router = express.Router()

/**
 * @swagger
 * /citizenAtlas/locationverifier/initialetters/{initialetters}:
 *   get:
 *     tags:
 *       - getDCCitizenList
 *     description: get the list of all DCAddresses
 *     parameters:
 *       - in: path
 *         name: initialetters
 *         required: true
 *         type: string
 *     produces:
 *       - application/json
 *     responses:
 *       '200':
 *         description: Successful
 *         content: application/json
 *       '406':
 *         description: Passed Initals is not correct
*/
router.get('/locationverifier/initialetters/:initals', async(req, res) => {
    var initailsLetters = req.params.initals
    try {
        if (!initailsLetters) {
            res.status(406).json(`Passed Inital letters ${initailsLetters}`)
        }
        res.setHeader('Content-Type', 'application/json')

        var requestOptions = {
            'method': "GET",
            'url': `https://citizenatlas.dc.gov/newwebservices/locationverifier.asmx/getDCAddresses2?initialetters=${initailsLetters}&f=json`,
            'headers': {
                "User-Agent": "NodeServer/14.13.0"
            }
        }

        request(requestOptions, function (error, response) {
            if (error) {
                res.status(406).json(error)
            } else {
                // const externalUriResp = JSON.stringify(response.body)
                const externalUriResp = response.body
                const obj = JSON.parse(externalUriResp)
                if (obj.returnDataset != null) {
                    res.status(200).json(obj.returnDataset.Table1) 
                } else {
                    res.status(406).json(error)
                }
            }
        });
    } catch (err) {
        res.status(406).json(err)
    }
})

export default router