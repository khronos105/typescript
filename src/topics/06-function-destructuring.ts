
export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150.98
}

const tablet: Product = {
    description: 'iPad Air',
    price: 250.5
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

export function taxCalculation(options: TaxCalculationOptions): [number, number] {
    const {products, tax} = options

    let total = 0;
    
    for(const {price} of products){
        total += price
    }
    
    return [total, total * tax]
}


const shoppingCart = [phone, tablet]
const tax = 0.15

const [total, totalTax, asd]: number[]  = taxCalculation({
    products: shoppingCart,
    tax
})


console.log('Total', total);
console.log('Tax', totalTax)