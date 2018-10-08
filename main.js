'use strict';

const DOM = {
  inputTotal: document.querySelector('.inputTotal'),
  inputService: document.querySelector('.service'),
  inputPeople: document.querySelector('.inputPeople'),
  button: document.querySelector('button'),
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
  const totalNum = parseInt(DOM.inputTotal.value);
  const payeesNum = parseInt(DOM.inputPeople.value);
  const tip = rateService(DOM.inputService.value);
  const total = ((totalNum * tip) + totalNum) / payeesNum;
  console.log(totalNum);
  return total.toFixed(2);
}

function getTotalBase() {
  const totalNum = parseInt(DOM.inputTotal.value);
  const payeesNum = parseInt(DOM.inputPeople.value);
  const total = totalNum / payeesNum;
  return total.toFixed(2);
}

function getTotalTip() {
  const totalNum = parseInt(DOM.inputTotal.value);
  const tip = rateService(DOM.inputService.value);
  const payeesNum = parseInt(DOM.inputPeople.value);
  const total = (totalNum * tip) / payeesNum;
  return total.toFixed(2);
}

function domChanges() {
  DOM.responseShare.innerText = getTotalShare();
  DOM.responseBase.innerText = getTotalBase();
  DOM.responseTip.innerText = getTotalTip();
}

DOM.button.addEventListener('click', domChanges);
