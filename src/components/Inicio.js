import { DataStore } from '@aws-amplify/datastore';
import { Button, Switch, TextField } from '@mui/material';
import { LineWobble } from '@uiball/loaders';
import { useEffect, useState } from 'react';
import { Perfil } from '../models';
import Cards from './Cards';
import MyCarousel from './Carousel';
import Nav from './Nav';

function Inicio() {
	const [existeRegistro, setexisteRegistro] = useState(false);
	const [perfil, setperfil] = useState({ nombre: '', apellido: '' });
	const [loading, setloading] = useState(true);

	const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

	useEffect(() => {
		async function getData() {
			const models = await DataStore.query(Perfil);
			if (models.length > 0) {
				await delay(1000);
				setexisteRegistro(true);
				setperfil(models[0]);
				setloading(false);
			}
		}
		getData();
	}, []);

	if (loading) {
		return (
			<div
				className="d-flex justify-content-center align-items-center"
				style={{ height: '100vh' }}
			>
				<div className="line-wobble">
					<LineWobble size={100} lineWeight={5} speed={1.75} color="black" />
					Iniciando Sesión
				</div>
			</div>
		);
	}

	return (
		<div
			className="d-block"
			style={{
				width: '100%',
				height: '100%',
				marginLeft: 'auto',
				marginRight: 'auto',
			}}
		>
			{existeRegistro ? <Bienvenida nombre={perfil.nombre} /> : <Formulario />}
		</div>
	);
}

function Formulario() {
	const [nombre, setnombre] = useState('');
	const [apellido, setapellido] = useState('');
	const [municipio, setmunicipio] = useState('');
	const [genero, setgenero] = useState(false);

	const registro = async () => {
		await DataStore.save(
			new Perfil({
				nombre: nombre,
				apellido: apellido,
				municipio: municipio,
				genero: genero,
			})
		);
	};

	return (
		<div className="container d-flex flex-column text-center col-8">
			<Orbe />
			<h2 className="py-3">Registrate</h2>
			<TextField
				placeholder="Nombre"
				className="py-2"
				onChange={(e) => setnombre(e.target.value)}
				value={nombre}
			/>
			<TextField
				placeholder="Apellido"
				className="py-2"
				onChange={(e) => setapellido(e.target.value)}
				value={apellido}
			/>
			<TextField
				placeholder="Municipio"
				className="py-2"
				onChange={(e) => setmunicipio(e.target.value)}
				value={municipio}
			/>
			<div className="row">
				<div className="col">
					<label>Género: Mujer</label>
				</div>
				<div className="col">
					<Switch
						checked={genero}
						onChange={(e) => setgenero(e.target.checked)}
					/>
				</div>
				<div className="col">
					<label>Hombre</label>
				</div>
				<Button variant="contained" onClick={registro}>
					Registrarse
				</Button>
			</div>
		</div>
	);
}

function Orbe() {
	return <div className="orb"></div>;
}

function Bienvenida({ nombre }) {
	return (
		<div className="main d-block">
			<div className="header p-3 mb-3 border-bottom" style={{ width: '100%' }}>
				<div className="container">
					<div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
						<Nav perfil={nombre} />
					</div>
				</div>
			</div>
			<div className="face">
				<p className="slide">Hola de nuevo {nombre}</p>
			</div>
			<div>
				<MyCarousel />
			</div>
			<div className="d-flex align-items-center justify-content-center">
				<Cards />
			</div>
			<div>
				<p>xDDDDDD</p>
			</div>
		</div>
	);
}

export default Inicio;
