import React, {Component} from "react";
import './App.css';
import './box.css';
import BoxContent from './boxContent';
import InputBox from './inputBox';

class App extends Component{
state = {
  todoList: [],
  inputValue: ""
};


changeHandler = event => {
  const {value} = event.target;
  this.setState({
    inputValue: value
  });
};

clickHandler = (event, value) => {
  event.preventDefault();
  
  const {todoList} = this.state

  this.setState({
    todoList: [...todoList, value],
    inputValue: ""
  });
};

clickDeleteHandler = (valueList) => {
  const {todoList} = this.state
  const newTodoList = todoList.filter(list => { return list !== valueList;});

  this.setState({
    todoList: newTodoList
  });
};

  render() {
    const {inputValue, todoList} = this.state
    return(
      <div className="App">
      <header className="App-header">
        <InputBox 
          inputValue={inputValue} 
          clickHandler={this.clickHandler}
          changeHandler={this.changeHandler}
        />
        <div className="box--container">
          {todoList.map((list, index) => {
            return (
              <BoxContent 
                list={list}
                index = {index}
                deleteHandler = {this.clickDeleteHandler}
              />
              );
          })}
        </div>
      </header>
    </div>
    );
  }
}


export default App;
