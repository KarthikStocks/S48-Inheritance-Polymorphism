import Stock from "./Stock";

class CompanyStock extends Stock {
  constructor(name, price, sector, percentageChange, displayMessage) {
    super(name, price, sector, displayMessage);
    this.percentageChange = percentageChange;
  }

  stockTrend() {
    if (this.percentageChange > 0) {
      this.displayMessage(
        `${this.name} stock is trending upwards by ${this.percentageChange}% 📈`
      );
    } else {
      this.displayMessage(
        `${this.name} stock is trending downwards by ${this.percentageChange}% 📉`
      );
    }
  }

  // Method Overriding: Only the last `calculateResult` definition will apply.
  calculateResult() {
    this.displayMessage("No parameters received");
  }

  calculateResult(a) {
    this.displayMessage("One parameter received");
  }

  calculateResult(a, b) {
    this.displayMessage("Two parameters received");
  }

  calculateResult(a, b, c) {
    this.displayMessage("Three parameters received");
  }
}

export default CompanyStock;
