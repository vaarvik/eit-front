import React from 'react'
import { redirect } from 'react-router-dom';
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
			{routes.map((route, index) => (
				<tr key={index}>
					<td>{route.price}</td>
					<td>{route.time}</td>
					<td>{route.sentBy}</td>
					<td>{route.arriveBy}</td>
					<td>{route.routes[0]}-{route.routes[route.routes.length - 1]} <div>Info<p>{route.routes.map((sRoute, index) => `${sRoute}${index !== route.routes.length - 1 ? " -" : ""}`)}</p></div></td>
					<td><Button type='link' href="/transport-route" onClick={(e) => {
						setActiveRoute(route);
					}}>{index < 1 ? "Cheap" : "Fast"}</Button></td>
				</tr>
			))}
			</tbody>
		</table>
	</section>
  )
}

export default RouteResults;
