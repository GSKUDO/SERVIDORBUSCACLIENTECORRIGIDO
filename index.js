const express = require('express')

const app = express()

let users = [
    {
        id: 1,
        name:"Joao da Silva",
        email:"silva@email.com"
    },{
        id: 2,
        name:"Jose de Sousa",
        email:"sousa@email.com"
    },{
        id: 3,
        name:"Maria de jesus",
        email:"jesus@email.com"
    },{
        id: 4,
        name:"Josefa da Luz",
        email:"luz@email.com"
    }
]

app.get("/users", function(req, res) {
    res.json(users)
})

app.use(express.static('publico'))

app.listen(8080, () => console.log("servidor rodando"))
