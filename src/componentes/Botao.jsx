import React, { Component } from "react";
import "./botao.css"

export default class Botao extends Component{
    render(){
        return(
            <div>
           <button className={this.props.className} onClick={()=>this.props.onClick(this.props.nome)}>{this.props.nome}</button>
            </div>
          );
    }
}