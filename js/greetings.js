// const age = parseInt(prompt("How old are you?"));

// if(isNaN(age) || age < 0){
//     console.log("please write a positive number");
// } else if (age < 18) {
//     console.log("you are too young.");
// } else if (age >= 18 && age <= 50) {
//     console.log("you can drink");
// } else if (age > 50 && age <= 80) {
//     console.log("you should work out");
// } else if (age === 100) {
//     console.log("Wow you are wise");
// } else if (age > 80) {
//     console.log("you can do whatever you want");


// const h1 = document.querySelector(".hello:first-child h1");

// function handleTitleClick(){
//     h1.classList.toggle("clicked");
// }

// h1.addEventListener("click", handleTitleClick);

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greetingHi = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden"; //반복되어 사용되는 string은 uppercase로 변수만들기
const USERNAME_KEY = "username"; // why: 변수 스펠링 오타는 js가 지적해줌

function onSubmit(e) {
    e.preventDefault(); //5. submit 의 기본 refresh 기능 제거 
    loginForm.classList.add(HIDDEN_CLASSNAME); //6. loginForm가져온것에 classList.add사용해서 hidden class 주기
    const username = loginInput.value; //7. loginInput의 value (값)을 가져와서, (dir안에 있음)
    localStorage.setItem(USERNAME_KEY, username); //8. localstorage api를 이용해 key=USERNAME_KEY 
                                                //value=username (변수)로 넣기
    paintGreetings(); // 9. 함수 paintGreetings 실행
}

function paintGreetings() {
    const username = localStorage.getItem(USERNAME_KEY);
    greetingHi.innerText = `Hello ${username}`; //10. 원래 h1빈칸이므로 안에 컨텐츠 넣기
    greetingHi.classList.remove(HIDDEN_CLASSNAME);  //11. h1을 보여주기 위해 hidden class 제거 
}
    
const savedUsername = localStorage.getItem(USERNAME_KEY); //1. js가 시작하면 localstorage를 먼저 확인

if (savedUsername === null) { //2. localstorage에 아무것도 없다면 null이 뜬다
    loginForm.classList.remove(HIDDEN_CLASSNAME); //3. 없으면 form 보이기
    loginForm.addEventListener("submit", onSubmit); //4. submit누르면 함수 onSubmit 실행
} else { //refresh하면 이게 실행
    paintGreetings();
}



