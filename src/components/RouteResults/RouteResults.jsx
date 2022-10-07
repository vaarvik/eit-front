import React from 'react'
import useCitiesStore from '../../store/store';
import Button from '../Form/Button/Button';
import "./RouteResults.scss"

function RouteResults({routes}) {
	const setActiveRoute = useCitiesStore(state => state.setActiveRoute);

  return (
	<section className='RouteResults'>
		<h2>Available Routes</h2>
		<table>
			<thead>
				<tr>
					<th>Price</th>
					<th>Time</th>
					<th>Sent By</th>
					<th>Arrive By</th>
					<th>Transportation Route</th>
				</tr>
			</thead>
			<tbody>
			{routes.map((route, index) => {
				const dDate = new Date(route.departureDate);
				const aDate = new Date(route.arrivalDate);
				return (
				<tr key={index}>
					<td>{route.totalPrice}$</td>
					<td>{route.totalTime} hours</td>
					<td>{dDate.toLocaleDateString()} {dDate.toLocaleTimeString()}</td>
					<td>{aDate.toLocaleDateString()} {aDate.toLocaleTimeString()}</td>
					<td>{route.path[0]}-{route.path[route.path.length - 1]} <div>Info<p>{route.path.map((sRoute, index) => `${sRoute}${index !== route.path.length - 1 ? " -" : ""}`)}</p></div></td>
					<td><Button type='link' href="/transport-route" onClick={(e) => {
						setActiveRoute(route);
					}}>{!route.isFastest ? "Cheap" : "Fast"}</Button></td>
				</tr>
			)})}
			</tbody>
		</table>
	</section>
  )
}

export default RouteResults;
