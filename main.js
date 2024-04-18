import './style.css'

let input = document.querySelector('input')
let buttn = document.querySelector('#btn')



buttn.onclick = function () {

  if (input.value.length === 0) {
    alert('please enter a to-do')
  } else {

    document.querySelector('#tasks').innerHTML +=

      `<div id="task">
  <div class= "span-div">
    <span class="task-span">
 ${input.value}
  </span>

  </div>

  
<div class="div-delete">
 <button  class="delete">
 Delete
  </button>
</div>
 
  
  </div>`;

    let current_tasks = document.querySelectorAll(".delete");
    for (let i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        document.querySelector('#task').remove();
      }
    }

    input.value = '';
  }

}

