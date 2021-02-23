fun main(){
    print(multiplicationTable(7))
}

fun multiplicationTable(n: Int): List<List<Int>>{

    var basicList = listOf(1, 2, 3)
    var mList = List(n) {List(basicList.size) {0} }
    var nLoop = 1

    while (nLoop <= n) {

        for (i in (nLoop-1)..mList.size-1) {

            for (j in 0..mList[i].size-1) {

                (mList[i]as ArrayList <Int>)[j] = nLoop * basicList[j]

            }

        }
        nLoop++
    }


    return mList
}