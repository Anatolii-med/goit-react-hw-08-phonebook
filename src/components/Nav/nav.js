import { NavLink } from 'react-router-dom';

export function Navigation() {
	return (
		<>
			<NavLink to="/">Home</NavLink>
			<NavLink to="/contacts">Contacts</NavLink>
		</>
	);
}
