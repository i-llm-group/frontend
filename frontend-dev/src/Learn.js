import MainCard from "./MainCard";
import {ButtonGroup, Chip, DialogTitle, LinearProgress, ListSubheader, ModalClose, Typography} from "@mui/joy";
import Button from "@mui/joy/Button";
import Box from "@mui/joy/Box";
import * as React from "react";
import {KeyboardArrowLeft, KeyboardArrowRight} from "@mui/icons-material";
import getData from "./LectureData";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import Drawer from "@mui/joy/Drawer";
import ListItemButton from "@mui/joy/ListItemButton";

export default function Learn() {
    // card view stuff
    const [domReady, setDomReady] = React.useState(false);
    React.useEffect(() => {
        setDomReady(true)
    }, []);

    const [open, setOpen] = React.useState(false);

    const toggleCardDrawer = (inOpen) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setOpen(inOpen);
    };


    const data = getData();
    const [ccard, setCcard] = React.useState(0);
    const [title, setTitle] = React.useState(data[ccard][0]);
    const [brief, setBrief] = React.useState(data[ccard][1]);

    const CardList = () => {
        const genCard = (idx) => {
            if (idx === ccard) {
                return (<ListItem><ListItemButton selected>{data[idx][0]}</ListItemButton></ListItem>);
            } else {
                return (<ListItem><ListItemButton>{data[idx][0]}</ListItemButton></ListItem>);
            }
        };
        let res = [];
        for (let i = 0; i < data.length; ++i) {
            res.push(genCard(i));
        }
        return res;
    };

    const toggleUpdateData = (op) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        let newCcard = ccard;
        switch (op) {
            case 0:
                if (ccard !== 0) {
                    --newCcard;
                }
                break;
            case 1:
                if (ccard !== data.length - 1) {
                    ++newCcard;
                }
                break;
        }
        setCcard(newCcard);
        setTitle(data[newCcard][0]);
        setBrief(data[newCcard][1]);
    };
    return (
        <Box sx={{display: 'grid', rowGap: 1, width: '100%'}}>
            <LinearProgress determinate value={(ccard + 1) / data.length * 100}/>
            <Box sx={{display: 'grid', alignItems: 'center', height: '75vh'}}>
                <Box sx={{display: 'flex', justifyContent: 'center'}}>
                    <Box sx={{display: 'grid', rowGap: 3, alignItems: 'center'}}>
                        <Box sx={{display: 'grid', rowGap: 1, justifyContent: 'center'}}>
                            {MainCard(title, brief)}
                            <Chip onClick={toggleCardDrawer(true)} variant="soft"
                                  sx={{mx: 'auto'}}>{ccard + 1} / {data.length}</Chip>
                            <Drawer open={open} anchor="bottom" onClose={toggleCardDrawer(false)}
                                    container={document.getElementById('tab-bar')}>
                                <ModalClose/>
                                <DialogTitle>Cards</DialogTitle>
                                <Box role="presentation">
                                    <Box sx={{display: 'flex', mx: 'auto', py: 2, justifyContent: 'center'}}>
                                        <Box sx={{display: 'grid', rowGap: 2}}>
                                            <Box>
                                                <List
                                                    variant="outlined"
                                                    sx={{
                                                        width: 200,
                                                        borderRadius: 'sm',
                                                    }}
                                                >
                                                    <CardList/>
                                                </List>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Drawer>
                        </Box>
                        <Box sx={{display: 'grid', rowGap: 1, justifyContent: 'center'}}>
                            <ButtonGroup
                                aria-label="radius button group"
                                sx={{'--ButtonGroup-radius': '40px'}}
                            >
                                <Button size="lg" startDecorator={<KeyboardArrowLeft/>} variant="outlined"
                                        color="primary"
                                        onClick={toggleUpdateData(0)}>Previous</Button>
                                <Button size="lg" endDecorator={<KeyboardArrowRight/>} variant="solid" color="success"
                                        onClick={toggleUpdateData(1)}>Next</Button>
                            </ButtonGroup>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}