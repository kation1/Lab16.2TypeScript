var mountains = [
    { name: 'Kilimanjaro', height: 19341 },
    { name: 'Everest', height: 29029 },
    { name: 'Denali', height: 20310 }
];
function findNameofTallestMountain() {
    var max = 0;
    var maxname = '';
    for (var _i = 0, mountains_1 = mountains; _i < mountains_1.length; _i++) {
        var mountain = mountains_1[_i];
        if (mountain.height > max) {
            maxname = mountain.name;
            max = mountain.height;
        }
    }
    console.log(maxname);
    //return maxname;
}
var products = [
    { name: 'Candle', price: 2.99 },
    { name: 'waterbottle', price: 5 },
    { name: 'almonds', price: 6.01 }
];
function calcAverageProductPrice() {
    var average = 0;
    for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
        var product = products_1[_i];
        average = +product.price;
    }
    console.log(average / products.length);
}
var items = [
    { product: { name: 'motor', price: 10.00, }, quantity: 10 },
    { product: { name: 'sensor', price: 12.50 }, quantity: 4 },
    { product: { name: 'LED', price: 1.00 }, quantity: 20 }
];
function calcInventoryValue() {
    var totalarr = new Array(3);
    for (var i = 0; i < items.length; i++) {
        totalarr[i] = +(items[i].product.price * items[i].quantity);
    }
    console.log(totalarr[0] + totalarr[1] + totalarr[2]);
}
//# sourceMappingURL=app.js.map