import express from 'express'

//Express
const app = express()


// Get é o caminho que usuário está acessando
app.get('/ads', (request, response) => {
    return response.json([
        {id: 1, name: 'Anuncio 1'},
        {id: 2, name: 'Anuncio 2'},
        {id: 3, name: 'Anuncio 3'},
        {id: 4, name: 'Anuncio 4'}
    ])
    console.log('Acessou Ads!');
})

//Deixar o server esperando(ouvindo)
app.listen(3333)
