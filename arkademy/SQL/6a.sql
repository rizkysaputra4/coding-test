CREATE TABLE Product (
    id INT AUTO_INCREMENT,
    name VARCHAR(100),
    price VARCHAR(100),
    id_category VARCHAR(100),
    id_cashier VARCHAR(100),
    PRIMARY KEY (id)
);
CREATE TABLE Category (
    id INT AUTO_INCREMENT,
    name VARCHAR(100),
    PRIMARY KEY (id)
);

CREATE TABLE Cashier (
    id INT AUTO_INCREMENT,
    name VARCHAR(100),
    PRIMARY KEY (id)
);

INSERT INTO Product(name, price, id_category, id_cashier)
VALUES	('Latte','10000','2','1'),
		('Cake','20000','1','2'),
        ('Pecel','45000','1','3');

INSERT INTO Category(name)
VALUES	('Food'),
		('Drink'),
        ('Food');
        
INSERT INTO cashier(name)
VALUES	('Pevita Pearce'),
		('Raisa Andriana'),
        ('Rizky Saputra');


SELECT*FROM Product;
SELECT*FROM Category;
SELECT*FROM Cashier;

#----------------Join Table---------------
SELECT 
		cashier.name as "Cashier",
        Product.name as "Product",
        Category.name as "Category",
        Product.price as "Price"
FROM 
		Product
	LEFT JOIN cashier ON cashier.id=Product.id_cashier
	LEFT JOIN Category ON Category.id=Product.id_category;