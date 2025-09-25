
def secondLarge(arr):
    largest=arr[0];
    secondLargest=arr[0];
    for i in range(len(arr)):
        if(arr[i]>largest):
            secondLargest=largest;
            largest=arr[i]
        elif(arr[i]>secondLargest and arr[i]<largest):
            secondLargest=arr[i]
    return secondLargest

arr=[10,20,50,30,50,30];
print(f"Second Largest : {secondLarge(arr)}")