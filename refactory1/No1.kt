import java.util.Arrays

fun sort(integers: Array<Int>): Int {

    var sumOfSwap = 0
    var i = 1

    while (i < integers.size){
        if (integers[i-1] > integers[i]){
            sumOfSwap += 1

            var swap = intArrayOf(integers[i-1], integers[i])
            print("\n $sumOfSwap. ${Arrays.toString(swap)} -> ")

            for (element in integers){
                print("$element " )
            }

            var swapValue = integers[i]

            integers[i] = integers[i-1]
            integers[i-1] = swapValue

            i = 1

        }else{
            i++
        }
    }
    println("\n Jumlah Swap: $sumOfSwap")

    return 0
}

fun main(){
    val exampleTest1 = arrayOf(2,6,8,-10,3)
    val exampleTest2 = arrayOf(4, 9 ,7 ,5 ,8 ,9 ,3)
    sort(exampleTest1)
    sort(exampleTest2)
}