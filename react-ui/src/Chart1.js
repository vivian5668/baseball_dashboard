import React, { Component } from 'react'
import {Doughnut} from 'react-chartjs-2';

class App extends Component {
  state = {
    outcome: [],
    postgres: null,
    error: null
  }

  componentDidMount() {
    fetch('/api/chart1')
      .then(res => res.json())
      .then(data => {
          console.log('Ming ere.....' + data)
        let outcome = this.state.outcome.slice()
        this.setState({outcome: JSON.parse(data)});
      })
  }
    
  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  render() {
      
    console.log('here...' + this.state.outcome)
    let labels = []
    let values = []
    let colors = []
    if (this.state.outcome.length !== 0){
        console.log('there_here...' + this.state.outcome)
        for(var i = 0; i < this.state.outcome.length; i++){
            labels.push(this.state.outcome[i]['PLAY_OUTCOME']);
            values.push(this.state.outcome[i]['count']);
            colors.push(this.getRandomColor())
        }
        console.log('labels: ' + labels);
    }

    const data = {
        labels: labels,
        
        datasets: [{
            label: "Outcome Summury",
            data: values,
            backgroundColor: colors,
        }]
    }
    return (
    <div className="App">
        <Doughnut data={data}
            height={500}
            width={700}
        />
    </div>
    );
  }
}

export default App
