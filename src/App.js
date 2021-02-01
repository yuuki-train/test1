import { Component } from 'react';
import fetch from 'node-fetch';
import './App.css';

class App extends Component {

  constructor(){
    super()
    this.state ={
      text: '',
      left: '',
      right: '',
      total: ''
    }
    
  }

  componentDidMount(){
    const URL = 'http://localhost:8080/getResult'
    fetch(URL, {mode:'cors'})
    .then(res =>res.json())
    .then(json =>{
      console.log(json)
      this.setState({
        text: "計算結果の表示：",
        left: json[0]['left'] + ' + ',
        right: json[0]['right'] + ' = ',
        total: json[0]['total']
      })
    })
  }

  
  render(){
    /*
    return(
      <div className="results">
        <form action="http://localhost:8080/test" method = "post">
          <input type="text" name="leftNumber" placeholder="足される数"/>+
          <input type="text" name="rightNumber" placeholder="足す数"/>=<br />
          {this.state.text} {this.state.left} {this.state.right} {this.state.total}<br />
          <button type="submit">計算</button>
        </form> 
      </div>
    )
    */
   return(
     <div className='App'>
       {this.state.text} {this.state.left} {this.state.right} {this.state.total}
     </div>
   )
  }
}

export default App;
