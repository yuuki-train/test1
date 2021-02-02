import { Component } from 'react';
import fetch from 'node-fetch';
import './App.css';

class App extends Component {

  constructor(){
    super()
    this.state ={
      left: '',
      right: '',
      total: '',
      error: ''
    }
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount(){
    this.onclick = function update(){
      let data = new FormData(document.getElementById('form'));
      const URL = 'http://localhost:8080/plus'
      fetch(URL, {method: 'POST',
                  mode: 'cors',
                  body: data
                })
      .then(res =>res.json())
      .then(json =>{
          this.setState({
            total: json[0]['result'],
            error: ''
          })
      })
      .catch(error =>{
        console.error('Error:', error)
        this.setState({
          total: '',
          error: '数字で全ての項目を入力してください'
        })
      })
    }
    document.getElementById("calculate").addEventListener('click', this.onclick.bind(this) ,false)
  }
  
  render(){
    return(
      <div className="results">
        <form id="form">
          <input id="leftNumber" type="text" name="leftNumber" placeholder="足される数" defaultValue={this.state.left}/>+
          <input id="rightNumber" type="text" name="rightNumber" placeholder="足す数" defaultValue={this.state.right}/> = 
          {this.state.total}<br />
          <button id="calculate" type="button">計算</button>
          {this.state.error}
        </form> 
      </div>
    )
  }
}

export default App;
