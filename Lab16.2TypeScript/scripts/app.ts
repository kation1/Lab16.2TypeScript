interface Mountain {
    name: string,
    height: number

}

let mountains: Mountain[] = [
    { name: 'Kilimanjaro', height: 19341 },
    { name: 'Everest', height: 29029 },
    { name: 'Denali', height: 20310 }
]


function findNameofTallestMountain() {
    var max = 0;
    var maxname = '';
    for (let mountain of mountains) {
        if (mountain.height > max) {
            maxname = mountain.name;
            max = mountain.height;
        }
    }

    console.log(maxname);
    //return maxname;
}

//var TallestMountainName: String = '';

//TallestMountainName = findNameofTallestMountain();

//console.log(TallestMountainName);


interface Product {
    name: string,
    price: number
}

let products: Product[] = [
    { name: 'Candle', price: 2.99 },
    { name: 'waterbottle', price: 5 },
    { name: 'almonds', price: 6.01 }
]

function calcAverageProductPrice() {
    var average = 0;
    for (let product of products) {
        average =+ product.price
    }

    console.log(average / products.length)
}

interface InventoryItem {
    product: Product
    quantity: number
}

let items: InventoryItem[] = [
    { product: { name: 'motor', price: 10.00, }, quantity: 10 },
    { product: { name: 'sensor', price: 12.50 }, quantity: 4 },
    { product: { name: 'LED', price: 1.00 }, quantity: 20 }
]





function calcInventoryValue() {
    var totalarr:number[] = new Array(3);
    
    for (var i = 0; i < items.length; i++) {
 
        totalarr[i] =+ (items[i].product.price * items[i].quantity);
   
        
    }
    console.log(totalarr[0]+totalarr[1]+totalarr[2]);
}