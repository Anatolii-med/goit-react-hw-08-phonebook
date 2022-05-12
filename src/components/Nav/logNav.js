import { NavLink } from 'react-router-dom';

export function LoginNavigation() {
	return (
		<>
			<NavLink to="/register">Register</NavLink>
			<NavLink to="/login">login</NavLink>
		</>
	);
}
