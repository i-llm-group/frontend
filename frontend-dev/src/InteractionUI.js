import * as React from 'react';

import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import {useMediaQuery} from "@mui/material";
import SideBar from "./SideBar";
import Learn from "./Learn";

export default function InteractionUI() {
    const isMobile = useMediaQuery("(max-width: 760px)");
    const [sideBarOpen, setSideBarOpen] = React.useState(!isMobile);
    const toggleSideBar = () => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setSideBarOpen(!sideBarOpen);
    };

    return (<Box sx={{display: 'block', width: '90vw', mx: 'auto', justifyContent: 'center'}}>
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, 1fr)',
                gap: 1,
                gridTemplateRows: 'auto',
                gridTemplateAreas: `"` + (sideBarOpen ? "sidebar " : "") + `main main main"`,
                height: '80vh',
                mx: 'auto', // margin left & right
                my: 4, // margin top & bottom
                py: 3, // padding top & bottom
                px: 2, // padding left & right
            }}>
                <Box sx={{
                    gridArea: 'sidebar', bgcolor: 'primary.main', display: sideBarOpen ? 'block' : 'none'
                }}><SideBar/></Box>
                <Box sx={{gridArea: 'main'}}>
                    <Box sx={{display: 'inline', pt: 2, px: 2, gap: 2, flexWrap: 'wrap'}}>
                        <Button onClick={toggleSideBar()}>{sideBarOpen ? 'Close' : 'Open'} Panel</Button>
                    </Box>
                    <Box sx={{display: 'flex', height: "80vh", alignItems: 'center'}}>
                        <Learn/>
                    </Box>
                </Box>
            </Box>
    </Box>
        );
}