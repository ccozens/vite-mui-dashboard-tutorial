import Grid from '@mui/material/Grid';
import CommonButton from '../../components/common/CommonButton';

const Authentication = () => {
	const buttonStyles = {
		fontWeight: 600,
		fontSize: '0.875rem',
		textTransform: 'capitalize',
		borderRadius: 2.5,
		'&.MuiButton-contained': {
			backgroundColor: '#009be5',
			'&:hover': {
				backgroundColor: '#006db3',
			},
		},
		'&.MuiButton-outlined': {
			color: '#fff',
			borderColor: '#fff',
			'&:hover': {
				backgroundColor: 'transparent',
			},
		},
	};

	return (
		<Grid xs={8}>
			Authentication
			<CommonButton size="large" variant="contained" sx={buttonStyles}>
				Add user
			</CommonButton>
			<CommonButton size="large" variant="outlined" sx={buttonStyles}>
				Web setup
			</CommonButton>
			<CommonButton
				color="primary"
				size="large"
				variant="contained"
				// sx={buttonStyles}
				>
				Add user
			</CommonButton>
		</Grid>
	);
};

export default Authentication;
