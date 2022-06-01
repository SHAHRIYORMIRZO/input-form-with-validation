import { useState } from 'react';

const SimpleInput = (props) => {

  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== ''
  const nameInputIsValid = !enteredNameIsValid && enteredNameTouched;

  
  let formIsValid = false;

  if (enteredNameIsValid) {
    formIsValid = true;
  }

  const nameInputBlurHandler = event => {
    setEnteredNameTouched(true);
  };


  const formSubmissionHandler = event => {
    event.preventDefault();
    setEnteredNameTouched(true)
    if (!enteredNameIsValid) {
      return;
    }
    setEnteredName('');
    setEnteredNameTouched(false)
  }
  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  }


  const nameInputClass = nameInputIsValid
    ? 'form-control invalid'
    : 'form-control'

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClass}>
        <label htmlFor='name'>Your Name</label>
        <input
          onBlur={nameInputBlurHandler}
          type='text' id='name'
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
        {nameInputIsValid && <p className='error-text'>Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
