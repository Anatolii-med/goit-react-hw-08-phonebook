export function LoginPage() {
	return (
		<>
			<form>
				<label>
					<input placeholder="email" name="email" type="text" />
				</label>
				<label>
					<input placeholder="password" name="password" type="text" />
				</label>
				<button type="submit">LogIn</button>
			</form>
		</>
	);
}
