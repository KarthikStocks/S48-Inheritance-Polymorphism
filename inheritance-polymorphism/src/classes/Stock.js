class Stock {
  constructor(name, price, sector, displayMessage) {
    this.name = name;
    this.price = price;
    this.sector = sector;
    this.displayMessage = displayMessage;
  }

  stockTrend() {
    this.displayMessage(`Stock trends are not available for ${this.name}.`);
  }
}

export default Stock;
