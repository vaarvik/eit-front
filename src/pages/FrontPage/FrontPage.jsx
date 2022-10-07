import InputForm from "../../components/Form/InputForm";
import TextField from "../../components/Form/TextField/TextField";
import Button from "../../components/Form/Button/Button";
import Loading from "../../components/Loading/Loading";
import ButtonGroup from "../../components/Form/Button/ButtonGroup";
import Dropdown from "../../components/Form/Dropdown/Dropdown";
import Fieldset from "../../components/Form/Fieldset/Fieldset";
import DateField from "../../components/Form/DateField/DateField";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import RouteResults from "../../components/RouteResults/RouteResults";

function FrontPage() {
  const [cities, setCities] = useState([])

  useEffect(() => {
    fetch("https://localhost:7222/api/city")
    .then((response) => response.json())
    .then((cities) => {
      setCities(cities.map(city => ({title: city.name, value: city.name})))
    })
  }, [])

  const times = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
  const [errorMessage, setErrorMessage] = useState("");
  const [routeResults, setRouteResults] = useState([]);
  const [fetchingRoutes, setFetchingRoutes] = useState(false);

  const onSubmit = (formData) => {
    if(formData.origin === formData.destination) return setErrorMessage("Origin and destination cannot be the same.")

    setFetchingRoutes(true);
    setErrorMessage("");
    fetch('https://localhost:7222/api/search/route',{
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({...formData, date: `${formData.date}T${formData.hour < 10 ? `0${formData.hour}` : formData.hour}:00:00.511Z`}) // body data type must match "Content-Type" header
    })
      .then((response) => response.json())
      .then((data) => {
        setRouteResults([{ //replace with real data
          price: 1000,
          time: 90,
          sentBy: new Date().toISOString(),
          arriveBy: new Date().toISOString(),
          routes: ["St. Helena", "Tubby", "Wadai"]
        },
        {
          price: 200,
          time: 120,
          sentBy: new Date().toISOString(),
          arriveBy: new Date().toISOString(),
          routes: ["St. Helena", "Tubby", "Wadai"]
        }])
        setTimeout(() => setFetchingRoutes(false), 2000); //big delay to show the boat
      });
  }

  if(!cities.length) {
    return <div className="wrapper"><Loading /></div>
  }

  return (
    <div className="FrontPage">
    <div className="wrapper wide">
      {
        routeResults?.length ? (fetchingRoutes ? <div className="wrapper"><Loading /></div>  : <RouteResults routes={ routeResults } />) : null
      }
    </div>
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
            <DateField title="Departure date" type="date" name="date" id="transport-date" />
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
        {
          errorMessage ? <p style={{color: "red"}}>{errorMessage}</p> : ""
        }
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
