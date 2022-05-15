import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import { FormWrap, Labels, InputArea, BtnLogIn } from './LoginPage.styled';

export default function LoginPage() {
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
		<FormWrap>
			<form autoComplete="off" onSubmit={handleSubmit}>
				<Labels>
					<InputArea
						placeholder="email"
						type="email"
						value={email}
						name="email"
						onChange={handleChange}
					/>
				</Labels>
				<Labels>
					<InputArea
						placeholder="password"
						type="password"
						value={password}
						name="password"
						onChange={handleChange}
					/>
				</Labels>
				<BtnLogIn type="submit">LogIn</BtnLogIn>
			</form>
		</FormWrap>
	);
}
