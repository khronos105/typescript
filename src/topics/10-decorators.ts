function classDecorator<T extends {new (...args:any []): {} }>(
    cosntructor: T
){
    return class extends cosntructor{
        newProperty = 'New Propery';
        hello = 'override'
    }
}


@classDecorator
export class SuperClass{
    public myProperty: string = 'Abc123'

    print() {
        console.log('Hola Mundo')
    }
}


console.log(SuperClass)


const myClass = new SuperClass()
console.log(myClass)