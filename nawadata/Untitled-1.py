def Factor(inputList):

    
    print("Input: ", inputList)
 
    n = 0
    result = []
    loop = True
    t = bool
    while (loop == True):  
        n += 1

        for i in range(2, n-1):
           
           mod = n % i    
        

           if ((mod == 0)):
               t = False

        if t :
            result.append(n)

       
        print('loop')
        if (len(result) == inputList):
            loop = False

    print("Output: ", result, end='\n\n')
    
    

Factor(125)