import React from 'react'
import '../Mobile/mobile.css'
import {Link} from 'react-router-dom'

export default class Mobile extends React.Component{
    render(){
        return(
            <div className = "mobile-div">
                <img
                className = "mobile-img"
                src = {this.props.mobile.src}
                alt = {this.props.mobile.name}
                >
                </img>
                <div style = {{height : "40px", float : "center"}}>
                <Link
                className = "mobile-name"
                to = {{
                    pathname : this.props.mobile.link,
                    state : {
                        mobile : {
                            name : this.props.mobile.name,
                            src : this.props.mobile.src,
                            price : this.props.mobile.price,
                            oldPrice : this.props.mobile.oldPrice,
                            brand : this.props.mobile.brand,
                            memory : this.props.mobile.memory,
                            window : this.props.mobile.window,
                            number : this.props.mobile.number
                        }
                    }
                }}
                >
                    {this.props.mobile.name}
                </Link>
                </div>
                <div style = {{display : "flex" , flexDirection : "row" , float : "center" , justifyContent : "center"}}>
                <p className = "mobile-price">{this.props.mobile.price}</p>
                <p 
                style = {{ textDecoration : "line-through"}}
                className = {(this.props.mobile.oldPrice !== "") ? "mobile-price" : ""}>{this.props.mobile.oldPrice}</p>
                </div>
            </div> 
        );
    }
}