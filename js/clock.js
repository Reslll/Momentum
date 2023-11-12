const clock = document.querySelector("h2#clock");
// const date = new Date();

function getClock() {
  const date = new Date(); //날짜 변수
  const hours = String(date.getHours()).padStart(2,"0"); //padStart 2자리수 맞추고 안되면 "앞에" 0 넣기
  const minutes = String(date.getMinutes()).padStart(2,"0");
  const seconds = String(date.getSeconds()).padStart(2,"0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); //1초 기다렸다 뜨기 때문에 먼저 불러놓는다
setInterval(getClock, 1000); //1000ms마다 function 실행 

