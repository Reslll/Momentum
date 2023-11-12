const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "toDos";

let toDos = []; //let으로 하여 refresh될때마다 비어있는 array로 하지 않고
//localstorage에 있는 데이터를 가지고 시작한다

function deleteToDo(e){
    const li = e.target.parentElement; //target.parentelement 특정 버튼의 부모 요소를 특정하여 원하는 요소 삭제
    li.remove(); //target은 클릭된 HTMLelement -> parentelement은 target이 가지고 있는 요소중 하나
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos(); //새로 받은 array 보이기 위해 새로 불러야 함
} //toDo를 받고, 화살표 뒤는 function의 조건. true나 false나.
// li.id를 parseint해주는 이유는 원래 li.id가 "string"이다



function sexyfilter(i){ //filter func = false면 제외하고 true인것만 가지고 새로운 array 생성
    return i <= 1000;
} 


function saveToDos() { 
    localStorage.setItem("TODOS_KEY", JSON.stringify(toDos)); //toDos Array 를 todos local storage에 넣기
    //json.stringify를 이용해 array처럼 localstorage에 저장하기 (실제로는 string)
}


function paintToDo(newTodo) {
    const li = document.createElement("li"); //li 만들기
    li.id = newTodo.id; //li의 id에다가 object의 id를 씌우기 (랜덤id)
    const span = document.createElement("span"); //span 만들기
    span.innerText = newTodo.text; //span에 newTodo object의 text(내용)받기
    const button = document.createElement("button"); //button 만들기
    button.innerText  = "❌"; //button 내용 x로 바꾸기 win+"."
    button.addEventListener("click", deleteToDo); //클릭확인
    li.appendChild(span); //span을 li안에 child로 넣기
    li.appendChild(button); //button을 li 안에 child로 넣기 (뒤에)
    toDoList.appendChild(li); //ul(toDoList)에 li 넣기
}

function handleTodoSubmit(e) {
    e.preventDefault(); //form submit refresh 방지
    const newTodo = toDoInput.value; //save input value 
    toDoInput.value = ""; //enter누르면 상자에서 값 지우기
    const newToDoObj = {
        text: newTodo, //내용은 그대로 위에서 가져오고 
        id: Date.now(), //date.now로 랜덤숫자"처럼" 보이는 것 생성
    };
    toDos.push(newToDoObj); //toDos array에 object(text,id)넣기
    paintToDo(newToDoObj ); //object 값 옆동네로 보내기
    saveToDos(); //
}

toDoForm.addEventListener("submit", handleTodoSubmit);

function sayHello(i){
    console.log("this is the turn of", i);
}

const savedToDos = localStorage.getItem("TODOS_KEY");

if(savedToDos !== null){ //안에 todo 가 있다면 (null이 아니라면)
    const parsedToDos = JSON.parse(savedToDos) //string을 object로 변환해줌(이 경우는 array)
    toDos = parsedToDos; //1. array에 기존의 localstorage에 있는 데이터를 넣고 시작
    parsedToDos.forEach(paintToDo); //array의 각 아이템당 따로 함수를 적용할 수 있음: foreach 
}