// mui imports
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// file imports
import { mainNavbarItems } from './consts/navbarListItems';
import { navbarStyles } from './styles';

// react router imports
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
	const navigate = useNavigate();

	return (
		<Drawer
			sx={navbarStyles.drawer}
			variant="permanent"
			anchor="left">
			<Toolbar />
			<Divider />
			<List>
				{mainNavbarItems.map((item) => (
					<ListItem
						key={item.id}
						disablePadding
						onClick={() => navigate(item.route)}>
						<ListItemButton>
							<ListItemIcon sx={navbarStyles.icons}>
								{item.icon}
							</ListItemIcon>
							<ListItemText
								sx={navbarStyles.text}
								primary={item.label}
							/>
						</ListItemButton>
					</ListItem>
				))}
			</List>
			<Divider />
		</Drawer>
	);
};

export default Navbar;
