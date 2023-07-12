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
      <div style = {{textAlign: 'center', fontSize: 'X-large'}} className ='App'>
        <h1>Timer</h1>
        <div>{this.state.count}</div>

          <div style = {{
            margin: '3%',
            display: 'flex',
            flexWrap: 'wrap',
            flexdirection: 'row',
            justifyContent: 'center',
            gap: '6%'
            }}>

            {
            this.state.start == false 
            ? 
          <button style = {{width: '10%', padding: '1%'}} onClick={this.start}>Run</button> 
            :
          <button style = {{width: '10%', padding: '1%'}} onClick={this.stop}>Stop</button>
            }
          <button style = {{width: '10%', padding: '1%'}} onClick={this.reset}>Reset</button>
          </div>
        </div>
    );
  }
}
  
  export default App; 