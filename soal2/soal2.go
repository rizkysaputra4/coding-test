package soal2

import (
	"fmt"
)

// Data data structure untuk soal nomor 2
type Data struct {
	Input    []int
	Kelompok int
}

// GroupData ...
func (d Data) GroupData() {
	dataGroup1, dataGroup2, dataGroup3 := d.divideInTo3()
	group1 := &Data{Input: dataGroup1, Kelompok: 1}
	group2 := &Data{Input: dataGroup2, Kelompok: 2}
	group3 := &Data{Input: dataGroup3, Kelompok: 3}

	fmt.Printf("\n----------------------------------\n")
	fmt.Printf("Output Soal No 2\n\n")

	group1.print()
	group2.print()
	group3.print()
}

// dataGrouping , membagi data ke dalam tiga grup
func (d Data) divideInTo3() ([]int, []int, []int) {
	mod := len(d.Input) % 3
	var len1, len2 int
	len := int(len(d.Input) / 3)
	if mod == 0 {
		len1, len2 = len, len
	} else if mod == 1 {
		len1, len2 = len+1, len
	} else {
		len1 = len + 1
		len2 = len1
	}

	group1 := d.Input[0:len1]
	group2 := d.Input[len1 : len1+len2]
	group3 := d.Input[len1+len2:]

	return group1, group2, group3
}

// sortData ...
func (d Data) sortData() []int {
	var buffer int
	dat := d.Input
	i := 0
	for i < (len(dat) - 1) {
		if dat[i] > dat[i+1] {
			buffer = dat[i]
			dat[i] = dat[i+1]
			dat[i+1] = buffer
			i = -1
		}
		i++
	}
	return dat
}

// Sum all element in array
func (d Data) Sum() int {
	var total int
	for _, el := range d.Input {
		total += el
	}

	return total
}

func (d Data) getAvg() float32 {
	total := float32(d.Sum()) / float32(len(d.Input))
	return total
}

func (d Data) print() {
	fmt.Println("Kelompok", d.Kelompok, ": ", d.sortData(), "|",
		"Total: ", d.Sum(), "|",
		"Rata-rata: ", d.getAvg(), "|",
		"Nilai Tertinggi: ", d.sortData()[len(d.Input)-1], "|",
	)
}
