import React from 'react'
import "../Mobile/mobileDetail.css"
import { Button } from 'antd';

export default class MobileDetail extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            memory64GB : false,
            memory128GB : false,
            memory256GB : false,
        }
    }

    componentWillMount(){
        this.handleAutoFocusButtonGB(this.props.location.state.mobile.memory)
    }
    handleAutoFocusButtonGB = (memory) =>{
        console.log("Memory :" + memory)
        if(memory === "64GB"){
            return this.setState({
                memory64GB : true,
                memory128GB : false,
                memory256GB : false,
            })
        }else if(memory === "128GB"){
            return this.setState({
                memory64GB : false,
                memory128GB : true,
                memory256GB : false,
            })
        }else if(memory === "256GB"){
            return this.setState({
                memory64GB : false,
                memory128GB : false,
                memory256GB : true,
            })
        }
    }
    handleCheckNumberMobile = (number) => {
        if (number > 0){
            return;
        }else{
            return(
                <div style = {{ display : "flex" ,  flexWrap : "nowrap", marginTop : "0px", marginBottom : "5px"}}>
                    <span 
                    style = {{fontSize: "25px", color : "red" , fontWeight : "bold" ,
                    textTransform : "uppercase",lineHeight:  "1.3em"}}> Sold Out</span>
                </div>
            );
        }

    }
    renderDetailMobile = (brand,number) =>{
        if(brand === "Apple"){
            return(
                <div className = "div-contact">
                    <div style = {{flexWrap : "wrap" ,overflow : "hidden",display : "flex" , flexDirection : "row" , textAlign : "center" , marginLeft : "0px", marginBottom:"0px" , float : "center" , bottom : "50%",height:"35px"}}>
                        <p 
                        className = "price"
                        style = {{ fontSize : "23px" , fontWeight : "bold" , color : "red"}}>
                        {this.props.location.state.mobile.price}
                        </p>
                        <p style ={{marginTop :"10px",marginLeft :"10px" }}>List price :</p>
                        <p 
                        className = "price"
                        style = {{textDecoration : "line-through" , marginTop :"10px",marginLeft : "0", fontWeight : "bold"}}>{this.props.location.state.mobile.oldPrice}</p>                
                    </div>
                    <div style = {{ display : "flex-inline" ,  flexWrap : "nowrap" , height: "auto"}}>
                        {this.handleCheckNumberMobile(number)}
                        <div style = {{ display : "flex" ,  flexWrap : "nowrap" , marginTop : "3px"}}>
                            <Button
                            autoFocus = {this.state.memory64GB}
                            defaultChecked = {true}
                            className = "btn-GB"
                            >
                                64GB
                            </Button>
                            <Button
                            className = "btn-GB"
                            autoFocus = {this.state.memory128GB}                                >
                                128GB
                            </Button>
                            <Button
                            className = "btn-GB"
                            autoFocus = {this.state.memory256GB}
                            >
                                256GB
                            </Button>
                        </div>
                    </div>
                </div>
            );
        }
    }
    render(){
        return(
            <div className="main">
                <h1 className = "title">{this.props.location.state.mobile.name}</h1>
                <div style ={{ display : "flex" , float : "center"}}>
                    <div className = "div-image">
                        <img 
                        alt = {this.props.location.state.mobile.name}
                        className ="image"
                        src = {this.props.location.state.mobile.src}
                        > 
                        </img>
                    </div>
                    {this.renderDetailMobile(this.props.location.state.mobile.brand,this.props.location.state.mobile.number)}
                    <div className = "div-information">
                        <div
                        style = {{ fontSize  : "15px" ,fontWeight: "bold" ,lineHeight: "50px" , backgroundColor : "rgb(221, 216, 216)" , display : "block" , width : "350px" , textAlign : "left" }}
                        >
                            <h2 
                            style = {{ marginLeft : "5px"}}
                            >
                            Device Information
                            </h2>
                        </div>
                            <table className = "table-information-detail">
                            <tbody className = "tbody-detail">
                                <tr 
                                className = "tr-information"
                                >
                                    <td>
                                    Device Name 
                                    </td>
                                    <td className = "td-infor">
                                    {this.props.location.state.mobile.name}
                                    </td>
                                </tr>
                                <tr 
                                className = "tr-information"
                                >
                                    <td>
                                    Brand
                                    </td>
                                    <td className = "td-infor">
                                    {this.props.location.state.mobile.brand}
                                    </td>
                                </tr>
                                <tr 
                                className = "tr-information"
                                >                                    
                                <td>
                                    Memory
                                    </td>
                                    <td className = "td-infor">
                                    {this.props.location.state.mobile.memory}
                                    </td>
                                </tr>
                                <tr 
                                className = "tr-information"
                                >
                                    <td>
                                    Window
                                    </td>
                                    <td className = "td-infor">
                                    {this.props.location.state.mobile.window}
                                    </td>
                                </tr>
                            </tbody>
                            </table>
                    </div>
                </div>
            </div>
        );
    }
}