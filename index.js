const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

app.engine("handlebars", exphbs.engine())
app.set('view engine', 'handlebars') //colocar uma variavel que armazena temporiariamente

app.get('/', (req, res) => { //associa uma poprieadade a uma função
    const user = {
        name: 'Karien',
        age: 34,
        email: 'karien.barbosa@edu.sc.senai.br'
    }
    res.render('acai', {user: user}) //envia dados do acai para armazenamento em nuvem

})

app.listen(3000)