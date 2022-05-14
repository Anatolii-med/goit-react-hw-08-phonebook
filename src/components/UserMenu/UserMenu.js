import { useSelector, useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import authSelectors from 'redux/auth/auth-selectors';
import { Greeting, BtnLogOut } from './UserMenu.styled';
// !
function LoginUserMenu() {
	const dispatch = useDispatch();
	const userName = useSelector(authSelectors.getUserName);
	return (
		<div>
			<Greeting>Welcome, {userName}</Greeting>
			<BtnLogOut
				onClick={() => {
					dispatch(authOperations.logOut());
				}}
			>
				LogOut
			</BtnLogOut>
		</div>
	);
}

function AnonymUser() {
	return (
		<>
			<p>Welcome, friend! you may Register or SignUp</p>
		</>
	);
}

export function UserMenu() {
	const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
	return isLoggedIn ? <LoginUserMenu /> : <AnonymUser />;
}
