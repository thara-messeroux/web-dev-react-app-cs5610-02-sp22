import {useState} from "react";

function Register(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function registerUser(e) {
    e.preventDefault();
    console.log(name, email, password);
    const response = await fetch('http://localhost:4000/api/register',
        {
          method: "POST",
          header:
              {'content-type': 'application/json'}
          ,
          body: JSON.stringify(
              {
                name,
                email,
                password
              })
        })
    const data = await response.data;
    console.log(data)
  }

  return(
      <div>
        <h1>Register</h1>
        <form onSubmit={registerUser}>
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter name"/>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email"/>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter password"/>
          <input type="submit" value="Register"/>
        </form>
      </div>
  )
}

export default  Register;