const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let snowboarders = {
    'test': {
        'age': 28,
        'birthdate': '22 October 1992',
        'homeHill': 'Park City, Utah',
        'styles': 'Park, Jumps, Pow',
        'occupation': 'Baller',
        'yearsActive': '2013-present',
        'children': 0
    },
    'Arthur Longo': {
        'age': 28,
        'birthdate': '22 October 1992',
        'homeHill': 'Somewhere in Switzerland',
        'styles': 'Sidehits Expert',
        'occupation': 'Legend',
        'yearsActive': '2013-present',
        'children': 0
    },
    'unknown':{
        'age': 'unknown',
        'birthName': 'unknown',
        'birthdate': 'unknown',
        'birthLocation': 'unknown',
        'origin': 'unknown',
        'genre': 'unknown',
        'occupation': 'unknown',
        'yearsActive': 'unknown',
        'labels': 'unknown',
        'children': 'unknown'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:person', (request, response) => {
    const snowboarderName = request.params.person.toLowerCase()
    if(snowboarders[snowboarderName]){
        response.json(snowboarders[snowboarderName])
    }else{
        response.json(snowboarders['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
