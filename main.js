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
  tipRambleOne: document.querySelector('.tipRambleOne'),
  tipRambleTwo: document.querySelector('.tipRambleTwo'),
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

function showRamble() {
  const { tipRambleOne: rambleOne, tipRambleTwo: rambleTwo } = DOM;
  const tip = rateService(DOM.inputService.value);
  const highTip = ['That\'s some mighty fine tippin\'', 'Trying to buy some good karma?', 'This means you\'re probably an alright person'];
  const highTipPercent = ['You\'re tipping 25%.  Hat\'s off to ya.', 'You\'ve deemed the service worthy of a 25% tip.'];
  const cheapTip = ['Think about that for a second.', 'Your tip is pretty low.  Do with that what you will.'];
  const cheapTipPercent = ['You\'re giving 10%.  Not a whole lot.', '10% tip.'];
  const noTip = ["You're not giving a tip at all.  Some deem this unforgivable.", 'Based on how bad you thought the service was, there\'s no tip.'];
  if (tip === 0) {
    rambleOne.innerText = noTip[Math.floor(Math.random() * noTip.length)];
    rambleTwo.innerText = noTip[Math.floor(Math.random() * noTip.length)];
  } else if (tip === 0.1) {
    rambleOne.innerText = cheapTipPercent[Math.floor(Math.random() * cheapTipPercent.length)];
    rambleTwo.innerText = cheapTip[Math.floor(Math.random() * cheapTip.length)];
  } else if (tip === 0.25) {
    rambleOne.innerText = highTipPercent[Math.floor(Math.random() * highTipPercent.length)];
    rambleTwo.innerText = highTip[Math.floor(Math.random() * highTip.length)];
  }
};

function domChanges() {
  DOM.responseShare.innerText = getTotalShare();
  DOM.responseBase.innerText = getTotalBase();
  DOM.responseTip.innerText = getTotalTip();
  getResponse();
  showResults();
  showRamble();
}

DOM.button.addEventListener('click', domChanges);
