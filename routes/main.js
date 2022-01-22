const express = require("express");
const router = express.Router();
const axios = require('axios')

router.get("/",(req, res, next) => {
    res.render('index')

})
router.get('/search', async (req, res, next)=>{
    const  url = "https://itunes.apple.com/search?term=sports&country=NG&media=podcast"
    
    const { data } = await axios({
    url,
    method:"get",
    options:{
        headers:{Accept : 'application/json' }
    }

})
    const {results} = data
    const podcasts =results.map(podcast => {
        return {
            name: podcast.artistName,
            trackName: podcast.trackName,
            icon: podcast.artworkUrl600,
            genres: podcast.genres,
            feed : podcast.feedUrl
        }
    })
    res.json({
        podcasts
    })

})
router.post('/search', async (req, res, next) => {
    const  url = "https://itunes.apple.com/search?term=${searchTerm}&country=NG&media=podcast"
    
    const searchTerm = req.body.term
    const { data } = await axios({
    url,
    method:"get",
    options:{
        headers:{Accept : 'application/json' }
    }

})
    const {results} = data
    const podcasts =results.map(podcast => {
        return {
            name: podcast.artistName,
            trackName: podcast.trackName,
            icon: podcast.artworkUrl600,
            genres: podcast.genres,
            feed : podcast.feedUrl
        }
    })
    res.json({
        podcasts
    })
})

module.exports = router
