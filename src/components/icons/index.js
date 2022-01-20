import { BiSearch } from 'react-icons/bi';
import { IoCart } from 'react-icons/io5';
import {
	IoIosAdd,
	IoIosArrowBack,
	IoIosArrowForward,
	IoIosRemove,
} from 'react-icons/io';

export default function Icons({
	type,
	size,
	style,
	className,
	color,
	onClick,
}) {
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
					color={color}
				/>
			);
		case 'arrowRight1':
			return (
				<IoIosArrowForward
					style={{ ...style }}
					className={className}
					size={size}
					color={color}
				/>
			);
		case 'remove':
			return (
				<IoIosRemove
					style={{ ...style }}
					className={className}
					size={size}
					color={color}
					onClick={onClick}
				/>
			);
		case 'add':
			return (
				<IoIosAdd
					style={{ ...style }}
					className={className}
					size={size}
					color={color}
					onClick={onClick}
				/>
			);

		default:
			break;
	}
}
