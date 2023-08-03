import { CardMedia } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

function CardItem({ image, title, description }) {
	const [imageExpand, setImageExpand] = useState(false);

	const handleMouseEnter = () => {
		setImageExpand(true);
	};

	const handleMouseLeave = () => {
		setImageExpand(false);
	};

	return (
		<div className="card-item">
			<Card
				sx={{
					maxWidth: 345,
					height: imageExpand ? 340 : 500,
					transition: 'height 0.3s ease',
				}}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				<CardMedia
					sx={{
						height: imageExpand ? 150 : 500,
						transition: 'height 0.3s ease',
						backgroundSize: 'cover',
					}}
					image={image}
				/>
				{imageExpand && (
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							{title}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							{description}
						</Typography>
						<CardActions>
							<Button size="small">Conocer más</Button>
						</CardActions>
					</CardContent>
				)}
			</Card>
		</div>
	);
}

function Cards() {
	return (
		<Grid
			container
			display="flex"
			spacing={5}
			justifyContent="center"
			alignItems="center"
		>
			<Grid item xs={12} sm={6} md={4}>
				<CardItem
					image="https://i.pinimg.com/originals/4f/04/57/4f045792c7bbcea8bf5b67929f6465de.jpg"
					title="API de Star Wars"
					description="El uso de esta API fue con fines de entretenimiento y de aprendizaje, sí quieres conocer la página que estoy realizando puedes simplemente dar click en el botón de abajo."
				/>
			</Grid>
			<Grid item xs={12} sm={6} md={4}>
				<CardItem
					image="https://th.bing.com/th/id/OIP.XQl2btYgbI1XNNWAl6tGvwHaLH?pid=ImgDet&rs=1"
					title="API de Rick & Morti"
					description="El uso de esta API fue con fines de entretenimiento y de aprendizaje, sí quieres conocer la página que estoy realizando puedes simplemente dar click en el botón de abajo."
				/>
			</Grid>
			<Grid item xs={12} sm={6} md={4}>
				<CardItem
					image="https://cdn-1.motorsport.com/images/amp/2jXqXpb6/s6/the-drivers-stand-for-the-nati.jpg"
					title="Acerca de la Formula 1"
					description="Conocerás un poco acerca de la categoría reina del automovilismo, tanto como los pilotos, escuderías, noticias y mucho más."
				/>
			</Grid>
		</Grid>
	);
}

export default Cards;
