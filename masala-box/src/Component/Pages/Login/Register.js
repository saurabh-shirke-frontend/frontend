import { useState } from "react"

const Register = (props) =>{
    const [email,setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit =() =>{

    }
    return(
        <div className="form-auth-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Full Name</label>
                <input type="text" onChange={(e)=>setName(e.target.value)} className="name" placeholder="Enter your Name" value={name}></input>
                <label htmlFor="email">Email</label>
                <input type="email" onChange={(e)=>setEmail(e.target.value)} className="email" placeholder="Enter Email ID" value={email}></input>
                <label htmlFor ="password">Password</label>
                <input type="password" onChange={(e)=> setPassword(e.target.value)} className="password" placeholder="Enter Password" value={password}></input>
                <button style={{marginTop:'1rem'}} className="btn" type="submit" >Register</button>
            </form>
            <button style={{marginTop:'1rem',marginBottom:'-2rem'}} className="btn-link" onClick ={() =>props.onFormSwitch('login')}>Already a User?? Login Here</button>
        </div>
    )
}
export default Register