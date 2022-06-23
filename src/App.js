
import './App.css';
// import styles & minified versions
import 'bootstrap/dist/css/bootstrap.min.css';
//Importing login
import Login from './login'
//To Create an object for the URL parameters
import Dashboard from './dashboard'

const code = new URLSearchParams(window.location.search).get('code')

function App() {
  return code ? <dashboard code ={code}/> : <Login/>
}

export default App;
