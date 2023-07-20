let btn = document.getElementById("btn");
let inp = document.getElementById("inp");
let boxs = document.querySelectorAll(".box");
let drag = null;

btn.onclick = function () {
  if (inp.value != "") {
    boxs[0].innerHTML += `
    <p class="item" draggable="true">${inp.value}</p>
    `;
    inp.value = "";
  }
  dragItem();
};

function dragItem() {
  let items = document.querySelectorAll(".item");
  items.forEach((item) => {
    item.addEventListener("dragstart", function () {
      drag = item;
      item.style.backgroundColor = '#928c'
    });

    item.addEventListener("dragend", function () {
      drag = null;
      item.style.backgroundColor = '#928cff'

    });

    boxs.forEach((box) => {
      box.addEventListener('dragover', function (e) {
        e.preventDefault()
        box.style.backgroundColor = '#090';
        box.style.color = '#fff'
      })

      box.addEventListener('dragleave', function () {
        box.style.backgroundColor = '#fff';
        box.style.color = '#000'
      })

      box.addEventListener('drop', function () {
        box.append(drag);
        box.style.backgroundColor = '#fff';
        box.style.color = '#000'
      })
    })
  });
}

let body = document.querySelector('body');
function setLocalStorage(){
  window.localStorage.setItem('bodyInner'. body)
}
