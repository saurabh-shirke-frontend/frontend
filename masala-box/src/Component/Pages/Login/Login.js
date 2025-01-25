import { useState } from "react"

const Login = (props) =>{
    // eslint-disable-next-line 
    const [email,setEmail] = useState('')
    // eslint-disable-next-line 
    const [password, setPassword] = useState('')
    const handleSubmit = (e) =>{
        e.preventDefault()
    }
    return (
        <div className="form-auth-container">
            <h1>Login</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input className="email-input" type="email" onChange={(e)=>setEmail(e.target.value)}></input>
                <label htmlFor="password">Password</label>
                <input className="pass-input" type="password" onChange={(e)=>setPassword(e.target.value)}></input>
                <button style={{marginTop:'1rem'}} className="btn submit" type="submit">Log In</button>
            </form>
            <button style={{marginTop:'1rem'}} className="btn-link" onClick={()=>props.onFormSwitch('register')}>Not a registed user? Register Here</button>
        </div>
    )
}
export default Login