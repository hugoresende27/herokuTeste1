const express = require ("express")
const app = express()

app.get("/", function (response, request){
    response.setEncoding("WORKING!!!")
})

app.listen(process.env.PORT || 5000)