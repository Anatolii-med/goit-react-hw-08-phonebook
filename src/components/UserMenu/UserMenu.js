import { useSelector, useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import authSelectors from 'redux/auth/auth-selectors';

export function UserMenu() {
	const dispatch = useDispatch();
	const userName = useSelector(authSelectors.getUserName);
	return (
		<>
			<p>Hi, {userName}</p>
			<button
				onClick={() => {
					dispatch(authOperations.logOut());
				}}
			>
				LogOut
			</button>
		</>
	);
}
