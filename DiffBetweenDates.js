function getDaysHoursAndMinutes(){
  var hd=new Date('2018-11-21T20:23:26+0000').valueOf();
  var td=new Date().valueOf();
  var sec=1000;
  var min=60*sec;
  var hour=60*min;
  var day=24*hour;
  var diff=td-hd;
  var days=Math.floor(diff/day);
  var hours=Math.floor(diff%day/hour);
  var minutes=Math.floor(diff%day%hour/min);
  Logger.log('%s days %s hours %s minutes',days,hours,minutes);

}
