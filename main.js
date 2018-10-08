'use strict';

const DOM = {
  form: document.querySelector('form'),
  inputTotal: document.querySelector('.inputTotal'),
  inputService: document.querySelector('.service'),
  inputPeople: document.querySelector('.inputPeople'),
  button: document.querySelector('button'),
  results: document.querySelector('.results'),
  responseShare: document.querySelector('.totalShare'),
  responseComment: document.querySelector('.results__response'),
  responseBase: document.querySelector('.totalBase'),
  responseTip: document.querySelector('.totalTip'),
};

function rateService(service) {
  let tipPercent;
  if (service === 'terrible') {
    tipPercent = 0;
  } else if (service === 'bad') {
    tipPercent = 0.1;
  } else if (service === 'average') {
    tipPercent = 0.15;
  } else if (service === 'good') {
    tipPercent = 0.2;
  } else {
    tipPercent = 0.25;
  }
  return tipPercent;
}

function getTotalShare() {
  const totalNum = parseInt(DOM.inputTotal.value, 10);
  const payeesNum = parseInt(DOM.inputPeople.value, 10);
  const tip = rateService(DOM.inputService.value);
  const total = ((totalNum * tip) + totalNum) / payeesNum;
  return total.toFixed(2);
}

function getTotalBase() {
  const totalNum = parseInt(DOM.inputTotal.value, 10).toFixed(2);
  const payeesNum = parseInt(DOM.inputPeople.value, 10);
  const total = totalNum / payeesNum;
  return total.toFixed(2);
}

function getTotalTip() {
  const totalNum = parseInt(DOM.inputTotal.value, 10).toFixed(2);
  const tip = rateService(DOM.inputService.value);
  const payeesNum = parseInt(DOM.inputPeople.value, 10);
  const total = (totalNum * tip) / payeesNum;
  return total.toFixed(2);
}

function getResponse() {
  const total = getTotalShare();
  const expensive = ['Ouch', 'How much money do you make?!', 'High roller, eh?'];
  const reasonable = ['Not bad', 'You wont break the bank with this', 'Reasonable'];
  const cheap = ['You seriously needed a calculator for this?', 'Are you splitting a Mcdonalds order?', 'Live a little next time'];

  if (total <= 15) {
    DOM.responseComment.innerText = cheap[Math.floor(Math.random() * cheap.length)];
  } else if (total <= 70) {
    DOM.responseComment.innerText = reasonable[Math.floor(Math.random() * reasonable.length)];
  } else {
    DOM.responseComment.innerText = expensive[Math.floor(Math.random() * expensive.length)];
  }
}

function showResults() {
  const { results: results, form: form } = DOM;
  results.style.display = 'flex';
  results.style.transform = 'scaleX(1)';
  results.style.opacity = '1';
}

function domChanges() {
  DOM.responseShare.innerText = getTotalShare();
  DOM.responseBase.innerText = getTotalBase();
  DOM.responseTip.innerText = getTotalTip();
  getResponse();
  showResults();
}

DOM.button.addEventListener('click', domChanges);
