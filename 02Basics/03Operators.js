var sellingPrice = 199;
var listingprice = 799;

var discountPercentage = ((listingprice - sellingPrice)*100) / 799;

console.log(Math.round(discountPercentage) + "% off");

console.log(typeof discountPercentage);