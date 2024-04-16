const Controlget = require('../server/post/conroller');
const express = require('express');
const app = express()
const port = 5000;
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
// const producs = require('data')

app.use(express.json())

app.get('/Postable', Controlget.Posttab) 

app.get('/Getid/:id', Controlget.PostgetId)

app.get('/Getuser', Controlget.Controlget)

app.put('/UpdateId/:id', Controlget.UpdateId) 

app.delete('/Userdelete', Controlget.Postdelete) 

app.listen(port, () => console.log(`listening on port ${port}!`));