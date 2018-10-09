'use strict';

const DOM = {
  form: document.querySelector('form'),
  inputTotal: document.querySelector('.inputTotal'),
  inputService: document.querySelector('.service'),
  inputPeople: document.querySelector('.inputPeople'),
  goButton: document.querySelector('.goBtn'),
  returnButton: document.querySelector('.returnBtn'),
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
  const cheap = ['You seriously needed a calculator for this?', 'What are you splitting, a Mcdonalds order?', 'Live a little next time'];

  if (total <= 15) {
    DOM.responseComment.innerText = cheap[Math.floor(Math.random() * cheap.length)];
  } else if (total <= 70) {
    DOM.responseComment.innerText = reasonable[Math.floor(Math.random() * reasonable.length)];
  } else {
    DOM.responseComment.innerText = expensive[Math.floor(Math.random() * expensive.length)];
  }
}

function swivelLeft() {
  const { results: results, form: form } = DOM;
  form.classList.toggle('moveLeft');
  form.classList.toggle('moveRight');
  results.classList.toggle('moveLeft');
  results.classList.toggle('moveRight');
}
function swivelRight() {
  const { results: results, form: form } = DOM;
  form.classList.toggle('moveRight');
  form.classList.toggle('moveLeft');
  results.classList.toggle('moveRight');
  results.classList.toggle('moveLeft');
}

function showRamble() {
  const { tipRambleOne: rambleOne, tipRambleTwo: rambleTwo } = DOM;
  const tip = rateService(DOM.inputService.value);

  const maxTip = ['That\'s some mighty fine tippin\'.', 'Trying to buy some good karma?', 'This means you\'re probably an alright person.'];
  const maxTipPercent = ['You\'re tipping 25%.  Hats off to ya.', 'You\'ve deemed the service worthy of a 25% tip.'];

  const greatTip = ['They say 20% is the new 15%.', '20% is nothing to complain about.'];
  const greatTipPercent = ['You\'re tipping 20%.', '20% tip.'];

  const avgTip = ['That\'s average, but still on the lower side.', 'That\'s kinda low these days.'];
  const avgTipPercent = ['You\'re leaving 15%', '15%.  Not too hot.'];

  const cheapTip = ['Think about that before you pull the trigger.', 'Your tip is pretty low.  Do with that what you will.'];
  const cheapTipPercent = ['You\'re giving 10%.  Not a whole lot.', '10% tip.'];

  const noTip = ['Some deem this unforgivable.', 'You need to really think about doing this.', 'That is aggresive.'];
  const noTipPercent = ['That\'s a 0% tip.', 'Tip = 0%.  You sure?'];

  if (tip === 0) {
    rambleOne.innerText = noTipPercent[Math.floor(Math.random() * noTipPercent.length)];
    rambleTwo.innerText = noTip[Math.floor(Math.random() * noTip.length)];
  } else if (tip <= 0.1) {
    rambleOne.innerText = cheapTipPercent[Math.floor(Math.random() * cheapTipPercent.length)];
    rambleTwo.innerText = cheapTip[Math.floor(Math.random() * cheapTip.length)];
  } else if (tip === 0.15) {
    rambleOne.innerText = avgTipPercent[Math.floor(Math.random() * avgTipPercent.length)];
    rambleTwo.innerText = avgTip[Math.floor(Math.random() * avgTip.length)];
  } else if (tip === 0.2) {
    rambleOne.innerText = greatTipPercent[Math.floor(Math.random() * greatTipPercent.length)];
    rambleTwo.innerText = greatTip[Math.floor(Math.random() * greatTip.length)];
  } else if (tip === 0.25) {
    rambleOne.innerText = maxTipPercent[Math.floor(Math.random() * maxTipPercent.length)];
    rambleTwo.innerText = maxTip[Math.floor(Math.random() * maxTip.length)];
  }
}

function domChanges() {
  DOM.responseShare.innerText = getTotalShare();
  DOM.responseBase.innerText = getTotalBase();
  DOM.responseTip.innerText = getTotalTip();
  getResponse();
  swivelLeft();
  showRamble();
}

DOM.goButton.addEventListener('click', domChanges);
DOM.returnButton.addEventListener('click', swivelRight);
