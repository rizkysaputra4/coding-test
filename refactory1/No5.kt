fun palindromeCheck(sampleRandom: String): String{

    var sample = sampleRandom.toLowerCase()
    var revSample = sample.reversed()

    var sampleSplitted = sample.split("")
    var revSampleSplitted = revSample.split("")

    var result:String = ""

    for (i in 0..sampleSplitted.size - 1){
        if (sampleSplitted[i] != revSampleSplitted[i]){
            result = "Sentence is not Palindrome"
            break
        }else{
            result = "Sentence is Palindrome"
        }
    }
    return result
}

fun main(){
    println(palindromeCheck("kasur ini rusak"))
    println(palindromeCheck("Sator Arepo Tenet Opera Rotas"))
}