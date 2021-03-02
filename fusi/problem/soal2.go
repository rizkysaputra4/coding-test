package problem

import (
	"fmt"
	"strings"
)

// Soal2 is deciding whether the input is palindrome or not
func Soal2(sentence string) {
	result := isPalindrome(sentence)
	fmt.Print("Problem 2   ")
	printed := fmt.Sprintf("input: '%v',  return: %v", sentence, result)
	fmt.Println(printed)
}

// isPalindrome input must lowercase
func isPalindrome(input string) bool {

	letters := splitInput(input)

	leftPointer := 0
	rightPointer := len(letters) - 1
	res := true
	for true {
		if leftPointer >= rightPointer {
			break
		}

		if letters[leftPointer] == letters[rightPointer] {
			leftPointer++
			rightPointer--
		} else {
			res = false
			break
		}

	}
	return res
}

func splitInput(input string) []string {
	splittedInput := strings.Split(input, " ")

	var letters []string

	for _, v := range splittedInput {
		letters = append(letters, strings.Split(v, "")...)
	}
	return letters
}
