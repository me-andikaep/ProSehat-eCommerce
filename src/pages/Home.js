import { useState } from 'react';
import Announcement from '../components/announcements/Announcement';
import Header from '../components/header/Header';
import SliderBig from '../components/Slider/SliderBig';
import MainContentLayout from '../layouts/MainContentLayout';

const Home = () => {
	const [isAnouncement, setIsAnouncement] = useState(true);
	return (
		<div>
			<Announcement isAnouncement={isAnouncement} />
			<Header isAnouncement={isAnouncement} />
			<MainContentLayout isAnouncement={isAnouncement}>
				<SliderBig />
			</MainContentLayout>
		</div>
	);
};

export default Home;
