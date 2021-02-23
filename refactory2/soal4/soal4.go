package soal4

import "fmt"

// GuessTheNumber ...
func GuessTheNumber(number int) error {
	var theNumber, numOfGuess int

	fmt.Println("--------------------------")
	fmt.Printf("Output Soal No 4\n\n")
	if number > 100 || number <= 0 {
		err := fmt.Errorf("Error: Angka harus diantara 0 sampai 100")
		return err
	}
	myGuess := int(100 / 2)
	fmt.Println("Tebakan ke-1: 50")
	if myGuess == number {
		theNumber = number
		numOfGuess = 1
	} else if myGuess > number {
		theNumber, numOfGuess = letsGuess(true, false, 50, 50, number, 1)
	} else {
		theNumber, numOfGuess = letsGuess(false, true, 50, 50, number, 1)
	}

	res := fmt.Sprintf("Angka input: %v, ditemukan dalam %v langkah\n", theNumber, numOfGuess)
	fmt.Println(res)
	return nil
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
	num := (availableOption / 2)

	if isLower {
		guess = (previusGuess - num)
		availableOption -= num
	}

	if isUpper {
		guess = previusGuess + num
		availableOption -= num
	}

	if previusGuess == guess {
		guess++
	}

	fmt.Printf("Tebakan ke-%v: %v\n", numOfGuess, guess)
	if guess < theNumber {
		return letsGuess(false, true, guess, availableOption, theNumber, numOfGuess+1)
	}

	if guess > theNumber {
		return letsGuess(true, false, guess, availableOption, theNumber, numOfGuess+1)
	}

	return guess, numOfGuess
}
