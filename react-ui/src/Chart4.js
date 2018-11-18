import React, { Component } from 'react'
import {Bar} from 'react-chartjs-2';

class Chart4 extends Component {
  state = {
    outcome: [],
    postgres: null,
    error: null
  }

  componentDidMount() {
    fetch('/api/chart4')
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
        console.log('state: ' + this.state.outcome);
        for(var i = 0; i < this.state.outcome.length; i++){

            labels.push(this.state.outcome[i]['PLAY_OUTCOME']);
            console.log(this.state.outcome[i])
            values.push(this.state.outcome[i]['round']);
            colors.push(this.getRandomColor())
        }
        console.log("values: " + values)
    }

    const data = {
        labels: labels, 
        datasets: [
          {
            backgroundColor: colors,
            data: values
          }
        ]
      };
    return (
    <div className="App">
        <h2> Hit Spin Rate vs. Outcome</h2>
        <Bar data={data}
            height={500}
            width={700}
        />
    </div>
    );
  }
}

export default Chart4
