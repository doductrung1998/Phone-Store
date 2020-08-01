export const replacePrice = (devicePrice) => {
    let price = devicePrice;
    price = price.replace(".","");
    price = price.replace(".","");
    price = price.replace(".","");
    price = price.replace(".","");
    return Number(price);
}