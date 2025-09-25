
const sumOfArray = (arr : number[]):number => {
    let sum:number = 0;
    let arryLen:number = arr.length;
    for(let i=0;i<arryLen;i++){
        sum+=arr[i];
    }
    return sum;
}

const ary:number[] = [20,10,30,30,20,40];

console.log(`Sum of Array : ${sumOfArray(ary)}`);
