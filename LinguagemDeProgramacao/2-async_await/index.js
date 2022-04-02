require('dotenv').config()
const axios = require('axios')

// const PROTOCOL = process.env.PROTOCOL
// const BASE_URL = process.env.BASE_URL
// const APPID = process.env.APPID
// const LANGUAGE = process.env.LANGUAGE
// const UNITS = process.env.UNITS


const {PROTOCOL, BASE_URL, APPID, LANGUAGE, UNITS, Q} = process.env 

const url = `${PROTOCOL}://${BASE_URL}?appid=${APPID}&lang=${LANGUAGE}&units=${UNITS}&q=${Q}`

axios.get(url).then(res => {
    console.log(res.data)
    return res.data.list;
})
.then(
    res => {
        for(let previsao of res){
            console.log(`${new Date(+previsao.dt + 1000).toLocaleString()}
            `)
        }
    }
)

