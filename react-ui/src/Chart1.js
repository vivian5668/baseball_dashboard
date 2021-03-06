import React, { Component } from 'react'
import {Doughnut} from 'react-chartjs-2';

class Chart1 extends Component {
  state = {
    outcome: [],
    postgres: null,
    error: null
  }

  componentDidMount() {
    fetch('/api/chart1')
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
            values.push(this.state.outcome[i]['count']);
            colors.push(this.getRandomColor())
        }
    }

    const data = {
        labels: labels,
        datasets: [{
            data: values,
            backgroundColor: colors,

        }]
    }
    return (
    <div className="App">
        <h2> Play Outcome Summary </h2>
        <Doughnut data={data}
            height={500}
            width={700}
        />
    </div>
    );
  }
}

export default Chart1
