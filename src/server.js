const express = require('express');
const { append } = require('express/lib/response');
const axios = require('axios');
const app = express();

require('dotenv').config()

axios.defaults.baseURL = 'https://api.api-futebol.com.br/v1/';
axios.defaults.headers.common['Authorization'] ='Bearer live_c2f47e8ca20f61ffb44bf1461df186';

async function getDados(rota){
    //const teste = 'campeonatos'
    var dados = await axios.get(rota)//.then((response) => console.log(response.data));
    return dados;
}


app.use(express.json());


/* LISTA OS CAMPEONATOS*/ 
app.get('/campeonatos',async (req,res) => {
   
    var dados = await getDados('campeonatos');

    res.json(dados.data)
});


/* CAMPEONATO */ 
app.get('/campeonatos/(\\d+)$',async (req,res) => {

    var campeonato = req.url.replace('campeonatos','').replace('//','')
   
    var dados = await getDados(`campeonatos/${campeonato}`);
   
    res.json(dados.data)
});


/* TABELA DE UM CAMPEONATO */ 
app.get('/campeonatos/*/tabela$',async (req,res) => {
   
    var dados = await getDados(`campeonatos/${req.params[0]}/tabela`);

    res.json(dados.data)

});

app.get('/aovivo',async (req,res) => {
   
    var dados = await getDados('ao-vivo');

    res.json(dados.data)
});

app.get('/aovivo',async (req,res) => {
   
    var dados = await getDados('ao-vivo');

    res.json(dados.data)
});

app.get('/time/(\\d+)$',async (req,res) => {

    var time_id = req.url.replace('time','').replace('//','')
   
    var dados = await getDados(`times/${time_id}`);

    res.json(dados.data)
});

app.listen(3333);