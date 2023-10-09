import * as React from 'react';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import Home from '@mui/icons-material/Home';
import Person from '@mui/icons-material/Person';
import SwitchCourseMenu from "./SwitchCourseMenu";

export default function TabBar() {
    return (
        <Box component="nav" aria-label="My site" sx={{display: 'flex', flexGrow: 1, mx: 2, py: 2, maxWidth: '100vw'}} id={"tab-bar"}>
            <Box sx={{display: 'block', maxWidth: '100%'}}>
                <List role="menubar" orientation="horizontal">
                    <ListItem role="none">
                        <ListItemButton
                            role="menuitem"
                            component="a"
                            href="#horizontal-list"
                            aria-label="Home"
                        >
                            <Home />
                        </ListItemButton>
                    </ListItem>
                    <ListDivider/>
                    <ListItem role="none">
                        <ListItemButton role="menuitem">
                            <SwitchCourseMenu />
                        </ListItemButton>
                    </ListItem>
                    <ListDivider/>
                    <ListItem role="none">
                        <ListItemButton role="menuitem" component="a" href="#horizontal-list">
                            Log Out
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
}

