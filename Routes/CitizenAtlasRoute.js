const router = require('express').Router()
const { response } = require('express')
const request = require('request')

router.get('/locationverifier/initialetters/:initals', async(req, res) => {
    res.setHeader('Content-Type', 'application/json')
    var initailsLetters = req.params.initals

    var requestOptions = {
        'method': "GET",
        'url': `https://citizenatlas.dc.gov/newwebservices/locationverifier.asmx/getDCAddresses2?initialetters=${initailsLetters}&f=json`,
        'headers': {
            "User-Agent": "NodeServer/14.13.0"
        }
    }

    request(requestOptions, function (error, response) {
        if (error) throw new Error(error)
        
        // const externalUriResp = JSON.stringify(response.body)
        const externalUriResp = response.body
        const obj = JSON.parse(externalUriResp)
        
        //if (obj.returnDataset.Table1!=null)
        //res.status(200).send(obj.returnDataset.Table1)
        //else
        res.status(200).send(obj)
    });

})

module.exports = router