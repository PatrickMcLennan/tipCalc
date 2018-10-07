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

function getTip(service) {
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
function getTotal() {
  const totalNum = parseInt(DOM.inputTotal.value);
  const payeesNum = parseInt(DOM.inputPeople.value);
  const tip = getTip(DOM.inputService.value);

  return (((totalNum * tip) + totalNum) / payeesNum);
}

DOM.button.addEventListener('click', getTotal(DOM.inputTotal, DOM.inputPeople));
