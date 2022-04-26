import { helper } from '@ember/component/helper';

function progress([coins]) {
  let coinCount = 0;

  coins.forEach(coin => {
    if (coin.inCollection) {
      coinCount++;
    }
  });

  return coinCount
}

export default helper(progress);