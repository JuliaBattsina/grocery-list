import { Component } from "react";
import check from './check.png';

 export class GroceryList extends Component {
    state = {
        userInput:'',
        groceryList: []
}
onChangeEvent (e) {
this.setState({userInput:e});
}
addItem(input) {
    if (input ==='') {
        alert ("Please enter an item")
    } else {
    let listArrey=this.state.groceryList;
    listArrey.push(input);
   this.setState({groceryList: listArrey, userInput:''})
}
}
deleteItem () {
let listArrey=this.state.groceryList;
listArrey=[];
this.setState({groceryList:listArrey})
}

crossedWord(event) {
    const li = event.target;
    li.classList.toggle ('crossed');
}
onFormSubmit(e) {
    e.preventDefault();
}

render () {
    return (
        
            <form onSubmit={this.onFormSubmit}>
    <div className="container">
        <input tipe="text"
         placeholder="What do you want to buy"
        onChange={(e)=>{this.onChangeEvent(e.target.value)}}
        value={this.state.userInput}/>

    </div>
    <div className="container">
        <button onClick={()=>this.addItem(this.state.userInput)} className="btn add">Add</button>
    </div>
    <ul>
         {this.state.groceryList.map((item, index)=>(
        <li onClick={this.crossedWord} key={index}>
        <img src={check} width="40px"/>
        {item}
        </li>
    ))}
        </ul>
    <div className="container">
    <button onClick={()=>this.deleteItem()}className="btn delete">Delete</button>
    </div>
    </form>
    
    )
}
}