const MainContentLayout = ({ children, isAnouncement }) => {
	return (
		<main
			className={`container container-main ${isAnouncement ? 'isAnounce' : ''}`}
		>
			{children}
		</main>
	);
};
export default MainContentLayout;
