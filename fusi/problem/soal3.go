package problem

import "fmt"

// Soal3 is returning fibonacci sequence by giving an integer as input
func Soal3(number int) {
	result := getFibSeries(number)
	printed := fmt.Sprintf("Input: %v, return: %v", number, result)
	fmt.Print("Problem 3   ")
	fmt.Println(printed)

}

func getFibSeries(number int) []int {

	if number < 0 {
		return nil
	}

	result := []int{0, 1}

	for i := 2; i <= number; i++ {
		result = append(result, result[i-1]+result[i-2])
	}

	return result[:number]
}
