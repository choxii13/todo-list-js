const input = document.querySelector("input");
const modal = document.getElementById("myModal");
const closemodal = document.querySelector(".modal-button");
// localStorage.setItem("newList", JSON.stringify(newList));
// const listsStorage = JSON.parse(localStorage.getItem("newList"));

const lists = [];
render();
button.addEventListener("click", () => {
  const newList = lists;
  if (input.value === "") {
    modal.style.display = "block";
    return;
  }
  newList.push(input.value);
  input.value = "";
  render();
});

function render() {
  let containerMetal = "";
  if (lists.length === 0) {
    containerMetal = `<div class = "no-data" > No Data </div>`;
  } else {
    lists.map((list, index) => {
      containerMetal += `
                  <div class="list">  
                  <p>${index + 1}.${list}</p>
                  <div class="edit-delete"> 
                  <button class="button-edit" onclick="editList(${index})"> edit</button>
                  <button class="delete"onclick="deleteList(${index});">delete</button>
                  </div>
                  </div>`;
    });
  }
  document.querySelector(".list-container").innerHTML = containerMetal;
}

function deleteList(index) {
  const newList = lists;
  newList.splice(index, 1);
  render();
}

let active = false;
function editList(index) {
  const newList = lists;
  const list = document.querySelectorAll(".list")[index];
  const save = document.querySelectorAll(".edit-delete")[index];
  const val = document.getElementById("saving");
  if (active && val) {
    if (val.value === "") {
      modal.style.display = "block";
    } else {
      active = false;
      save.children[0].innerHTML = "edit";
      newList[index] = val.value;
      render();
    }
  } else {
    active = true;
    save.children[0].innerHTML = "save";
    list.children[0].innerHTML = '<input id="saving"/>';
  }
}

closemodal.onclick = function () {
  modal.style.display = "none";
};
