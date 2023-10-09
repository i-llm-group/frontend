import * as React from 'react';
import Box from '@mui/joy/Box';
import Drawer from '@mui/joy/Drawer';
import {DialogTitle, Input, ListSubheader, ModalClose, Typography} from "@mui/joy";
import ListItemButton from "@mui/joy/ListItemButton";
import ListItem from "@mui/joy/ListItem";
import List from "@mui/joy/List";
import IconButton from "@mui/joy/IconButton";
import Delete from '@mui/icons-material/Delete';
import Add from '@mui/icons-material/Add';
import Button from "@mui/joy/Button";

export default function SwitchCourseMenu() {
    const [domReady, setDomReady] = React.useState(false);
    React.useEffect(() => {
        setDomReady(true)
    }, []);

    const [open, setOpen] = React.useState(false);

    const toggleCourseDrawer = (inOpen) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setOpen(inOpen);
    };

    return domReady ? (
        <Box sx={{display: 'flex'}}>
            <div onClick={toggleCourseDrawer(true)}>Switch Course</div>
            <Drawer open={open} anchor="left" onClose={toggleCourseDrawer(false)}
                    container={document.getElementById('tab-bar')}>
                <ModalClose/>
                <DialogTitle>Switch Course</DialogTitle>
                <Box role="presentation">
                    <Box sx={{display: 'flex', mx: 'auto', py: 2, justifyContent: 'center'}}>
                        <Box sx={{display: 'grid', rowGap: 2}}>
                            <Box>
                                <Typography level='h3'>My Courses</Typography>
                            </Box>
                            <Box>
                                <List
                                    variant="outlined"
                                    sx={{
                                        width: 200,
                                        borderRadius: 'sm',
                                    }}
                                >
                                    <ListItem nested>
                                        <ListSubheader>Category 1</ListSubheader>
                                        <List>
                                            <ListItem
                                                endAction={<IconButton aria-label="Delete" size="sm" color="danger">
                                                    <Delete/></IconButton>}>
                                                <ListItemButton selected>Calculus</ListItemButton>
                                            </ListItem>
                                            <ListItem
                                                endAction={<IconButton aria-label="Delete" size="sm" color="danger">
                                                    <Delete/></IconButton>}>
                                                <ListItemButton>Subitem 2</ListItemButton>
                                            </ListItem>
                                        </List>
                                    </ListItem>
                                    <ListItem nested>
                                        <ListSubheader>Category 2</ListSubheader>
                                        <List>
                                            <ListItem
                                                endAction={<IconButton aria-label="Delete" size="sm" color="danger">
                                                    <Delete/></IconButton>}>
                                                <ListItemButton>Subitem 1</ListItemButton>
                                            </ListItem>
                                            <ListItem
                                                endAction={<IconButton aria-label="Delete" size="sm" color="danger">
                                                    <Delete/></IconButton>}>
                                                <ListItemButton>Subitem 2</ListItemButton>
                                            </ListItem>
                                        </List>
                                    </ListItem>
                                </List>
                            </Box>
                            <Box sx={{display: 'flex', justifyContent: 'center'}}>
                                <Button sx={{display: 'flex'}} color='success' variant='soft' startDecorator={<Add/>}>Add a syllabus</Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Drawer>
        </Box>
    ) : null;
}

