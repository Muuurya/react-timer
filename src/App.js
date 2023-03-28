import React, { Component } from "react";
import "./App.css";
export default class App extends Component {
  state = {
    hour: 0,
    minute: 0,
    second: 0,
    interval: "",
    disabled: false,
    intervals: [],
  };
  increase1 = () => {
    const { hour } = this.state;
    if (hour === 59) {
      this.setState({
        hour: 0,
      });
    } else {
      this.setState({
        hour: hour + 1,
      });
    }
  };
  decrease1 = () => {
    const { hour } = this.state;
    if (hour === 0) {
      this.setState({});
    } else {
      this.setState({
        hour: hour - 1,
      });
    }
  };
  increase2 = () => {
    const { minute } = this.state;
    if (minute === 59) {
      this.setState({
        minute: 0,
      });
    } else {
      this.setState({
        minute: minute + 1,
      });
    }
  };
  decrease2 = () => {
    const { minute } = this.state;
    if (minute === 0) {
      this.setState({});
    } else {
      this.setState({
        minute: minute - 1,
      });
    }
  };
  increase3 = () => {
    const { second } = this.state;
    if (second === 59) {
      this.setState({
        second: 0,
      });
    } else {
      this.setState({
        second: second + 1,
      });
    }
  };
  decrease3 = () => {
    const { second } = this.state;
    if (second === 0) {
      this.setState({});
    } else {
      this.setState({
        second: second - 1,
      });
    }
  };
  Starttimer = () => {
    let a = setInterval(() => {
      const { second, hour, minute } = this.state;
      if (second === 0) {
        if (minute === 0) {
          this.setState({
            minute: 60,
            hour: hour - 1,
          });
        } else {
          this.setState({
            minute: minute - 1,
            second: 59,
          });
        }
      } else {
        this.setState({
          second: second - 1,
        });
      }
    }, 1000);
    this.setState({
      interval: a,
      disabled: true,
    });
  };
  Stoptimer = () => {
    clearInterval(this.state.interval);
    this.setState({
      disabled: false,
    });
  };
  Resettimer = () => {
    clearInterval(this.state.interval);
    this.setState({
      hour: 0,
      minute: 0,
      second: 0,
      disabled: false,
    });
  };
  Intervaltimer = () => {
    const { intervals, hour, minute, second } = this.state;
    intervals.push(hour + ":" + minute + ":" + second);
    this.setState({
      intervals,
    });
  };
  render() {
    const { hour, minute, second, disabled, intervals } = this.state;
    return (
      <div className="container">
        <div className="wrapper1">
          <div className="card1">
            <h1>Timer</h1>
          </div>
          <div className="card2">
            <div className="wrap1">
              <button onClick={this.increase1} className="btn-5">
                +
              </button>
              <h1>{hour}</h1>
              <button onClick={this.decrease1} className="btn-6">
                -
              </button>
            </div>
            <div className="wrap2">
              <button onClick={this.increase2} className="btn-5">
                +
              </button>
              <h1>{minute}</h1>
              <button onClick={this.decrease2} className="btn-6">
                -
              </button>
            </div>
            <div className="wrap3">
              <button onClick={this.increase3} className="btn-5">
                +
              </button>
              <h1>{second}</h1>
              <button onClick={this.decrease3} className="btn-6">
                -
              </button>
            </div>
          </div>
          <div className="card3">
            <button
              onClick={this.Starttimer}
              disabled={disabled}
              className="btn-1"
            >
              Start
            </button>
            <button className="btn-2" onClick={this.Stoptimer}>
              Stop
            </button>
            <button className="btn-3" onClick={this.Resettimer}>
              Reset
            </button>
            <button className="btn-4" onClick={this.Intervaltimer}>
              Interval
            </button>
          </div>
          {intervals.map((item, index) => {
            return (
              <div key={index}>
                <p>{item}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
