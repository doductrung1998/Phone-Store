import {replacePrice} from './replacePrice.function'

export const handleFilterPrice = (filterPrice,device) =>{
    let devicePrice = device.price
    devicePrice = replacePrice(devicePrice);
    if(filterPrice === "All"){
        return device;
    }else if (filterPrice === "Less than 5 Million"){
        return ((devicePrice < 5000000)) ?  device :  false;
    }else if (filterPrice === "More than 10 Million"){
        return ((devicePrice > 10000000)) ?  device :  false;
    }else if (filterPrice === "5 to 10 Million"){
        return(5000000 <= devicePrice && devicePrice <= 10000000) ? device : false;
    }
}