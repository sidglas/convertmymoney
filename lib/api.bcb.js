const axios = require('axios')

//const data = '03-06-2020'
const getUrl =  (data) =>  `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao=%27${data}%27&$top=100&$skip=0&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`

const getCotacaoAPI = url => axios.get(url)
const extractCotacao = res => res.data.value[0].cotacaoVenda
const getToday = () => {
    const today = new Date()
    //console.log(today)
    return ((today.getMonth() +1) + '-' + today.getDate()  + '-' + today.getFullYear())
}
const getCotacao = async() => {
    try {
        const today = getToday()
        const url = getUrl(today)
        console.log(today)
        const res = await getCotacaoAPI(url)  //'3-4-2020' today
        const cotacao = extractCotacao(res)
        return cotacao
    }catch(err){
        return ''
    }
}

module.exports = {
    getCotacaoAPI,
    getCotacao,     
    extractCotacao,
    getUrl,
    getToday
}

/*
const axios = require('axios')

const getUrl = data => `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao=%27${data}%27&$top=100&$skip=0&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`
const url = getUrl('03-04-2020')



axios
    .get(url)
    .then(res => console.log(res.data.value[0].cotacaoVenda))

*/