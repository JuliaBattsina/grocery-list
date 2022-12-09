import { Component } from "react";
import emptyheart from "./emptyheart.jpg";
import fullheart from "./fullheart.jpg";
export class Heart extends Component {
    state = {
        CTA: "Like us!",
        image: emptyheart
    }
heartClicked = ()=> {
    this.setState({
        CTA: "Thank you! We love you too",
        image:fullheart
    })
}


    render() {
        return <div>
            <div className="container">
           <h1>{this.state.CTA}</h1>
           </div>
           <div className="container">
           <img onClick={this.heartClicked} src= {this.state.image} width="120px" alt="heart"/>
           </div>
        </div>
    }
}