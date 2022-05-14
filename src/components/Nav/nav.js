import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import { BarLinks } from './nav.styled';

export function Navigation() {
	const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
	return (
		<div>
			<BarLinks to="/">Home</BarLinks>
			{isLoggedIn && <BarLinks to="/contacts">Contacts</BarLinks>}
		</div>
	);
}
