import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import { FormWrap, Labels, InputArea, BtnReg } from './RegisterPage.styled';

export default function RegisterPage() {
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
		<FormWrap>
			<form autoComplete="off" onSubmit={handleSubmit}>
				<Labels>
					<InputArea
						placeholder="name"
						type="text"
						value={name}
						name="name"
						onChange={handleChange}
					/>
				</Labels>
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
				<BtnReg type="submit">Register</BtnReg>
			</form>
		</FormWrap>
	);
}
