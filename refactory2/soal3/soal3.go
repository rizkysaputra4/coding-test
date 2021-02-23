package soal3

import (
	"fmt"
	"strings"
)

// StringInput ...
type StringInput struct {
	Sentence string
}

type word struct {
	word string
}

// Result ...
func (s StringInput) Result() {
	fmt.Printf("\n------------------------------\n")
	fmt.Println("Output Soal No 3")

	s.CountLetter()
	fmt.Printf("\nGeser sebanyak 5 karakter:\n")
	fmt.Println(s.shiftLetter())
}

// CountLetter ...
func (s StringInput) CountLetter() {
	var total int

	s.Sentence = strings.ToUpper(s.Sentence)
	listArray := strings.Split(s.Sentence, "")

	fmt.Println("\nHitung perulangan tiap karakter: ")
	// 97-122 adalah Ascii daru A-Z
	for i := 65; i <= 90; i++ {
		total = 0
		for _, el := range listArray {
			if string(i) == el {
				total += 1
			}
		}
		fmt.Println("karakter ", string(i), "sebanyak", total, "kali")
	}
}

func (s StringInput) shiftLetter() string {

	listArray := strings.Split(s.Sentence, " ")
	var sentence string
	for _, el := range listArray {
		word := &word{word: el}
		sentence += word.shift()
	}
	return sentence
}

func (w word) shift() string {
	var word string
	for _, i := range w.word {

		word += string(i + 5)

		// Shift letter only(Lower and Upper) +5 Characters
		/*

			if (i > 122-5 && i <= 122) || (i > 90-5 && i <= 90) {
				word += string(i + 5 - 26)
			} else if (i >= 97 && i <= 118) || (i >= 65 && i <= 85) {
				word += string(i + 5)
			} else {
				word += string(i)
			}

		*/
	}

	return word + " "
}
