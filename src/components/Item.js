import { Paper } from '@mui/material';
import React from 'react';

function Item({ item }) {
	return (
		<Paper>
			<img
				src={item.image}
				alt={item.title}
				style={{
					width: '100%',
					height: '70vh',
					padding: '0px',
					display: 'flex',
					justifyContent: 'center',
				}}
			/>
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<h2>{item.title}</h2>
			</div>
		</Paper>
	);
}

export default Item;
