function getTime(endtime) {
  const time = Date.parse(endtime) - Date.parse(new Date());
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time / (1000 * 60 * 60 )) % 24);
  const minutes = Math.floor((time / 1000 / 60) % 60);
  const seconds = Math.floor((time / 1000) % 60);
  return {
    'milliseconds': time,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function InitTime(timerid, endtime) {
  const counttimer = document.getElementById(timerid);
  const daysSpan = counttimer.querySelector(".days");
  const hoursSpan = counttimer.querySelector(".hours");
  const minutesSpan = counttimer.querySelector(".minutes");
  const secondsSpan = counttimer.querySelector(".seconds");
 
  function updateTime() {
    const time = getTime(endtime);
 
    if (time.milliseconds <= 0) {
      document.getElementById("message_end").className = "show";
      document.getElementById("countdown_timer").className = "hide";
      clearInterval(timeinterval);
      return true;
    }
 
    daysSpan.innerHTML = time.days;
    hoursSpan.innerHTML = ("0" + time.hours).slice(-2);
    minutesSpan.innerHTML = ("0" + time.minutes).slice(-2);
    secondsSpan.innerHTML = ("0" + time.seconds).slice(-2);
  }
  updateTime();
  const timeinterval = setInterval(updateTime, 1000);
}

const end="2022-06-01 15:16:17 GMT+04:00"; 
InitTime('countdown_timer', end);