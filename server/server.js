/**
 * Remember Spotify requires you to have a server to undertake some executions
 * initialize package-json file with 'npm init -y'
 * Initialize the Spotify Web Api node and install express with 'npm i express spotify-web-npi-node'
 * Install nodemon and save it as a dependency with with 'npm i nodemon --save-dev'
 */

//
const express = require('express')
//Get spotify web Api
const SpotifyWebApi = require('Spotify-web-api-node')// Creating a class forspotify
//
const app = express();
//

//Moving to the web app
app.post('/login', (req, res) => { // Login applicaion
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        //Passing the credentials
        redirectUri:'http:localhost:3001',
        clientId: 'a49092b73b714fa5ae895a9990e6b67e', //Get your client Id
        clientSecret: 'b1d4afc0c1d94576ba72f6d440a31c4c' // Get client secret
    })
    spotifyApi.authorizationCodeGrant(code).then(data => {
        //Items being returned from the API
        res.json({accessToken:data.body.access_token,
             refreshToken:data.body.refresh.token,
              expiresIn:data.body.expires_in,
            })})
    .catch(() => {res.sendStatus(400)})// Catches the error that may resuly
})