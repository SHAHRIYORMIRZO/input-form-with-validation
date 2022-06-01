import { useState } from "react";

const BasicForm = (props) => {

  const [firstName, setFirstName] = useState('');
  const [firstNameTouched, setFirstNameTouched] = useState(false)

  const [lastName, setLastName] = useState('');
  const [lastNameTouched, setlastNameTouched] = useState(false)

  const [email, setEmail] = useState('');
  const [emailTouched, setEmailTouched] = useState(false)


  const firstNameIsValid = firstName.trim() !== '';
  const lastNameIsValid = lastName.trim() !== '';
  const emailIsValid = email.includes('@gmail.com');

  let formIsValid = false

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true
  } else {
    formIsValid = false
  }

  const submitHandler = event => {
    event.preventDefault();
    console.log(firstName, lastName, email)
    setFirstName('')
    setLastName('')
    setEmail('')
  }

  const firstNameBlurHandler = event => {
    setFirstNameTouched(true)
  }

  const lastNameBlurHandler = event => {
    setlastNameTouched(true)
  }

  const emailBlurHandler = event => {
    setEmailTouched(true)
  }

  const firstNameHandler = event => {
    setFirstName(event.target.value);
  }

  const lastNameHandler = event => {
    setLastName(event.target.value);
  };

  const emailHandler = event => {
    setEmail(event.target.value)
  }


  return (

    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className='form-control'>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            onChange={firstNameHandler}
            value={firstName}
            onBlur={firstNameBlurHandler}
          />
          {!firstNameIsValid && firstNameTouched && <p className="error-text">bosh bolmasin iltimos</p>}
        </div>
        <div className='form-control'>
          <label htmlFor='name'>Last Name</label>
          <input type='text'
            id='name'
            onChange={lastNameHandler}
            value={lastName}
            onBlur={lastNameBlurHandler}
          />
          {!lastNameIsValid && lastNameTouched && <p className="error-text">Iltimos Familiyangizni kiriting</p>}
        </div>
      </div>
      <div className='form-control'>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text'
          id='name'
          onChange={emailHandler}
          value={email}
          onBlur={emailBlurHandler}
        />
        {!emailIsValid && emailTouched && <p className="error-text">Emailni to'g'ri kiriting Iltimos</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
