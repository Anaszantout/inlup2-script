const form = document.querySelector ('#todo-form');
let input = document.querySelector('#input-group');
const output = document.querySelector('#output');


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
const validate = (input) => {
  

    if(input.value.trim() === '') {
      setError (input,'todo can not be empty')
      input.focus();
      return false;
    }
    else if (input.value.trim().length < 2) {
      setError(input,'todo must be atleast 2 chars long');
      input.focus();
      return false; 
    }
    else {
        setSucsses (input);
        return true;
    }
    
  }
  



  const setError = (input, textMessage) => {
      const parent =input.parentElement;
    input.classlist.add('Error');
    
    parent.querySelector('.Error').innerText = textMessage;


  }
  const setSucsses = input => {
    const parent=input.parentElement;
    input.classList.remove ('Error');
    
  }




  form.addEventListener('submit', e => {
    e.preventDefault();

    if(input=validate) () => {
     createNewTodo(input.value);
     input.value='';
    }

    form.reset();
})
