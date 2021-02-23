fun findName(randomNameInput: String): List<String>{

    var randomName = randomNameInput.toLowerCase()

    var food = listOf(
        listOf("b", "u", "r", "g"),
        listOf("f", "r", "i", "e"),
        listOf("c", "h", "i", "c"),
        listOf("p", "i", "z", "z"),
        listOf("s", "a", "n", "d"),
        listOf("o", "n", "i", "o"),
        listOf("m", "i", "l", "k"),
        listOf("c", "o", "k", "e")
    )

    var randomOrd = randomName.split("")
    var result:List<String> = listOf()

    for (i in 0..food.size-1){
        for (j in 3..randomOrd.size-1){
            if ((food[i][0] == randomOrd[j-3]) && (food[i][1] == randomOrd[j-2]) && (food[i][2] == randomOrd[j-1]) && (food[i][3] == randomOrd[j-0]) ){
                when (i){
                    0 -> result += "Burger"
                    1 -> result += "Fries"
                    2 -> result += "Chicken"
                    3 -> result += "Pizza"
                    4 -> result += "Sandwich"
                    5 -> result += "Onionrings"
                    6 -> result += "Milkshake"
                    7 -> result += "Coke"
                }

            }

        }

    }

    return result
}

fun main(){
    print(findName("BURGERburgerpizzaamilkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"))
}
