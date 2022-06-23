import React from 'react'
//Getting the container component from 'react-bootstrap' and
import { Container} from 'react-bootstrap'
//Authorizing link 
const URL = "https://accounts.spotify.com/authorize?client_id=a49092b73b714fa5ae895a9990e6b67e&response_type=code&redirect_uri=https://localhost:3001&scope=user-read-email%20streaming%20user-read-private%20user-library-read" 



export default function login() {
//Let us create a simple container
  return (
    //Centering the button 
    <Container className="d-flex justify-content-center align-items-center" style={{minHeight: "100vh"}}>
        <a className='btn btn-success btn-lg' href = "https://accounts.spotify.com/authorize?client_id=a49092b73b714fa5ae895a9990e6b67e&response_type=code&redirect_uri=https://localhost:3000&scope=user-read-email%20streaming%20user-read-private%20user-library-read"> Use Spotify to Login</a>
    </Container>
  )
}