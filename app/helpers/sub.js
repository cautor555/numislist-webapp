import { helper } from '@ember/component/helper';

function sub([num1, num2]) {
  return num1-num2
}

export default helper(sub);