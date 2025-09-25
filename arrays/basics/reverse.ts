const reverse = (arr: number[]): number[] => {
  let rev: number[] = [];
  let j = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    rev[j] = arr[i];
    j++;
  }
  return rev;
};

const arrReverse = [10, 20, 30, 40, 50, 50];
console.log(`Reveresed : ${reverse(arrReverse)} \n Original : ${arrReverse}`);
