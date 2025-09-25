

function searchArray(arr: number[],elem:number):number{
    for(let i=0 ; i< arr.length ; i++){
        if(elem === arr[i]) return i+1;
    }
    return -1;
}

const arr = [10,22,3,12,5,3,6,32];
let searchElem = 12;
const result = searchArray(arr,searchElem)
console.log(result === -1 ? "Not Found" : `Element ${searchElem} is on Position ${result}`);


