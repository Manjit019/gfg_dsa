
def reverse(arr):
    rev=[];
    i=0;
    j=len(arr);
    for i in range(len(arr)):
        rev.append(arr[len(arr) - 1 - i])
    return rev;

ary=[10,20,30,40,50];
print(f"Reverse : {reverse(ary)}")
    