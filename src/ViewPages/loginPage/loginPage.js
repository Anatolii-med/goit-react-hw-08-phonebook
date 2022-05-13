import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';

export function LoginPage() {
	const dispatch = useDispatch();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		dispatch(authOperations.logIn({ email, password }));
		setEmail('');
		setPassword('');
	};

	const handleChange = ({ target: { name, value } }) => {
		switch (name) {
			case 'email':
				return setEmail(value);
			case 'password':
				return setPassword(value);
			default:
				return;
		}
	};

	return (
		<>
			<form autoComplete="off" onSubmit={handleSubmit}>
				<label>
					<input
						placeholder="email"
						type="email"
						value={email}
						name="email"
						onChange={handleChange}
					/>
				</label>
				<label>
					<input
						placeholder="password"
						type="password"
						value={password}
						name="password"
						onChange={handleChange}
					/>
				</label>
				<button type="submit">LogIn</button>
			</form>
		</>
	);
}
