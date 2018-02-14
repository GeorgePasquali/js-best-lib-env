import '../styles/index.scss';
import ms from 'ms';
import lunchtime from './lunchtime.js';
import millisecondsUntil from './millisecondsUntil.js';

export default function howLongUntilWeAreFree(hours, minutes) {
  // lunch is at 12.30
  if (hours === undefined) hours = 18;
  if (minutes === undefined) minutes = 0;

  let millisecondsUntilLunchTime = millisecondsUntil(lunchtime(hours, minutes));
  // asdfaeqrw erfasd asdfqwefa sd
  return ms(millisecondsUntilLunchTime, {
    long: true
  });
}
