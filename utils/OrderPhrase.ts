function PositionSpaces(phrase: String): Array<number> {
    let phraseArray: Array<String> = phrase.split("");
    let positionSpace: Array<number>= [];
    for (let i:number = 0; i < phraseArray.length; i++) {
        if(phraseArray[i] === ' '){
            positionSpace.push(i);
        }
    }
    return positionSpace;
}

function insertPositionSpaces(positionSpace: Array<number>, arrayPhrase: Array<String>): Array<String> {
    const returnArrayPhrase: Array<String> = arrayPhrase;
    for(const position of positionSpace){
        returnArrayPhrase.splice(position,0,' ');
    }
    return returnArrayPhrase;
}

export default function OrderPhrase(phrase: String): String {
    const deleteSpaces = phrase.replace(/\s+/g, '');
    let arrayPhrase: Array<String> = deleteSpaces.split("");
    arrayPhrase.sort();
    const positionSpace: Array<number> = PositionSpaces(phrase);
    const insertArrayPhrase = insertPositionSpaces(positionSpace, arrayPhrase);

    const orderedPhrase = insertArrayPhrase.join("");
    return orderedPhrase;    
}