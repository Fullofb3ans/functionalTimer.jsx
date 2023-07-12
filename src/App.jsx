import React, {Component} from 'react';

class App extends Component{ 
  state={
    count: 0,
    start: false,
  };

  componentDidMount(){
    this.setState(()=> ({count: JSON.parse(localStorage.getItem('time')) || 0}));
  }
  
  componentDidUpdate(){
    this.addInLs = localStorage.setItem('time', this.state.count);
  }


  
  start = () => {  
  this.timer = setInterval(() => {
    this.setState((prevState)=> ({count: prevState.count+1}));
  }, 1000)
    this.setState((prevState)=> ({start: true}));
  }

  stop = () => {
    this.setState((prevState)=> ({start: false}));
    clearInterval(this.timer);
  }

  componentWillUnmount(){
    this.reset = () => {
      this.setState((prevState)=> ({start: false}));
      clearInterval(this.timer);
      this.setState((prevState)=> ({count: 0}));           
    }   
  }

  render(){
    return(
      <div className ='App'>
        <div>
          {this.state.count}
        </div>
          <div>
            {
            this.state.start == false 
            ? 
          <button onClick={this.start}>Run</button> 
            :
          <button onClick={this.stop}>Stop</button>
            }
          </div>
          <button onClick={this.reset}>Reset</button>
        </div>
    );
  }
}
  
  export default App; 