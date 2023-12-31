import * as React from 'react';
import Box from '@mui/joy/Box';
import Drawer from '@mui/joy/Drawer';
import Button from '@mui/joy/Button';
import {DialogTitle, Input, ModalClose, Typography} from "@mui/joy";
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import SendIcon from '@mui/icons-material/Send';

export default function LearnMoreMenu() {
    const [domReady, setDomReady] = React.useState(false);
    React.useEffect(() => {
        setDomReady(true)
    }, []);

    const [open, setOpen] = React.useState(false);

    const toggleLMDrawer = (inOpen) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setOpen(inOpen);
    };

    return domReady ? (
        <Box sx={{display: 'flex'}}>
            <Button variant="soft" color="primary" onClick={toggleLMDrawer(true)}>
                Learn More
            </Button>
            <Drawer open={open} anchor="bottom" onClose={toggleLMDrawer(false)}
                    container={document.getElementById('tab-bar')}>
                <ModalClose/>
                <DialogTitle>Learn More</DialogTitle>
                <Box role="presentation">
                    <Box sx={{display: 'flex', maxWidth: '80%', mx: 'auto', py: 2, justifyContent: 'center'}}>
                        <Box sx={{display: 'grid', rowGap: 2}}>
                            <Box>
                                <Typography level='h3'>Learn More ...</Typography>
                            </Box>
                            <Box>
                                <Typography>Here go some details about your topic generated by LLM.</Typography>
                            </Box>
                            <Box>
                                <Input placeholder="Ask anything..."
                                    startDecorator={<ContactSupportIcon/>}
                                    endDecorator={<Button><SendIcon/></Button>}
                                ></Input>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Drawer>
        </Box>
    ) : null;
}

