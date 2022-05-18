const getCalculatedApy = () => {
  const amount = document.getElementById('amount').value
  const days = document.getElementById('days').value
  const apy = document.getElementById('apy').value
  return amount * Math.pow(1 + apy / 100, days / 365)
}

const renderAnswer = (apy) => {
  const answerDom = document.getElementById('answer')
  answerDom.innerHTML = '期滿後可以獲得 ' + apy.toFixed(6) + ' (本金加利息)'
}

const runApyApp = () => {
  const calculatedApy = getCalculatedApy()
  renderAnswer(calculatedApy)
}
