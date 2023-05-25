export const navbarStyles = {
	drawer: {
		width: 320,
		flexShrink: 0,
		'& .MuiDrawer-paper': {
			width: 320,
			boxSizing: 'border-box',
			backgroundColor: '#101F33',
			color: 'rgba(255, 255, 255, 0.7)',
		},
		'& .Mui-selected': {
			backgroundColor: '#1F4068',
			color: 'red',
		},
	},
	icons: {
		color: 'rgba(255, 255, 255, 0.7)',
		marginLeft: '20px',
	},
	text: {
		'& span': {
			marginLeft: '-10px',
			fontWeight: '600',
			fontSize: '16px',
		},
	},
};
