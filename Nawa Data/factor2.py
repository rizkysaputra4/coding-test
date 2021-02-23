

def factorr(length):
    
    result = []
    loop = 1
    n = 0
    while (loop == True):
        n = n+1
        t = True

        for i in range(2, n-1):

            mod = n % i    
                
            if ((mod == 0)):
                t = False

        if t :
            result.append(n)

        if (len(result) == length):
            loop = False
        
    print(result)

factorr(10)