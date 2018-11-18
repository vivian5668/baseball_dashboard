import React, { Component } from 'react'
import logo from './logo.png'
import './App.css'
import Chart1 from './Chart1';

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

        <p className="App-intro">{hello}</p>
        <p className="App-intro">{postgres}</p>
        <p className="App-intro">{error}</p>

        <Chart1 />
      </div>
    )
  }
}

export default App
