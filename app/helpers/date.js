import { helper } from '@ember/component/helper';

function date(date) {

  if(date[0] === undefined || date === undefined)
    return '';

  var dateAsString = date[0].toString();
  dateAsString = dateAsString.slice(0,-36);

  var hour24 = parseInt(dateAsString.slice(-5,-3),10);
  var hour12 = '';

  if(hour24 == '00')
    dateAsString = dateAsString.slice(0,-5) + '12' + dateAsString.slice(-3) + ' AM'
  else if(hour24 < 12)
    dateAsString = dateAsString + ' AM';
  else if(hour24 === 12)
    dateAsString = dateAsString.slice(0,-5) + (hour24) + dateAsString.slice(-3) + ' PM'
  else
    dateAsString = dateAsString.slice(0,-5) + (hour24-12) + dateAsString.slice(-3) + ' PM'

  return dateAsString;
}

export default helper(date);