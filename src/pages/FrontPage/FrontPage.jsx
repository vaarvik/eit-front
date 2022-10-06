import InputForm from "../../components/Form/InputForm";
import TextField from "../../components/Form/TextField/TextField";
import Button from "../../components/Form/Button/Button";
import ButtonGroup from "../../components/Form/Button/ButtonGroup";
import Dropdown from "../../components/Form/Dropdown/Dropdown";
import Fieldset from "../../components/Form/Fieldset/Fieldset";

function FrontPage() {
  return (
    <div className="FrontPage">
      <div className="wrapper">
      <InputForm title="Booking" method="post" action="/login">
        <div className="grid cols-2">
          <div className="grid__item">
            <TextField title="Username" name="username" id="login-username"/>
            <TextField title="Password" name="password" id="login-password"/>
          </div>
          <div className="grid__item">
            <Fieldset title="Goods">
              <Dropdown options={[
                {
                  value: "none",
                  title: "Select type",
                  isDisabled: true
                },
                {
                  value: "weapons",
                  title: "Weapons"
                },
                {
                  value: "live-animals",
                  title: "Live animals"
                },
                {
                  value: "refrigerated-goods",
                  title: "Refrigerated Goods"
                },
              ]} />

            <div className="grid cols-2">
              <div className="grid__item">
                <TextField title="Weight" type="number" name="weight" id="transport-weight" />
                <TextField title="Length" type="number" name="length" id="transport-length" />
              </div>
              <div className="grid__item">
                <TextField title="Width" type="number" name="width" id="transport-width" />
                <TextField title="Height" type="number" name="height" id="transport-height" />
              </div>
            </div>
            </Fieldset>
          </div>
        </div>
        <ButtonGroup>
          <Button preventDefault={true}>
            Search
          </Button>
        </ButtonGroup>
      </InputForm>
      </div>
    </div>
  );
}

export default FrontPage;
