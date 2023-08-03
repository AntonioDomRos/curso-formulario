import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Inicio from './components/Inicio';
import Landing from './components/Landing';
import Login from './components/Login';
import News from './components/News';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Landing />,
	},
	{
		path: '/iniciar-sesion',
		element: <Login />,
	},
	{
		path: '/inicio',
		element: <Inicio />,
	},
	{
		path: '/noticias',
		element: <News />,
	},
	{
		path: '/acerca',
		element: '',
	},
	{
		path: '/rick&morti',
		element: '',
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
