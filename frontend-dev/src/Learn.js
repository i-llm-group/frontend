import MainCard from "./MainCard";
import {ButtonGroup, Chip, LinearProgress} from "@mui/joy";
import Button from "@mui/joy/Button";
import Box from "@mui/joy/Box";
import * as React from "react";
import {KeyboardArrowLeft, KeyboardArrowRight} from "@mui/icons-material";
import getData from "./LectureData";

export default function Learn() {
    const data = getData();
    const [ccard, setCcard] = React.useState(0);
    const [title, setTitle] = React.useState(data[ccard][0]);
    const [brief, setBrief] = React.useState(data[ccard][1]);
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
                <LinearProgress determinate value={(ccard + 1) / data.length * 100} />
                <Box sx={{display: 'grid', alignItems: 'center', height: '75vh'}}>
                    <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        <Box sx={{display: 'grid', rowGap: 3, alignItems: 'center'}}>
                            <Box sx={{display: 'grid', rowGap: 1, justifyContent: 'center'}}>
                                {MainCard(title, brief)}
                                <Chip onClick={function(){}} variant="soft" sx={{mx: 'auto'}}>{ccard + 1} / {data.length}</Chip>
                            </Box>
                            <Box sx={{display: 'grid', rowGap: 1, justifyContent: 'center'}}>
                                <ButtonGroup
                                    aria-label="radius button group"
                                    sx={{'--ButtonGroup-radius': '40px'}}
                                >
                                    <Button size="lg" startDecorator={<KeyboardArrowLeft/>} variant="outlined" color="primary"
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