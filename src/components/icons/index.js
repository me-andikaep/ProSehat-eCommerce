import { BiSearch } from 'react-icons/bi';
import { IoCart } from 'react-icons/io5';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export default function Icons({ type, size, style, className }) {
	switch (type) {
		case 'search':
			return (
				<BiSearch style={{ ...style }} className={className} size={size} />
			);
		case 'cart':
			return <IoCart style={{ ...style }} className={className} size={size} />;
		case 'arrowLeft1':
			return (
				<IoIosArrowBack
					style={{ ...style }}
					className={className}
					size={size}
				/>
			);
		case 'arrowRight1':
			return (
				<IoIosArrowForward
					style={{ ...style }}
					className={className}
					size={size}
				/>
			);

		default:
			break;
	}
}
