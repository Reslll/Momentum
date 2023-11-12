const images = [
    "lake.jpg",
    "field.jpg",
    "tree.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); //img 만들기

bgImage.src = `img/${chosenImage}`; //이렇게 만들어 주세요

document.body.appendChild(bgImage); //html body에 appendchild하여서 (append 맨뒤에) 넣기 * prepend = 맨앞에