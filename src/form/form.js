import React, { useState, useEffect, setState } from "react";
import ReactDOM from "react-dom";

export default function UserInput() {
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [tempUserInput, setTempUserInput] = useState();
  const [amount, setAmount] = useState();
  const [toAmount, setToAmount] = useState();
  const [exchangeRate, setExchangeRate] = useState();
  const [showResults, setShowResults] = React.useState(false);
  console.log(exchangeRate);
  console.log(toAmount);
  const BASE_URL = "https://api.exchangerate.host/latest";
  const Results = () => (
    <div className="exchange exchange-active">
      <p>
        {amount} {fromCurrency} {toAmount} {toCurrency}{" "}
      </p>
    </div>
  );
  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
        .then((res) => res.json())
        .then((data) => setExchangeRate(data.rates[toCurrency]));
    }
  }, [fromCurrency, toCurrency]);
  function handleSubmit(event) {
    event.preventDefault();
    if (
      tempUserInput &&
      tempUserInput.split(" ").length >= 3 &&
      tempUserInput.split(" ")[0] > 0 &&
      tempUserInput.split(" ")[1].length === 3
    ) {
      setAmount(tempUserInput.split(" ")[0]);
      setFromCurrency(tempUserInput.split(" ")[1].toUpperCase());
      if (tempUserInput.split(" ").length === 3)
        setToCurrency(tempUserInput.split(" ")[2].toUpperCase());
      else setToCurrency(tempUserInput.split(" ")[3].toUpperCase());
      setToAmount(() => {
        return (amount * exchangeRate).toFixed(3);
      });

      if (toCurrency)
        if (toCurrency.length === 3) setShowResults(true);
        else setShowResults(false);
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit} className={"form__wrap"} autoComplete="off">
        <div className="form__group">
          <div className="centered">
            <div className="group">
              <input
                type="text"
                id="name"
                required="required"
                onChange={(e) => setTempUserInput(e.target.value)}
              />
              <label htmlFor="name">ask (e.g. 15 usd in rub)</label>
              <div className="bar"></div>
            </div>
          </div>
        </div>
      </form>
      <div id="container centered">{showResults ? <Results /> : null}</div>
    </>
  );
}
