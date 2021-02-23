fun hello(name: String = "Hello, World!"): String{

    var namePrint = "Hello, World!"
    if (name.isBlank()){
        return namePrint
    }else if (name == "Hello, World!"){
        namePrint = name
        return namePrint
    }else{
        namePrint = "Hello, $name!"
        return namePrint
    }


}

fun main(){
    println(hello(""))
    println(hello())
    println(hello("Alice"))
}