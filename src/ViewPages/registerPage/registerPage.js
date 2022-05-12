export function RegisterPage() {
	return (
		<>
			<form>
				<label>
					<input placeholder="name" name="name" type="text" />
				</label>
				<label>
					<input placeholder="email" name="email" type="text" />
				</label>
				<label>
					<input placeholder="password" name="password" type="text" />
				</label>
				<button type="submit">Register</button>
			</form>
		</>
	);
}
