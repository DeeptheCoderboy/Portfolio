
import './App.css';
import About from './component/about/about';
import Contact from './component/contact/contact';
import Experience from './component/experience/experience';
import Footer from './component/footer/footer';
import Header from './component/header/header';
import Nav from './component/nav/nav';
import Testimonials from './component/testimonials/testimonials';
import Services from './component/services/services';
import Portfolio from './component/porfolio/portfolio';
function App() {
  return (
    <div className="App">
       <Header/>
       <Nav/>
       <About/>

      
     
     <Experience/>
     <Services/>
     
     <Portfolio/>
     <Testimonials/>
     
     <Contact/>
     <Footer/>

     
     
    
    </div>
  );
}

export default App;
