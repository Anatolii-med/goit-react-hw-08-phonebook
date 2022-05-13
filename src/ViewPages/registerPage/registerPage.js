import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';

export function RegisterPage() {
	const dispatch = useDispatch();
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		dispatch(authOperations.register({ name, email, password }));
		setName('');
		setEmail('');
		setPassword('');
	};

	const handleChange = ({ target: { name, value } }) => {
		switch (name) {
			case 'name':
				return setName(value);
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
						placeholder="name"
						type="text"
						value={name}
						name="name"
						onChange={handleChange}
					/>
				</label>
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
				<button type="submit">Register</button>
			</form>
		</>
	);
}
