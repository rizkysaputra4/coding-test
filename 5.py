def groupNumber(input):
    listInput = list(input)
    nonAngka = 0
#Menghilangkan karakter selain angka
    for i in range (len(listInput)):
        i -= nonAngka
        if (ord(listInput[i]) < 48) or (ord(listInput[i]) > 57):
            del listInput[i]
            nonAngka += 1
#------------------------------------------
#Mencetak hasil sesuai ketentuan
    j = -1
    for i in range (len(listInput)):
        #Jika hasil list tertinggal satu karakter di akhir
        if (len(listInput) % 3) == 1:
            if i == 0:
                print(listInput[i],end='')
            elif (i) <= (3 * ((len(listInput) // 3)-1)):
                if (i % 3) == 0:
                    print('-' + listInput[i], end='')
                else:
                    print(listInput[i],end='')
            
            else:
                j += 1
                if (j % 2) == 0:
                    print(listInput[i], end='')
                    if i == (len(listInput))-1:
                        print(end='')
                    else:
                        print('-', end='')
                    
                else:
                    print(listInput[i],end='')
                    
        #-----------------------------------------
        #Format list standar
        else:
            if i == 0:
                print(listInput[i],end='')
            elif (i % 3) == 0:
                print('-' + listInput[i], end='')
            else:
                print(listInput[i],end='')

#percobaan
groupNumber("41kjk1341lkf939 a'fla9 340 kjf983dg558 ;;kfijp087")