const express = require('express');
const app = express();
const PORT = 8000;

const albums = {
    'Dark Metal': {
        'year': 1994,
        'label': 'Adipocere'
    },
    'Dictius te necare': {
        'year': 1996,
        'label': 'Red Stream'
    },
    'S.U.I.Z.I.D.': {
        'year': 1998,
        'label': 'Red Stream'
    },
    'Schatten aus der Alexander Welt': {
        'year': 2001,
        'label': 'Prophecy'
    },
    'unknown': {
        'year': 'unknown',
        'label': 'unknown'
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:album', (req, res) => {
    const album = req.params.album;
    if (albums[album]) {
        res.json(albums[album])
    } else {
        res.json(albums['unknown'])
    }
})

app.listen(PORT, (req, res) => {
    console.log(`Listening on port ${PORT}`)
})
