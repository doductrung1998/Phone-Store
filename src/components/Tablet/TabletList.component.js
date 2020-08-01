import React from 'react'
import {onLoadDeviceList} from '../Functions/onLoadDeviceList.function'
import Tablet from '../Tablet/Tablet.component'
import "../G-CSS/deviceList.css"

export default class TabletList extends React.Component{
    onLoadMobileList = () =>{
        const tabletAfterFilter = onLoadDeviceList(this.props.filterBrand,this.props.filterPrice,this.props.tabletList);
            return tabletAfterFilter.map((tablet) =>{
                return(
                    <Tablet
                    key = {tablet.id}
                    onClickTabletName = {() => this.props.onClickTabletName(tablet)}
                    tablet = {tablet}
                    ></Tablet>
                );
        });
    }
    render(){
        return(
                <table>
                    <tbody className ="table">
                        {this.onLoadTabletList()}   
                    </tbody>
                </table>
        );
    }
}