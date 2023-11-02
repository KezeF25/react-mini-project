import React, { useEffect, useRef, useState } from 'react';
import { Block } from './Block';
import './style/index.css';

function App() {

  const ratesRef = useRef({});

  const [fromCurrency, setFromCurrency] = useState("RUB");
  const [toCurrency, setToCurrency] = useState("USD");
  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(1);

  useEffect(() => {
    fetch('https://www.cbr-xml-daily.ru/latest.js')
    .then((obj) => obj.json())
    .then((obj) => {
      ratesRef.current = {...obj.rates, "RUB" : 1}
      onChangeToPrice(1);
    })
    .catch((err) => {
      console.warn(err);
      alert('Не получилось получить данные');
    })
  }, []);

  useEffect(() => {
    onChangeFromPrice(fromPrice);
  }, [fromCurrency]);

  useEffect(() => {
    onChangeToPrice(toPrice);
  }, [toCurrency]);

  function onChangeFromPrice(value){
    const result = (value / ratesRef.current[fromCurrency]) * ratesRef.current[toCurrency];
    setToPrice(result.toFixed(3));
    setFromPrice(value);
  }

  function onChangeToPrice(value){
    const result = (value / ratesRef.current[toCurrency]) * ratesRef.current[fromCurrency];
    setFromPrice(result.toFixed(3));
    setToPrice(value);
  }

  return (
    <div className="App">
      <Block value={fromPrice} currency={fromCurrency} onChangeCurrency={setFromCurrency} onChangeValue={onChangeFromPrice} />
      <Block value={toPrice} currency={toCurrency} onChangeCurrency={setToCurrency} onChangeValue={onChangeToPrice} />
    </div>
  );
}

export default App;
