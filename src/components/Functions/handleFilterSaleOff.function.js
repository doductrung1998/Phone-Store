export const handleFilterSaleOff = (device) =>{
    if(device.oldPrice === ""){
        return false;
    }else{
        return true;
    }
}