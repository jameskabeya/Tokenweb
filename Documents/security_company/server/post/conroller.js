const express = require('express');
const app = express()
// const producs = require('./data')


app.use(express.json())

const tab = [{
    "id": "1",
    "name": "bro James",
    "gmail": "jameskabeya@gmail.com",
    "password": "broken"
},
{
    "id": "2",
    "name": "bro Daniel",
    "gmail": "james@gmail.com",
    "password": "boom"
},
{
    "id": "3",
    "name": "John",
    "gmail": "kadea@gmail.com",
    "password": "wheel"
}]

const Posttab = ('/post', async (req, res) => {
    // res.send('Welcome you win')
    return res.json(tab)
})

const Controlget = ('/', async (req, res) => {
    res.send('Welcome')
})

const PostgetId = ('/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    const index = tab.findIndex(check => check.id == parseInt(id))
    res.status(200).json(tab[index])
    // const products = await prisma.posts.findMany()
    // return res.json(products)
})

const UpdateId = ('/:id', async (req, res) => {
    const updateUser = await prisma.user.update({
        where: { id : id }
    })
})

async function Postdelete(req, res) {
    const id = parseInt(req.params.id)
    const user = await prisma.user.delete({ where: { id: id } }).then()
    res.status(200).send(`user ${id} Successfully deleted`)
}

module.exports = { Controlget, PostgetId, Posttab, Postdelete, UpdateId }