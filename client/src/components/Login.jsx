import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState({})
    const onChangeHandler = (e) => {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        })
    }

    const formValidator = () => {
        let isValid = true
        if (userInfo.email.length < 2) {
            return false
        }
        if (userInfo.password.length < 2) {
            return false
        }
        return isValid
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (formValidator()) {
            axios.post('http://localhost:8000/api/players/login', userInfo, {withCredentials: true})
                .then(res => console.log(res))
                .catch(err => console.log(err))
            }
            else{
                setErrors({
                    email: "Name must be at least 2 characters",
                    password: "Name must be at least 2 characters",
                })
            }
            navigate("/dashboard")
    
    }               
    return(
        <div>
            <h1>Login Player</h1>
            {errors.name ? <p className="text-danger">{errors.name}</p> : ""}
              <form action="" className="col-md-6 mx-auto" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="form-control" name="email" id="email" value={userInfo.email}  onChange={onChangeHandler}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" className="form-control" name="password" id="password" value={userInfo.password}  onChange={onChangeHandler}/>
                </div>
                <div className="form-group">
                    <button className="btn btn-info mt-3">Login</button>
                </div>
              </form>
        </div>
    )   
}
export default Login