import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'

let title = "MySite";
// {title = prompt("Enter Site Name: ")};
if(title === ""){
  title = "MySite";
}

function App() {
  return (
    <>
      <Navbar title = {title}/>
      <Hero title = {title}/>
      <About/>
    </>
  );
}

export default App;
