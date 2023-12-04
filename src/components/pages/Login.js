import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthData } from "../../AuthWrapper";

//create a way for the users to sign up and register
export const Login = () => {
  const navigate = useNavigate();
  const { login } = AuthData();
  //create a way to save the data entered from signing up
  const {formData,setFormData} = useReducer{(formData, newItem) => { return({...formData, ...newItem})}, {userName:"", password:""}};
  const [errorMessage, setErrorMessage] = useState(null)

  //create a async function to retrieve information (formData)
  //if the username and password will be correct
  const doLogin = async () => {
    try {
      await login(formData.userName,formData.password)
      navigate("/account")
    } catch (error) {
      setErrorMessage(error)
    }
  }
//breakdown the input 
  return (
    <div className="page">
      <h2>Login page</h2>

      <div className="Inputs">
        <div className="Input">
          <input value={formData.userName} onChange={(e) => setFormData({userName: e.target.value})} type="text"/>
        </div>
        <div className="Input">
          <input value={formData.password} onChange={(e) => setFormData({password: e.target.value})} type="password"/>
        </div>
        <div className="button">
          <button onClick={doLogin}>Log In</button>
        </div>
        {errorMessage ?
        <div className="error">{errorMessage}</div>
        :null }
      </div>
    </div>
  )
};
//we need to have a way to save the information
//return a form for users to fill out with their information
