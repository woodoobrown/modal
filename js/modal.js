

let modal = document.getElementById('myModal');

let btn = document.getElementById('myBtn');

let span = document.getElementsByClassName('close')[0];

let btnO = document.getElementById('myBtn2');

let btnC = document.getElementById('myBtn3');


btn.onclick = function () {
    modal.style.display = 'block';
}

span.onclick = function () {
    modal.style.display = 'none';
}

btnO.onclick = function () {
  modal.style.display = 'none';
}

btnC.onclick = function () {
  modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }