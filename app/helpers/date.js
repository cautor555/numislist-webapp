import { helper } from '@ember/component/helper';

function date(date) {
  console.log(date[0]);

  if(date[0] === undefined)
    return '';

  var newDate = (JSON.stringify(date[0]));
  newDate = newDate.slice(1,-1);
  console.log(newDate);

  return newDate;

}

export default helper(date);