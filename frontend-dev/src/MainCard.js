import {Sheet, Typography} from "@mui/joy";
import * as React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import LearnMoreMenu from "./LearnMoreMenu";

export default function MainCard(title, brief) {
    return (<Sheet variant="outlined" sx={{
        width: "80%", maxWidth: 500, mx: 'auto', // margin left & right
        my: 'auto', // margin top & bottom
        py: 3, // padding top & bottom
        px: 2, // padding left & right
        display: 'flex', flexDirection: 'column', gap: 2, borderRadius: 'sm', boxShadow: 'md',
    }}>
        <div>
            <Typography level="h4" component="h1">
                {title}
            </Typography>
            <Typography level="body-md">{brief}</Typography>
            <Box sx={{display: 'flex', justifyContent: 'center', columnGap: 1, py: 1}}>
                <LearnMoreMenu />
                <Button size="md" variant="soft" color="danger">Skip</Button>
            </Box>
        </div>
    </Sheet>);
}