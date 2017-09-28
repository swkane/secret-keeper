// Pure Actions

const authToken = (token) => ({
  type: 'AUTH_TOKEN',
  token
})

const dashboard = (email, full_name, message) => ({
  type: 'DASHBOARD',
  email,
  full_name,
  message
})

const myOptions = {
  method: 'POST',
  mode: 'cors',
  headers: new Headers({'Content-Type': 'application/json'})
}

// Async Actions
export const fetchRegister = (full_name, email, password, message) => (
  (dispatch, getState) => (
    fetch('https://user-auth-test.herokuapp.com/register', {...myOptions, body: JSON.stringify({full_name, email, password, message})})
    .then(response => response.json())
    .then(() => console.log('You successfully registered!'))
  )
)

export const fetchLogin = (email, password) => (
  (dispatch, getState) => (
    fetch('https://user-auth-test.herokuapp.com/login', {...myOptions, body: JSON.stringify({email, password})})
    .then(response => response.json())
    .then(payload =>
      payload.success && dispatch(authToken(payload.auth_token))
    )
  )
)

export const fetchDashboard = () => (
  (dispatch, getState) => {
    const {token} = getState();
    fetch('https://user-auth-test.herokuapp.com/dashboard', {headers: new Headers({'X-AUTH-TOKEN': token})})
    .then(response => response.json())
    .then(({email, full_name, message, success}) => (
      dispatch(dashboard(email, full_name, message, success))
    ))
  }
)
