import React, { Component } from 'react';
import './style/App.css';
import Title from './title/Title';
import Coundown from './coundown/Coundown';
import Controller from "./controller/Controller";
import Lap from './laps/Lap'
class App extends Component {

  state = {
    time: {
      min: 0,
      sec: 0,
      milis: 0
    },
    laps: []
  }

  getStart(){
    this.intervalID = setInterval(() => {
      let min = this.state.time.min
      let sec = this.state.time.sec
      let milis = this.state.time.milis

      if (milis >= 10) {
        sec = sec + 1
        milis = 0
      }

      if (sec >= 60) {
        min = min + 1
        sec = 0
      }

      this.setState({
       ...this.state,
       time: {
         min,
         sec,
         milis: milis + 1
       }
      })


    }, 100); 
  }

  getPause(){
    clearInterval(this.intervalID);
  }

  getLap(){
    let time = {
      ...this.state.time
    }

    this.setState({
      ...this.state,
      laps: [time, ...this.state.laps]
    })

    console.log(this.state.laps);
    
  }

  getReset(){
    this.setState({
      ...this.state,
      time: {
        min: 0,
        sec: 0,
        milis: 0
      },
      laps: []
    })
  }


  render() {
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-md-8 m-auto">
            <div className="card bg-light">
              <div className="card-body">
                <Title/>
                <Coundown time={this.state.time}/>
                <Controller 
                    lap={() => this.getLap()}
                    reset={() => this.getReset()}
                    pause={() => this.getPause()}
                    start={ this.getStart.bind(this)}/>

                <Lap laps={this.state.laps}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
