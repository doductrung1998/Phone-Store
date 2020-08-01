import {handleFilterPrice} from "../Functions/handleFilterPrice.function"
import { handleFilterMemory } from "../Functions/handleFilterMemory.function";
import {handleFilterSaleOff} from "../Functions/handleFilterSaleOff.function"

export const onLoadDeviceList = (filterBrand,filterPrice,filterMemory,filterSaleOff,deviceList) =>{
    if(filterBrand === "All"){
        const deviceListAfterFilterPrice = deviceList.filter((device) => handleFilterPrice(filterPrice,device) !== false);
        const deviceListAfterFilterMemory = deviceListAfterFilterPrice.filter((device) => handleFilterMemory(filterMemory,device) !== false);
        const deviceListAfterFilterSaleOff = deviceListAfterFilterMemory.filter((device) => handleFilterSaleOff(device) === filterSaleOff);
        return deviceListAfterFilterSaleOff;
    }else{
        const deviceListAfterFilterBrand = deviceList.filter((device) => device.brand === filterBrand);
        const deviceListAfterFilterPrice = deviceListAfterFilterBrand.filter((device) => handleFilterPrice(filterPrice,device) !== false);
        const deviceListAfterFilterMemory = deviceListAfterFilterPrice.filter((device) => handleFilterMemory(filterMemory,device) !== false);
        const deviceListAfterFilterSaleOff = deviceListAfterFilterMemory.filter((device) => handleFilterSaleOff(device) === filterSaleOff);
        return deviceListAfterFilterSaleOff;
    }
}