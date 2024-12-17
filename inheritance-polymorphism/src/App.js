import "./App.css";
import Stock from "./classes/Stock";
import CompanyStock from "./classes/CompanyStock";
import { useState } from "react";

function App() {
  const [messages, setMessages] = useState([]);

  const displayMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  const resetMessages = () => {
    setMessages([]);
  };

  const runDemo = () => {
    resetMessages();

    let genericStock = new Stock("Generic", 100, "Misc", displayMessage);
    genericStock.stockTrend();

    let appleStock = new CompanyStock(
      "Apple",
      175,
      "Technology",
      2.5,
      displayMessage
    );
    appleStock.stockTrend();

    let teslaStock = new CompanyStock(
      "Tesla",
      900,
      "Automotive",
      -3.2,
      displayMessage
    );
    teslaStock.stockTrend();

    appleStock.calculateResult();
    appleStock.calculateResult(1);
    appleStock.calculateResult(1, 2);
    appleStock.calculateResult(1, 2, 3);
  };

  return (
    <div className="App">
      <header>
        <h1>OOPs Concepts</h1>
        <button onClick={runDemo}>Run Demo</button>
      </header>
      <section className="messages">
        {/* <h2>Messages:</h2> */}
        <div className="message-list">
          {messages.map((msg, index) => (
            <p key={index}>{msg}</p>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
