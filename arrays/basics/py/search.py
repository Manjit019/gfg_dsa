
def search(arr,elem):
    for i in range(len(arr)):
        if(arr[i]==elem): return i+1;
    return -1

arr=[10,20,30,40,50];
searchElem=int(input("Enter element to be searched : "));
result = search(arr,searchElem);
print(f"Not Found" if result==-1 else f"Element found at positon : {result}")