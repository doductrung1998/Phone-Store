
export const handleFilterMemory = (filterMemory,device) =>{
    let deviceMemory = device.memory
    if(filterMemory === "All"){
        return device;
    }else if (filterMemory === "4GB"){
        return ((deviceMemory === "4GB")) ?  device :  false;
    }else if (filterMemory === "8GB"){
        return ((deviceMemory === "8GB")) ?  device :  false;
    }else if (filterMemory === "16GB"){
        return ((deviceMemory === "16GB")) ?  device :  false;
    }else if (filterMemory === "32GB"){
        return ((deviceMemory === "32GB")) ?  device :  false;
    }else if (filterMemory === "64GB"){
        return ((deviceMemory === "64GB")) ?  device :  false;
    }else if (filterMemory === "128GB"){
        return ((deviceMemory === "128GB")) ?  device :  false;
    }else if (filterMemory === "256GB"){
        return ((deviceMemory === "256GB")) ?  device :  false;
    }else if (filterMemory === "512GB"){
        return ((deviceMemory === "512GB")) ?  device :  false;
    }
}