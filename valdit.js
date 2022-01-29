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
    input.classlist.remove('Error')
    parent.querySelector('.Error').innerText = textMessage;


  }
  const setSucsses = input => {
    const parent=input.parentElement;
    input.classList.remove ('Error');
    input.classList.add('Error');
  }
