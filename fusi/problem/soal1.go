package problem

import "fmt"

// Soal1 is returning slice from both input if any
func Soal1(arr1 []int, arr2 []int) {

	tmpArr1 := append([]int(nil), arr1...)
	tmpArr2 := append([]int(nil), arr2...)
	fmt.Print("Problem 1   ")
	printed := fmt.Sprintf("Input 1: %v, input 2: %v, Return: %v", tmpArr1, tmpArr2, intersect(arr1, arr2))
	fmt.Println(printed)

}

func intersect(arr1 []int, arr2 []int) []int {
	var result []int

	for _, v1 := range arr1 {
		j := 0
		for j < len(arr2) {
			if v1 == arr2[j] {
				result = append(result, v1)
				arr2[j] = arr2[len(arr2)-1] // remove the matched element in arr2 to avoid repeated match
				arr2 = arr2[:len(arr2)-1]
				break
			}
			j++
		}
	}

	return result
}
