import Carousel from 'react-material-ui-carousel';
import slider from '../helper/slider.json';
import Item from './Item';

function MyCarousel() {
	return (
		<Carousel>
			{slider.map((item) => (
				<Item key={item.id} item={item} />
			))}
		</Carousel>
	);
}

export default MyCarousel;
