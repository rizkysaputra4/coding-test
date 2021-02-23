import re

def usernameCheck(name):
    if (len(name)) < 5 or (len(name)) > 7:
        return False
    else:
        for i in range(len(name)):
            if (ord(name[i])<97) or (ord(name[i])>122):
                return False
            else:
                return True

def passwordCheck(password):
    hKecil = re.findall("[a-z]", password)
    hBesar = re.findall("[A-Z]",password)
    angka = re.findall("[0-9]",password)
    char = re.findall("[@]",password)
    if (len(password) != 9) or len(hKecil) == 0 or len(hBesar) == 0 or len(angka) == 0 or len(char) == 0:
        return False
    else:
        return True


print(usernameCheck("riz"))
print(passwordCheck("Rizky43@q"))