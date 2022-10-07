import Button from "../../components/Form/Button/Button";
import ButtonGroup from "../../components/Form/Button/ButtonGroup";
import useCitiesStore from "../../store/store";
import "./RoutePage.scss";

function RoutePage() {
  const activeRoute = useCitiesStore(state => state.activeRoute) ?? null;
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
        <p>{activeRoute.price}</p>
        <h5>Time</h5>
        <p>{activeRoute.time}</p>
        <h5>Sent By</h5>
        <p>{activeRoute.sentBy}</p>
        <h5>Arrive By</h5>
        <p>{activeRoute.arriveBy}</p>
        <h5>Transportation Route</h5>
        <p>{activeRoute.routes.map((sRoute, index) => `${sRoute}${index !== activeRoute.routes.length - 1 ? " -" : ""}`)}</p>

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
