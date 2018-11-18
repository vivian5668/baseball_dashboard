import React, { Component } from 'react'
import logo from './logo.png'
import './App.css'
import Chart1 from './Chart1';
import Chart2 from './Chart2';
import Chart3 from './Chart3';
import Chart4 from './Chart4';

import Grid from '@material-ui/core/Grid';

class App extends Component {
  state = {
    hello: null,
    postgres: null,
    error: null
  }

  componentDidMount() {
    fetch('/api/hello')
      .then(res => res.json())
      .then(data => {
        this.setState({ hello: data })
      })

    fetch('/api/postgres')
      .then(res => {
        if (!res.ok) {
          throw new Error(`/api/postgres HTTP status ${res.status}`)
        }

        return res
      })
      .then(res => res.json())
      .then(data => {
        this.setState({ postgres: data })
      })
      .catch(err => {
        this.setState({ error: err.toString() })
      })
  }
  render() {
    const { hello, postgres, error } = this.state

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Atlanta Braves Stats</h1>
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
