import { Component } from "react";
export class Heart extends Component {

    handleChange = (e)=> {
    }
handleSubmit=(e)=>{
    e.preventDefault();
}
    render () {
return <form onSubmit={this.handleSubmit}>
<input type="text" onChange={this.handleChange}/>
</form>
    }
}