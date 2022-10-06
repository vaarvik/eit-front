import InputForm from "../../components/Form/InputForm";
import TextField from "../../components/Form/TextField/TextField";
import Button from "../../components/Form/Button/Button";
import ButtonGroup from "../../components/Form/Button/ButtonGroup";
import Dropdown from "../../components/Form/Dropdown/Dropdown";
import Fieldset from "../../components/Form/Fieldset/Fieldset";
import useCitiesStore from "../../store/store";
import DateField from "../../components/Form/DateField/DateField";

function FrontPage() {
  const cities = useCitiesStore((state) => state.cities);
  const times = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];

  const onSubmit = (formData) => {

		console.log(formData, {
			date: `${formData.date}T${formData.hour}:00:00.511Z`
		});
  }

  return (
    <div className="FrontPage">
      <div className="wrapper">
      <InputForm title="Booking" method="post" action="/login" onSubmit={onSubmit}>
        <div className="grid cols-2">
          <div className="grid__item">
            <Dropdown options={[
                {
                  value: "",
                  title: "Select origin",
                  isDisabled: true
                },
                ...cities
              ]} name="origin" />
            <Dropdown options={[
              {
                value: "",
                title: "Select destination",
                isDisabled: true
              },
              ...cities
            ]} name="destination" />
            <DateField title="Date" type="date" name="date" id="transport-date" />
            <Dropdown options={[
              {
                value: "none",
                title: "Select hour",
                isDisabled: true
              },
              ...times.map(time => ({
                value: time,
                title: time
              }))
            ]} name="hour" />
          </div>
          <div className="grid__item">
            <Fieldset title="Goods">
              <Dropdown name="type" options={[
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
          <Button>
            Search
          </Button>
        </ButtonGroup>
      </InputForm>
      </div>
    </div>
  );
}

export default FrontPage;
