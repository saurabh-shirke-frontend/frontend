import { useEffect, useState } from "react"
import Loader from "../../commons/Loader"
import '../../commons/styles/login.css'
import Login from "./Login"
import Register from "./Register"
const LoginHome = () =>{
    const [isLoading, setIsLoading] = useState(false)
    const [currentState, setCurrentState] = useState('login')

    const handleToggle = (formState) =>{
        setCurrentState(formState)
    }

    useEffect(()=>{
        setIsLoading(true)
        setTimeout(()=>{
            setIsLoading(false)
        },[3000])
    },[])
    return (
        <div className="login">
            {
                isLoading ? (
                    <Loader/>
                ):(
                    <div>
                        {currentState === 'login' ? <Login onFormSwitch= {handleToggle}/> :<Register onFormSwitch={handleToggle}/>}
                    </div>
                )
            }
        </div>
    )
}
export default LoginHome