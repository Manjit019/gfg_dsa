
def min_max(arr):
    min=arr[0]
    max = arr[0]
    for i in range(len(arr)):
        if(arr[i]>max): max=arr[i];
        if(arr[i]<min): min = arr[i];
    print(f"Min : {min}\nMax : {max}");

arr=[10,3,54,23,33,22,19];
min_max(arr);