import React, { Component } from 'react'
import {Bar} from 'react-chartjs-2';

class Chart3 extends Component {
  state = {
    outcome: [],
    postgres: null,
    error: null
  }

  componentDidMount() {
    fetch('/api/chart3')
      .then(res => res.json())
      .then(data => {
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
    let labels = []
    let values = []
    let colors = []
    if (this.state.outcome.length !== 0){
        for(var i = 0; i < this.state.outcome.length; i++){

            labels.push(this.state.outcome[i]['PLAY_OUTCOME']);
            values.push(this.state.outcome[i]['round']);
            colors.push(this.getRandomColor())
        }
    }

    const data = {
        labels: labels, 
        datasets: [
          {
            label: 'outcome',
            backgroundColor: colors,
            data: values
          }
        ]
      };
    return (
    <div className="App">
        <h2> Average Launch Angle vs. Outcome</h2>
        <Bar data={data}
            height={500}
            width={700}
        />
    </div>
    );
  }
}

export default Chart3
