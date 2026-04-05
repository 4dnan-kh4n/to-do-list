let arr = JSON.parse(localStorage.getItem('data')) || [];
function addtodo() {
  const data = document.getElementById("inp").value;
  if (data.trim() === "") {
    alert("Enter the Task");
    return;
  }

  arr.push(data);
  localStorage.setItem('data', JSON.stringify(arr))
  

  document.getElementById("inp").value = "";

  displayTodo();
}

function displayTodo() {
  const pE = document.getElementById("display");
  pE.innerHTML = "";

  arr.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = item;
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className='editbtn'
    editBtn.onclick = function () {
      const newData = prompt("Enter Data:", arr[index]);
      if (newData !== "") {
        arr[index] = newData;
        localStorage.setItem("data", JSON.stringify(arr));
        displayTodo();
      } else {
        alert('Empty Task not accepted')
        return
      }
    };
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.className='delbtn'
    delBtn.onclick = function () {
      arr.splice(index, 1);
      localStorage.setItem("data", JSON.stringify(arr));
      displayTodo();
    };
    li.appendChild(editBtn);
    li.appendChild(delBtn);
    pE.appendChild(li);
  });
}

window.onload = displayTodo;
