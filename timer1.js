const smallTimer = function(alarmList) {
  if (alarmList.length === 0) {
    return;
  }
  for (let item of alarmList) {
    if (item < 0) {
      continue;
    }
    if (isNaN(item)) {
      continue;
    }
    setTimeout(() => {
      process.stdout.write('\x07');
    }, item * 1000);
  }

};
const args = process.argv.slice(2);
smallTimer(args);
