import React, { Component } from 'react'
import logo from './logo.png'
import './App.css'
import Chart1 from './Chart1';
import Chart2 from './Chart2';
import Chart3 from './Chart3';
import Chart4 from './Chart4';

import Grid from '@material-ui/core/Grid';

class App extends Component {
    render() {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Atlanta Braves Stats</h1>
            <h3>April 1st - 14th, 2018</h3>
          </header>
          <br></br>
          <br></br>
          <Grid container spacing={24}>
          < Grid item xs={1}></Grid>
            <Grid item xs={5}>
              <Chart1 />
            </Grid>
            <Grid item xs={5}>
              <Chart2 />
            </Grid>
            < Grid item xs={2}></Grid>         
          </Grid>

          <Grid container spacing={24}>
          < Grid item xs={1}></Grid>
            <Grid item xs={5}>
              <Chart3 />
            </Grid>
            <Grid item xs={5}>
              <Chart4 />
            </Grid>
            < Grid item xs={2}></Grid>         
          </Grid>        
        </div>
      )
  }
}

export default App
