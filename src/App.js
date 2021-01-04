import React from 'react';
import './App.css';
import Layout from './Component/Layout/Layout';
import Home from './Component/Home/Home'
import About from './Component/About/About'
import {Route,Switch} from 'react-router-dom'
import DrawToggle from './Component/UI/DrawToggle'
import Project from './Component/Projects/Project';
import Contact from './Component/Contact/Contact'

function App() {
  return (
    <div className="App" >
      <Layout>
        <DrawToggle />
        <Switch>
        <Route path='/' exact component={Home} />
        <Route  path='/about' exact  component={About} />
        <Route  path='/projects' exact  component={Project} />
        <Route  path='/contact' exact  component={Contact} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
