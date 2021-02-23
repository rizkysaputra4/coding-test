package com.tutorial;

//kelas daftar nama pengunjung
class Visitor{
    String name;
    double money;
    Food food;
    int porsiMakan;
    Drink drink;
    int porsiMinum;
    double foodPrice;
    double drinkPrice;
    double totalBill;
    double moneyLeft;

    Visitor(String name, double money){
        this.name = name;
        this.money = money;
    }

    void eatPortion(Food food, int porsiMakan){
        this.food = food;
        this.porsiMakan = porsiMakan;
    }

    void drinkPortion(Drink minum, int porsiMinum){
        this.drink = minum;
        this.porsiMinum = porsiMinum;
    }

    void calculateBill(){
        foodPrice = this.food.foodPrice * this.porsiMakan;
        drinkPrice = this.drink.drinkPrice * this.porsiMinum;
        totalBill = foodPrice + drinkPrice;
        moneyLeft = this.money - totalBill;

        System.out.println(this.name + " harus bayar ");
        System.out.print(totalBill);
        System.out.print(" sisa uang " + this.name + " " + moneyLeft);
        System.out.println("\n");
    }

    void Display(){
        System.out.println("\n" + this.name + " Bawa duit " + this.money + " ");
        System.out.print("makan ");
        this.food.displayFood();
        System.out.print(this.porsiMakan + " porsi");
        System.out.print(" dan minum ");
        this.drink.displayDrink();
        System.out.print(this.porsiMinum + " porsi "+ "\n");
        calculateBill();

    }

}

//kelas daftar menu makanan
class Food{
    String name;
    double foodPrice;

    Food(String name, double price){
        this.name = name;
        this.foodPrice = price;
    }

    void displayFood(){
        System.out.print(this.name + " ");
    }

    void displayFoodPrice(){
        System.out.print("Harga Rp " + this.foodPrice + " ");
    }
    
}

//kelas daftar menu minuman
class Drink{
    String name;
    double drinkPrice;

    Drink(String name, double price){
        this.name = name;
        this.drinkPrice = price;
    }

    void displayDrink(){
        System.out.print(this.name + " ");
    }

    void displayDrinkPrice(){
        System.out.print("Harga Rp " + this.drinkPrice + "per porsi ");
    }


}


public class LatihanOOP1{
    public static void main(String[] args) {
        Visitor Pengunjung1 = new Visitor("Rizky", 100000);
        Visitor Pengunjung2 = new Visitor("Budi", 50000);
        Visitor Pengunjung3 = new Visitor("Ari", 30000);
        Visitor Pengunjung4 = new Visitor("Kais", 50000);
        Visitor Pengunjung5 = new Visitor("Roviq", 150000);

        Food Makanan1 = new Food("Pecel", 10000);
        Food Makanan2 = new Food("Kredok", 9000);
        Food Makanan3 = new Food("Nasi Uduk", 7000);
        Food Makanan4 = new Food("Seblak", 8000);
    
        Drink Minuman1 = new Drink("Coca-Cola", 5000);
        Drink Minuman2 = new Drink("Es teh", 3000);
        Drink Minuman3 = new Drink("Kopi", 5000);
        Drink Minuman4 = new Drink("Es Krim", 7000);
        
        Pengunjung1.eatPortion(Makanan1, 1);
        Pengunjung1.drinkPortion(Minuman2, 2);
        Pengunjung1.Display();

        Pengunjung2.eatPortion(Makanan3, 2);
        Pengunjung2.drinkPortion(Minuman2, 1);
        Pengunjung2.Display();

        Pengunjung3.eatPortion(Makanan4, 1);
        Pengunjung3.drinkPortion(Minuman1, 5);
        Pengunjung3.Display();
     
        Pengunjung4.eatPortion(Makanan2, 2);
        Pengunjung4.drinkPortion(Minuman4, 5);
        Pengunjung4.Display();

        Pengunjung5.eatPortion(Makanan1, 4);
        Pengunjung5.drinkPortion(Minuman3, 2);
        Pengunjung5.Display();

    }
}