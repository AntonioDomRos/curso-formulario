import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Landing() {
	return (
		<div
			className="d-flex justify-content-center align-items-center"
			style={{ height: '100vh' }}
		>
			<article>
				<section className="card">
					<div className="text-content">
						<h3>Bienvenidos</h3>
						<p>
							¿Estas preparado para la nueva experiencia?, que esperas empieza
							ahora iniciando sesión
						</p>
						<Link to="/iniciar-sesion">
							<Button>Iniciar sesión</Button>
						</Link>
					</div>
					<div className="visual">
						<img
							src="https://images.pexels.com/photos/17249795/pexels-photo-17249795/free-photo-of-tecnologia-aeropuerto-avion-aeronave.jpeg"
							alt=""
						/>
					</div>
				</section>
			</article>
		</div>
	);
}

export default Landing;
