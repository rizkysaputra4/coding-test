package main

import (
	"fmt"

	"github.com/rizkysaputra4/tryout_refactory/soal1"
	"github.com/rizkysaputra4/tryout_refactory/soal2"
	"github.com/rizkysaputra4/tryout_refactory/soal3"
	"github.com/rizkysaputra4/tryout_refactory/soal4"
)

func main() {
	// call soal nomor1
	soal1 := soal1.Pattern{NumberList: 123456789}
	err := soal1.NumberPattern()
	if err != nil {
		fmt.Println(err)
	}

	// call soal nomor 2
	inputNo2 := []int{1, 2, 33, 44, 55, 33, 44, 22, 44, 33, 2, 77, 66, 1, 2, 3, 4, 5, 6, 7, 89, 3, 3, 8, 9, 75, 4, 3, 2, 2, 1, 3}
	soal2 := soal2.Data{Input: inputNo2}
	soal2.GroupData()

	// call soal nomor 3
	inputNo3 := "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum mi eu magna fermentum, vel luctus tellus semper. Nunc dignissim eleifend ipsum, nec viverra mauris pellentesque non. Fusce auctor ex id mauris egestas, quis luctus nunc pharetra. Sed in dignissim nisi. Aliquam sed tempor urna, nec aliquam mi. Aenean eu feugiat lacus, vel dictum eros. Nulla condimentum porttitor aliquet. Vestibulum vehicula elit non arcu auctor maximus. Quisque est eros, maximus nec diam faucibus, mollis odio."
	soal3 := &soal3.StringInput{Sentence: inputNo3}
	soal3.Result()

	// call soal nomor 4
	soal4.GuessTheNumber(1)

}
