import InputForm from "../../components/Form/InputForm";
import TextField from "../../components/Form/TextField/TextField";
import Button from "../../components/Form/Button/Button";
import "./LoginPage.scss";
import ButtonGroup from "../../components/Form/Button/ButtonGroup";
import useCitiesStore from "../../store/store";
import { useState } from "react";

function LoginPage() {
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [wrongCredentials, setWrongCredentials] = useState(false)
  const login = useCitiesStore(state => state.login);
  return (
    <div className="LoginPage">
      <InputForm title="Login" method="post" action="/login">
        <TextField title="Username" name="username" id="login-username" onChange={(e) => setUserName(e.target.value)}/>
        <TextField title="Password" type="password" name="password" id="login-password" onChange={(e) => setPassword(e.target.value)}/>
        { wrongCredentials ? <p style={{color: "red"}}>Invalid credentials</p> : null}
        <ButtonGroup>
          <Button onClick={(e) => {
            e.preventDefault();
            if(userName === "testuser1" && password === "123") login();
            else setWrongCredentials(true);
          }}>
            Login
          </Button>
        </ButtonGroup>
      </InputForm>
    </div>
  );
}

export default LoginPage;
