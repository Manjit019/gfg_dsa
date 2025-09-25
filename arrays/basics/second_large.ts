function secondLargest(arr: number[]) {
  let largest = arr[0];
  let secondlg = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondlg = largest;
      largest = arr[i];
    } else if (arr[i] > secondlg && arr[i] < largest) {
      secondlg = arr[i];
    }
  }
  return secondlg;
}
let ar1 = [10, 50, 40, 30, 20, 10];

console.log(secondLargest(ar1));
