import InputForm from "../../components/Form/InputForm";
import TextField from "../../components/Form/TextField/TextField";
import Button from "../../components/Form/Button/Button";
import "./LoginPage.scss";
import ButtonGroup from "../../components/Form/Button/ButtonGroup";

function LoginPage() {
  return (
    <div className="LoginPage">
      <InputForm title="Login" method="post" action="/login">
        <TextField title="Username" name="username" id="login-username"/>
        <TextField title="Password" type="password" name="password" id="login-password"/>
        <ButtonGroup>
          <Button preventDefault={true}>
            Login
          </Button>
        </ButtonGroup>
      </InputForm>
    </div>
  );
}

export default LoginPage;
