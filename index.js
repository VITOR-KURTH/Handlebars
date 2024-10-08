const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

app.engine("handlebars", exphbs.engine())
app.set('view engine', 'handlebars') //colocar uma variavel que armazena temporiariamente

app.get('/estagio', (req, res) => {
    res.render('estagio')
})

app.get('/', (req, res) => { //associa uma poprieadade a uma função
    const user = {
        name: 'Vitor',
        age: 17,
        email: 'vitor@queroestagio.com'
    }
    const auth = false
    
    const approved = true

    res.render('acai', {user: user, auth, approved }) //envia dados do acai para armazenamento em nuvem

})

app.listen(3000)