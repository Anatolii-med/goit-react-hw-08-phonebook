import { Navigation } from 'components/Nav/nav';
import { LoginNavigation } from 'components/Nav/logNav';
import { Outlet } from 'react-router-dom';

export function Layout() {
	return (
		<>
			<Navigation />
			<LoginNavigation />
			<Outlet />
		</>
	);
}
