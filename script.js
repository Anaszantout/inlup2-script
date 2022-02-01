const form = document.querySelector ('#todo-form');
const input = document.querySelector('#todo-input');
const output = document.querySelector('#output');
const Error = document.querySelector('#Error');

let todos = [];

const fetchTodos = async () => {
    const res = await fetch ('https://jsonplaceholder.typicode.com/todos')
    const data = await res.json()
    todos = data ;
    listTodos ();
}



fetchTodos();

const listTodos = () => {
    output.innerHTML = ''
    todos.forEach(todo => {
      output.appendChild(createTodoElement(todo))
    })
  }
  
  const createTodoElement = todo => {
  
    let card = document.createElement('div');
    card.classList.add('todo');
  
    let title = document.createElement('p');
    title.classList.add('todo-title');
    title.innerText = todo.title
  
    let button = document.createElement('button');
    button.classList.add('btn', 'btn-danger', 'btn-sm');
    button.innerText = 'X';


    
    
    card.appendChild(title);
    card.appendChild(button);


    button.addEventListener('click', () => removeTodo(todo.id,card))
    return card
  }


function removeTodo(id, todo) {
    todos = todos.filter(todo => todo.id !== id)
    if (todos.status ==200) {

        delete from ('https://jsonplaceholder.typicode.com/todos')
    }
    todo.remove();
    
    
   
    console.log(todos);
}


const validateTodoInput = (input) => {
    
   
  if(input.value ===''){
      Error.innerText='You should write TODO';
      
  }
  else if (input.value.length < 2){
      Error.innerText='TODO should be at least tow chars ';
      
  }
  else {
      Error.innerText='';
   
}
}




const createNewTodo = title => {

        fetch('https://jsonplaceholder.typicode.com/todos', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          },
          body: JSON.stringify({
             id:Date.now().toString(),
              title,
              completed: false
            })
        })
        .then(res => res.json())
        .then(data  => {
             
            todos.unshift(data);
            
            console.log(data);
            console.log(todos);
            output.prepend(createTodoElement(data))
            
        })
    
}








form.addEventListener('submit', e => {
  e.preventDefault();
 
  if (input.value !== validateTodoInput (input) ) {
      createNewTodo(input.value);
      input.value='';
      input.focus();
      
  }
  
  
})