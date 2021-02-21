import React from "react";
import {Navigation,About, Contact, Portfolio, Footer} from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import bgPic2 from './background2.jpeg';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'




function App() {


  var style= {
    background: {
      background: `linear-gradient(to bottom, rgba(38, 64 , 171, 0.6) 0%, rgba(92, 77, 66, 0.8) 100%), url(${bgPic2})`,
      backgroundSize: "cover !important",
      backgroundPosition: 'center !important',
      backgroundAttachment: 'fixed !important',
      minHeight: '100vh !important',
      overflow: 'hidden',
      
    },
    
  }
  return (
    <div className="App" style={style.background}>
      <Router>
        <Navigation/>
      
      <Switch>
        <Route path="/" exact component={() => <About />}/>
        <Route path="/contact" exact component={() => <Contact />}/>
        <Route path="/portfolio" exact component={()=> <Portfolio />}/>
     
      </Switch>
      <Footer/>
      </Router>
      </div>
    
  )
}

export default App;

