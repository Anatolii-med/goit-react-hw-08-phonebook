import { BarLinks } from './authNav.styled.js';
export function LoginNavigation() {
	return (
		<div>
			<BarLinks to="/register">Register</BarLinks>
			<BarLinks to="/login">login</BarLinks>
		</div>
	);
}
