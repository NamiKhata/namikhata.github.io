
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src', 'images/TK01.jpg');
    } else {
      myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}

function setHeading(name){
  let myHeading=document.querySelector('h1');
  myHeading.textContent='こんにちは、'+name+'!';
}

function setUserName(){
  let myName=prompt('お名前を入力してください');
  localStorage.setItem('name',myName);
  setHeading(myName);
}

let storedName=localStorage.getItem('name');
if(!storedName){
  setUserName();
}else{
  setHeading(storedName);
}

let myButton=document.querySelector('button');
myButton.onclock=setUserName;