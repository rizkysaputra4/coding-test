package soal1

import (
	"fmt"
	"math"
	"sort"
)

// Pattern ...
type Pattern struct {
	NumberList int
}

// NumberPattern ...
func (p Pattern) NumberPattern() error {
	arr, err := p.ValidateArray()
	if err != nil {
		fmt.Println(err)
		return err
	}

	fmt.Println("-------------------------")
	fmt.Println("Output Soal No 1")

	for i := 0; i < len(arr); i++ {
		val := (arr[i]) * int(math.Pow10(len(arr)-(i+1)))
		fmt.Println(val)
	}

	return nil
}

// SplitInputNumber ...
func (p Pattern) SplitInputNumber() []int {
	var sequence []int
	var slice int
	listNumber := p.NumberList

	for listNumber > 0 {
		slice = listNumber % 10
		sequence = append(sequence, slice)
		listNumber = listNumber / 10
	}

	sort.Ints(sequence[:])

	return sequence
}

// ValidateArray ...
func (p Pattern) ValidateArray() ([]int, error) {
	arr := p.SplitInputNumber()

	for i := 1; i < len(arr); i++ {
		if arr[i]-arr[i-1] > 1 {
			err := fmt.Errorf("Error soal1: Input pada NumberList harus berurutan. contoh:12345678")
			return nil, err
		}
	}

	return arr, nil
}
