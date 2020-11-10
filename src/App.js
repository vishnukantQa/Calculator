import React, { Component } from 'react';
import './App.css';
import Buttons from './buttons';
import Result from './Result';
class App extends Component {

  constructor(){
    super();

    this.state = {
        firstNumber:"",
        secondNumber:"",
        result: ""
    }
}

onClick = button => {
//second number is not setting to empty

    if(button==="percOf"){
        this.setState({ 
           
            firstNumber: this.state.result,
            secondNumber:"",
            result:this.state.result+button
            
        }, () => {
            console.log(this.state.firstNumber, 'fistNumber');
            console.log(this.state.secondNumber,'secondNumber')
          });         
    }

  else if(button === "="){
    
      this.calculate();
  }

  else if(button === "C"){
      this.reset();
  }

  else {
      this.setState({
          result: this.state.result + button,
          secondNumber:this.state.secondNumber+button
          
      })     
      
  }
};


calculate = () => {

    if(this.state.firstNumber!==""){
        console.log("firstNumber",this.state.firstNumber);
        console.log("seconde Number",this.state.secondNumber);
      let  first=this.state.firstNumber;
      let  secondNumber=this.state.secondNumber;
       let temp=(first*secondNumber)/100;
       try{
           this.setState({
               result:temp
           })
       }catch(e){
           this.setState({
               result:"error"
           })
       }
    }else{
  try {
      this.setState({
          // eslint-disable-next-line
          result: (eval(this.state.result) ) 
      })
  } catch (e) {
      this.setState({
          result: "error"
      })

  }
}
};

reset = () => {
  this.setState({
      result: "",
      firstNumber:"",
      secondNumber:""
  })
};

backspace = () => {
  this.setState({
      result: this.state.result.slice(0, -1)
  })
};

render() {
    return (
        <div>
            <div className="calculator-body">
                <h1>Calculator</h1>
                <Result result={this.state.result}/>
                <Buttons onClick={this.onClick}/>
            </div>
        </div>
    );
}

}

export default App;
