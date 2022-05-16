
export class Item{
    constructor(code,name,description,price)
    {
        this.code = code;
        this.name = name;
        this.description = description;
        this.price = price;
    }
}

export const ITEMS =[
    new Item(111,'Cola','1.5 Litter drink',10),
    new Item(222,'Pepsi','1 Litter drink',8),
    new Item(333,'Kinli','Orange Litter drink',7),
    new Item(444,'BasketBall','Fifa commercial ball',100),
    new Item(666,'Volvo','Best car with electric screen',200000),
];