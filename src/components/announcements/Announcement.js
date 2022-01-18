const Announcement = ({ isAnouncement }) => {
	return (
		<div className={`container-anouncement ${isAnouncement ? 'open' : ''}`}>
			Download Aplikasinya di App Store
		</div>
	);
};

export default Announcement;
