package soal4

import "fmt"

// GuessTheNumber ...
func GuessTheNumber(number int) {
	var theNumber, numOfGuess int

	fmt.Println("--------------------------")
	fmt.Println("Output Soal No 4")
	if number > 100 || number < 0 {
		fmt.Println("Angka harus diantara 0 sampai 100")
	}
	myGuess := int(100 / 2)
	if myGuess == number {
		theNumber = number
	} else if myGuess > number {
		theNumber, numOfGuess = letsGuess(true, false, 50, 50, number, 1)
	} else {
		theNumber, numOfGuess = letsGuess(false, true, 50, 50, number, 1)
	}

	fmt.Printf("Angka input: %v, ditemukan dalam %v langkah", theNumber, numOfGuess)
}

func letsGuess(
	isLower bool,
	isUpper bool,
	previusGuess int,
	availableOption int,
	theNumber int,
	numOfGuess int,
) (int, int) {
	var guess int
	num := availableOption / 2

	if isLower {
		guess = (previusGuess - num)
		availableOption -= num
	}

	if isUpper {
		guess = previusGuess + num
		availableOption -= num
	}

	if guess < theNumber {
		return letsGuess(false, true, guess, availableOption, theNumber, numOfGuess+1)
	}

	if guess > theNumber {
		return letsGuess(true, false, guess, availableOption, theNumber, numOfGuess+1)
	}

	return guess, numOfGuess + 1
}
