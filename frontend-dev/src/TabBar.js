import * as React from 'react';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import Home from '@mui/icons-material/Home';
import Person from '@mui/icons-material/Person';

export default function TabBar() {
    return (
        <Box component="nav" aria-label="My site" sx={{flexGrow: 1, mx: 2, py: 2}} id={"tab-bar"}>
            <List role="menubar" orientation="horizontal">
                <ListItem role="none">
                    <ListItemButton
                        role="menuitem"
                        component="a"
                        href="#horizontal-list"
                        aria-label="Home"
                    >
                        <Home />iKnowledge
                    </ListItemButton>
                </ListItem>
                <ListDivider/>
                <ListItem role="none">
                    <ListItemButton role="menuitem" component="a" href="#horizontal-list">
                        Switch Course
                    </ListItemButton>
                </ListItem>
                <ListDivider/>
                <ListItem role="none">
                    <ListItemButton role="menuitem" component="a" href="#horizontal-list">
                        Log Out
                    </ListItemButton>
                </ListItem>
                <ListItem role="none" sx={{marginInlineStart: 'auto'}}>
                    <ListItemButton
                        role="menuitem"
                        component="a"
                        href="#horizontal-list"
                        aria-label="Profile"
                    >
                        <Person/>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );
}

