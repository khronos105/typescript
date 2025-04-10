
function addNumbers (a: number, b:number) {
    return a + b
}

const addNumbersArrow = (a: number, b:number): number => {
    return a + b
}

const result: number = addNumbers(1, 2)
console.log({ result })


interface Character {
    name: string;
    hp: number;
    showHp: () => void
}

const healCharacter = ( character: Character, amount: number ) => {

    character.hp += amount;

}

const strider: Character  = {
    name: 'Strider',
    hp: 50,
    showHp(){
        console.log(`Puntos de vida ${ this.hp }`)
    }
}

strider.showHp()

healCharacter(strider, 10)
healCharacter(strider, 50)


strider.showHp()


export {}