import React from 'react'

function SignUp() {
  return (
    <div>
        <h1>Sigh Up</h1>
        <from>
            <div>
                <label htmlFor='user_first_name'>First Name</label><br />
                <input type='text' id='user_first_name' name='user_first_name' />
            </div>
            <div>
                <label htmlFor='user_last_name'>Last Name</label><br />
                <input type='text' id='user_last_name' name='user_last_name' />
            </div>
            <div>
                <label htmlFor='user_email'>Email</label><br />
                <input type='email' id='user_email' name='user_email' />
            </div>
            <div>
                <label htmlFor='user_password'>Password</label><br />
                <input type='password' id='user_password' name='user_password' />
            </div>
            <div>
                <label htmlFor='user_confirm_password'>Confirm Password</label><br />
                <input type='password' id='user_confirm_password' name='user_confirm_password' />
            </div>
            <div>
                <button type='submit'>Sign Up</button>
            </div>
        </from>
    </div>
  )
}

export default SignUp