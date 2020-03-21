def triangle(baris):
    if (type(baris) != int) or (baris < 0):
        print('Parameter harus angka dan positif!')
        return
        
    for i in range(baris+1):
        for j in range(i):
            print('#', end='')
        print('\n')

triangle(10)