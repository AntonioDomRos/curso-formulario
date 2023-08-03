import {
	AppBar,
	Avatar,
	Box,
	Button,
	Container,
	Toolbar,
	Tooltip,
	Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

function Nav({ nombre }) {
	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
						<Typography
							noWrap
							component="a"
							href="/"
							sx={{
								mr: 2,
								display: { xs: 'none', md: 'flex' },
								fontFamily: 'monospace',
								fontWeight: 700,
								letterSpacing: '.3rem',
								color: 'inherit',
								textDecoration: 'none',
							}}
						>
							LOGO
						</Typography>
						<Link to="/acerca" style={{ color: 'white' }}>
							<Button variant="" color="primary" sx={{ mr: 1 }}>
								About
							</Button>
						</Link>
						<Link to="/noticias" style={{ color: 'white' }}>
							<Button variant="" color="primary" sx={{ mr: 1 }}>
								News
							</Button>
						</Link>
						<Link to="/rick&morti" style={{ color: 'white' }}>
							<Button variant="" color="primary" sx={{ mr: 1 }}>
								Rick & Morti
							</Button>
						</Link>
						<Link to="/starwars" style={{ color: 'white' }}>
							<Button variant="" color="primary" sx={{ mr: 1 }}>
								Star Wars
							</Button>
						</Link>
					</Box>
					<Box
						sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}
					>
						<Tooltip title={nombre}>
							<Avatar alt={nombre} src="" />
						</Tooltip>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}

export default Nav;
