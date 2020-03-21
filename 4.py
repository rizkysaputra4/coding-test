def longest(inputstring):
    arr = inputstring.split()
    arr.sort(key=len, reverse=True)
    print(arr[0])

#test function
longest('nama saya adalah rizky rizkyy saputra Saputro')