import Button from "../../components/Form/Button/Button";
import ButtonGroup from "../../components/Form/Button/ButtonGroup";
import useCitiesStore from "../../store/store";
import "./RoutePage.scss";

function RoutePage() {
  const activeRoute = useCitiesStore(state => state.activeRoute) ?? null;
  const dDate = new Date(activeRoute?.departureDate);
  const aDate = new Date(activeRoute?.arrivalDate);

  if(!activeRoute) return (
    <div className="wrapper">
      <Button type="link" href="/">Search for route</Button>
    </div>
  )

  return (
    <div className="RoutePage">
      <div className="wrapper">
        <h2>Route</h2>
        <h5>Price</h5>
        <p>{activeRoute?.totalPrice}$</p>
        <h5>Time</h5>
        <p>{activeRoute?.totalTime} hours</p>
        <h5>Sent By</h5>
        <p>{dDate.toLocaleDateString()} {dDate.toLocaleTimeString()}</p>
        <h5>Arrive By</h5>
        <p>{aDate.toLocaleDateString()} {aDate.toLocaleTimeString()}</p>
        <h5>Transportation Route</h5>
        <p>{activeRoute?.path.map((sRoute, index) => `${sRoute}${index !== activeRoute?.path.length - 1 ? " -" : ""}`)}</p>

        <ButtonGroup>
          <Button type="link" href="/">
            New search
          </Button>
          <Button onClick={() => window.print()}>
            Print
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}

export default RoutePage;
