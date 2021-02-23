def biggestFactor(inputList):

    inputList.sort()
    print("Input: ", inputList)
    inputList.reverse()
    n = 0
    result = []
    loop = True

    while (loop == True):  
        n += 1
        remains = n

        for i in range(len(inputList)):
            remains = remains - inputList[i]

            if remains < 0:
                remains = remains + inputList[i]

            elif remains == 0:
                result.append(n)

        if (len(result) == 0):
            loop = False

        else:
            resultLen = len(result)
            loopBreaker = (result[resultLen-1]-result[resultLen-2])
            if (result[resultLen-1] == sum(inputList)):
                loop = False
            elif (loopBreaker > 1):
                result.pop()
                loop = False

    print("Output: ", len(result), end='\n\n')
    
    
biggestFactor([1,1,2,3,4,5,30,35,100])
biggestFactor([9,3,2,2,3])
biggestFactor([1,2,3,10])
biggestFactor([1,1,100])
biggestFactor([1,1,3,4,6,8])
biggestFactor([1,2,3,4,5,6,7])

print(sum([1,2,3,4,5,6,7]))