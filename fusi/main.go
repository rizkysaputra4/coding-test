package main

import (
	"github.com/rizkysaputra4/coding-test/fusi/problem"
)

func main() {
	arr1 := []int{5, 2, 1, 7, 9, 4}
	arr2 := []int{1, 2, 3, 9, 8, 5}
	arr3 := []int{5, 2, 2, 2, 2, 2, 7, 9, 4, 10, 11}
	arr4 := []int{1, 2, 3, 9, 8, 5, 33, 12}
	problem.Soal1(arr1, arr2)
	problem.Soal1(arr3, arr4)
	problem.Soal2("kasur kakak rusak")
	problem.Soal2("we panic in a pew")
	problem.Soal2("this should return false")
	problem.Soal3(20)
	problem.Soal3(0)
	problem.Soal3(1)
}
