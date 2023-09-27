const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
   res.json([
    {
        name:'SOJIB'
    },
    {
        name:'SAMIHA'
    },
    {
        name:'MITASHA'
    },
    {
        name:'RUMA'
    }
   ])
})

module.exports = router