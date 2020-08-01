import React from 'react'
import Mobile from './Mobile.component';
import '../G-CSS/deviceList.css'
import {onLoadDeviceList} from '../Functions/onLoadDeviceList.function'

export default class MobileList extends React.Component{
    onLoadMobileList = () =>{
        const mobileAfterFilter = onLoadDeviceList(this.props.filterBrand,this.props.filterPrice,this.props.filterMemory,this.props.filterSaleOff,this.props.mobileList);
            return mobileAfterFilter.map((mobile) =>{
                return(
                    <Mobile
                    key = {mobile.id}
                    mobile = {mobile}
                    ></Mobile>
                );
        });
    }
    render(){
        return(
                <table>
                    <tbody className ="table">
                        {this.onLoadMobileList()}   
                    </tbody>
                </table>
        );
    }
}