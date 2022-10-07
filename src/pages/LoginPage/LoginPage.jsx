import InputForm from "../../components/Form/InputForm";
import TextField from "../../components/Form/TextField/TextField";
import Button from "../../components/Form/Button/Button";
import "./LoginPage.scss";
import ButtonGroup from "../../components/Form/Button/ButtonGroup";
import useCitiesStore from "../../store/store";

function LoginPage() {
  const login = useCitiesStore(state => state.login);
  return (
    <div className="LoginPage">
      <InputForm title="Login" method="post" action="/login">
        <TextField title="Username" name="username" id="login-username"/>
        <TextField title="Password" type="password" name="password" id="login-password"/>
        <ButtonGroup>
          <Button onClick={(e) => {
            e.preventDefault();
            login()
          }}>
            Login
          </Button>
        </ButtonGroup>
      </InputForm>
    </div>
  );
}

export default LoginPage;
