// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js'

//  // Import the functions you need from the SDKs you need
//  import { initializeApp } from "firebase/app";
//  // TODO: Add SDKs for Firebase products that you want to use
//  // https://firebase.google.com/docs/web/setup#available-libraries
//  import {getAuth, onAuthStateChanged} from 'firebase/auth';
//  // Your web app's Firebase configuration
//  const firebaseConfig = {
//    apiKey: "AIzaSyAFRgH3B2sSbpO8v69zpkekki43pm0RlT8",
//    authDomain: "capstone-bank-firebase-auth.firebaseapp.com",
//    projectId: "capstone-bank-firebase-auth",
//    storageBucket: "capstone-bank-firebase-auth.appspot.com",
//    messagingSenderId: "626281376744",
//    appId: "1:626281376744:web:2b8f6c0bf2fc58fdf0125d"
//  };

//  // Initialize Firebase
//  const app = initializeApp(firebaseConfig);
//  const  auth = getAuth(firebaseApp);

// import { } from 'firebase/auth';

// const googleLogin = document.getElementById("google-login");
// const login = document.getElementById("bank-login");
// const logout = document.getElementById("bank-logout");
// const password = document.getElementById("password");
// const signup = document.getElementById("signup");
// const emailLogin =document.getElementById("emailLogin");
// const loginMsg = document.getElementById("loginMsg");
// const routeMsg = document.getElementById("routeMsg");
// // login
// login.addEventListener('click', e => {
//   const auth = firebase.auth();
//   const promise = auth.signInWithEmailAndPassword(email.value, password.value);
//   promise.catch(e => console.log(e.message));
// });
function Login() {
  const [show, setShow] = React.useState(true)
  const [status, setStatus] = React.useState('')

  return (
    <Card
      bgcolor='secondary'
      header='Login'
      status={status}
      body={
        show ? <LoginForm setShow={setShow} /> : <LoginMsg setShow={setShow} />
      }
    />
  )
}

function LoginMsg(props) {
  return (
    <>
      <h5>Welcome back</h5>
      <button type='submit' className='btn btn-light' id='bank-logout'>
        Logout
      </button>
    </>
  )
}

function LoginForm(props) {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const ctx = React.useContext(UserContext)

  function handle() {
    const user = ctx.users.find(user => user.email == email)
    console.log(user)
    console.log(email, password)
    if (!user) {
      console.log('one')
      props.setStatus('fail!')
      return
    }
    if (user.password == password) {
      console.log('two')
      props.setStatus('')
      props.setShow(false)
      return
    }
    console.log('three')
    props.setStatus('fail!')
  }

  return (
    <>
      Email
      <br />
      <input
        type='input'
        className='form-control'
        placeholder='Enter email'
        value={email}
        onChange={e => setEmail(e.currentTarget.value)}
      />
      <br />
      Password
      <br />
      <input
        type='password'
        className='form-control'
        placeholder='Enter password'
        value={password}
        onChange={e => setPassword(e.currentTarget.value)}
      />
      <br />
      <button type='submit' className='btn btn-light' onClick={handle}>
        Login
      </button>
    </>
  )
}
