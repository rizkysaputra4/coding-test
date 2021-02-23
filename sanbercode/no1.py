
def charSequence(n = 5):
    print('running')
    if (n <= 0):
        return 'input must > 0'
    else:
        for i in range (n):
            for j in range (i):
                print('o')
        return('hello')

print(charSequence())