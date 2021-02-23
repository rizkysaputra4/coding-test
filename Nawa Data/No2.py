def sortCharacter(input):

    vowelAscii = [97, 101, 105, 111, 117]
    #Input
    print("\n\n\nInput: ",input)
    listOfInput = list(input.lower())
    
    #while(" " in listOfInput):
    #   listOfInput.remove(" ")
    listOfInput.sort()

    print("Output: \nVowel Characters : ")
    for i in range (len(listOfInput)):
        if (ord(listOfInput[i]) in vowelAscii):
            print(listOfInput[i], end=' ')
            
    print("\nConsonant Characters : ")
    for i in range (len(listOfInput)):
        if (not(ord(listOfInput[i]) in vowelAscii) 
            and (ord(listOfInput[i]) in range(97,122))):
            print(listOfInput[i], end=' ')

sortCharacter("This is sample case//sda0913.")
sortCharacter("Rizky Saputra$3hl ")