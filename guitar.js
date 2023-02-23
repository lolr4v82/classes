class Guitar {
  constructor(color, style, price, company) {
    this.name = name;
    this.color = color;
    this.style = style;
    this.price = price;
    this.company = company;
  }
  showPrice() {
    console.log("This guitars style is " + ${this.style} + " it's color is " + ${this.color} + " the company is " + ${this.company} + "and the price is " + ${this.price} + ".");
  }
}
const tele = new Guitar("red", "telecaster", "3000$", "Fender");
tele.showPrice();
