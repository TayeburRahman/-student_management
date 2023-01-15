import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import HomeIcon from '@mui/icons-material/Home';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SchoolIcon from '@mui/icons-material/School';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './index.css';

const categories = [

  {
    id: 'Student Classes',
    children: [
      { id: 'Create Class', icon: <SchoolIcon />,  route:'create_class' },
      { id: 'Manage Class', icon: <SettingsInputComponentIcon />,  route:'manage_students'}, 
    ],
  },
  {
    id: 'Subject',
    children: [
      {
        id: 'Create Subject',
        icon: <LocalLibraryIcon />, 
        route:'create_subject'
      },
      { id: 'Manage Subject',
      icon: <DnsRoundedIcon /> , route:'manage_subject' },
      { id: 'Add Subject Combination', icon: <MenuBookIcon />, route:'add_subject_combination'  },
      { id: 'Manage Subject Combination', icon: <CastForEducationIcon />, route:'manage_subject_combination'  },
      
    ],
  }, 
  {
    id: 'Student',
    children: [
      { id: 'Admission', icon: <GroupAddIcon />,  route:'admission' },
      { id: 'Manage Students', icon: <ManageAccountsIcon />,  route:'manage_students'}, 
    ],
  },
  {
    id: 'Result',
    children: [
      { id: 'Add Result', icon: <GroupAddIcon />,  route:'add_result' },
      { id: 'Manage Result', icon: <ManageAccountsIcon />,  route:'manage_result'}, 
    ],
  },
];

const item = {
  py: '2px',
  px: 3,
  color: 'rgba(255, 255, 255, 0.7)',
  '&:hover, &:focus': {
    bgcolor: 'rgba(255, 255, 255, 0.08)',
  },
};

const itemCategory = {
  boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
  py: 1.5,
  px: 3,
};

export default function DashboardNavigator(props) {
  const { ...other } = props;

  const location = useLocation() 
  let uri = location.pathname
  console.log(uri)


  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem sx={{ ...item, ...itemCategory, fontSize: 22, color: '#fff' }}>
          Paperbase
        </ListItem>
        <ListItem sx={{ ...item, ...itemCategory }}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>Dashboard</ListItemText>
        </ListItem>
        {categories.map(({ id, children }) => (
          <Box key={id} sx={{ background: '#101F33' }}>
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText sx={{ color: '#fff' }}>{id}</ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, route }) => (
              <ListItem disablePadding key={childId}>
                <Link className='linkDashboard' to={`${route}`}>
                <ListItemButton selected={uri === `/dashboard/${route}`? true : false} sx={item}>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText>{childId}</ListItemText>
                </ListItemButton>
                </Link>
              </ListItem>
            ))}

            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}
      </List>
    </Drawer>
  );
}