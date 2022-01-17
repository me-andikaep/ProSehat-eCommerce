import { BiSearch } from 'react-icons/bi';

export default function Icons({ type, size, style }) {
	switch (type) {
		case 'search':
			return <BiSearch style={{ width: size || 25, ...style }} />;

		default:
			break;
	}
}
