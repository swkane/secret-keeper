// Pure Actions

export const register = (name, email, password, message) => ({
  type: 'REGISTER',
  name,
  email,
  password,
  message
});

export const login = (email, password) => ({
  type: 'LOGIN',
  email,
  password
});



// Async Actions
export const fetchRegister = (name, email, password, message) => (
  (dispatch, getState) => (
    fetch('https://user-auth-test.herokuapp.com/register', {method: 'POST', body: {name, email, password, message}})
    .then(response => response.json())
    .then(() => console.log('You successfully registered!'))
  )
)
