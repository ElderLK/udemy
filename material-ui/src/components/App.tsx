import React from 'react';
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import theme from './ui/Theme';
import Header from './ui/Header';
import Footer from './ui/Footer';
import LandingPage from './LandingPage';

function App() {
  const [ activeTab, setActiveTab ] = React.useState<number>(0);
  const [ activeMenuIndex, setActiveMenuIndex ] = React.useState(0)

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
          <Header activeTab={activeTab} setActiveTab={setActiveTab} activeMenuIndex={activeMenuIndex} setActiveMenuIndex={setActiveMenuIndex}/>
          <Switch>
            <Route exact path="/" component={LandingPage}/>
            <Route exact path="/services" component={() => <div>services</div>}/>
            <Route exact path="/customsoftwares" component={() => <div>customsoftwares</div>}/>
            <Route exact path="/mobileapps" component={() => <div>mobileapps</div>}/>
            <Route exact path="/websites" component={() => <div>websites</div>}/>
            <Route exact path="/revolutions" component={() => <div>revolutions</div>}/>
            <Route exact path="/about" component={() => <div>about</div>}/>
            <Route exact path="/contact" component={() => <div>contact</div>}/>
            <Route exact path="/estimate" component={() => <div>estimate</div>}/>
          </Switch>  
          <Footer activeTab={activeTab} setActiveTab={setActiveTab} activeMenuIndex={activeMenuIndex} setActiveMenuIndex={setActiveMenuIndex}/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
