# Jawaban dari TryOut Refactory

## Jawaban soal Algoritma
soal algoritma dapat dijalankan dengan
```bash
$ go run main.go
```
semua berjalan dengan baik, dibawah ini adalah sample outputnya:

```bash
Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.

Try the new cross-platform PowerShell https://aka.ms/pscore6

PS C:\Users\Asus A455L\go\src\github.com\rizkysaputra4\tryout_refactory> go run main.go

-------------------------
Output Soal No 1

100000000       
20000000        
3000000
400000
50000
6000
700
80
9

----------------------------------
Output Soal No 2

Kelompok 1 :  [1 2 2 22 33 33 33 44 44 44 55] | Total:  313 | Rata-rata:  28.454546 | Nilai Tertinggi:  55 |
Kelompok 2 :  [1 2 3 3 4 5 6 7 66 77 89] | Total:  263 | Rata-rata:  23.90909 | Nilai Tertinggi:  89 |
Kelompok 3 :  [1 2 2 3 3 3 4 8 9 75] | Total:  110 | Rata-rata:  11 | Nilai Tertinggi:  75 |

------------------------------
Output Soal No 3

Hitung perulangan tiap karakter:
karakter  A sebanyak 30 kali
karakter  B sebanyak 2 kali
karakter  C sebanyak 20 kali
karakter  D sebanyak 13 kali
karakter  E sebanyak 46 kali
karakter  F sebanyak 5 kali
karakter  G sebanyak 6 kali
karakter  H sebanyak 2 kali
karakter  I sebanyak 42 kali
karakter  J sebanyak 0 kali
karakter  K sebanyak 0 kali
karakter  L sebanyak 23 kali
karakter  M sebanyak 28 kali
karakter  N sebanyak 28 kali
karakter  O sebanyak 17 kali
karakter  P sebanyak 8 kali
karakter  Q sebanyak 7 kali
karakter  R sebanyak 22 kali
karakter  S sebanyak 34 kali
karakter  T sebanyak 26 kali
karakter  U sebanyak 40 kali
karakter  V sebanyak 6 kali
karakter  W sebanyak 0 kali
karakter  X sebanyak 3 kali
karakter  Y sebanyak 0 kali
karakter  Z sebanyak 0 kali

Geser sebanyak 5 karakter:
Qtwjr nuxzr itqtw xny frjy1 htsxjhyjyzw finunxhnsl jqny3 Hwfx nsyjwizr rn jz rflsf kjwrjsyzr1 {jq qzhyzx yjqqzx xjrujw3 Szsh inlsnxxnr jqjnkjsi nuxzr1 sjh {n{jwwf rfzwnx ujqqjsyjxvzj sts3 Kzxhj fzhytw j} ni rfzwnx jljxyfx1 vznx qzhyzx szsh umfwjywf3 Xji ns inlsnxxnr snxn3 Fqnvzfr xji yjrutw zwsf1 sjh fqnvzfr rn3 Fjsjfs jz kjzlnfy qfhzx1 {jq inhyzr jwtx3 Szqqf htsinrjsyzr utwyynytw fqnvzjy3 [jxyngzqzr {jmnhzqf jqny sts fwhz fzhytw rf}nrzx3 Vznxvzj jxy jwtx1 rf}nrzx sjh infr kfzhngzx1 rtqqnx tint3
--------------------------
Output Soal No 4

Tebakan ke-1: 50
Tebakan ke-1: 25
Tebakan ke-2: 37
Tebakan ke-3: 43
Tebakan ke-4: 46
Tebakan ke-5: 48
Tebakan ke-6: 47
Angka input: 47, ditemukan dalam 6 langkah

PS C:\Users\Asus A455L\go\src\github.com\rizkysaputra4\tryout_refactory> 
```

## Jawaban soal Esai

### Go
Bahasa pemrograman yang saya gunakan dalam mengegerjakan tryout ini adalah Go. Projek Go dibangun dengan latar belakang bahwa dari waktu ke waktu performa komputer telah berkembang dengan pesat sejak dikembangkannya bahasa pemrogramman seperti c, c++, dan java. Saat ini multiprocessor pada komputer adalah hal yang umum, namun sangat sulit untuk melakukan pemrograman menggunakan konsep tersebut yang efisien dan aman dengan menggunakan kebanyakan bahasa pemrograman yang tersedia saat ini. Berdasarkan permasalahan itu dibuatlah bahasa pemrograman Go yang bertujuan untuk menggabungkan antara kemudahan pemrograman yang umumnya ditemukan pada konsep bahasa interpreted dengan performa dan kemanan yang umumnya ada pada bahasa compiled. 

### Aturan dalam penulisan go
##### Nama package

```golang
import "bytes"
```
Ketika mengimport package maka nama package akan menjadi titik untuk mengakses kontennya. Contohnya untuk mengakses "Buffer" maka untuk mengaksesnya dapat dengan menulis bytes.Buffer. Agar tiap orang dapat mengetahui package apa yang dimaksud, maka nama package harus pendek, ringkas

#### Initialization
##### Variabel

variabel dapat ditulis dengan
```golang
var (
    home   = os.Getenv("HOME")
    user   = os.Getenv("USER")
    gopath = os.Getenv("GOPATH")
)
```
##### Function
Function ditulis dengan 
```golang
// agar function dapat di import di package lain maka penamaannya harus menggunakan format PascalCase
func function1() string {
    return fmt.Sprintf("ini func 1")
}
```
##### Struct
// Penggunaan PascalCase juga berlaku untuk struct
Mendeklarasikan struct yaitu dengan:
```golang
type NamaStruct struct {
    Element string
    Element2 int
    Element3 []int
}
```
untuk mendeklarasikan sebuah function yang terhubung dengan struct yaitu dengan:
```golang
func (n NamaStruct) Func1(){
    fmt.Println(n.Element) 
}
```


