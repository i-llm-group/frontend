import {Typography} from "@mui/joy";
import * as React from "react";
import Box from "@mui/joy/Box";
import ExpandableList from "./ExpandableList";

export default function SideBar() {
    const course_name = 'Calculus';
    return (<Box component="div" sx={{
        // width: 300,
        mx: 'auto', // margin left & right
        my: 4, // margin top & bottom
        py: 3, // padding top & bottom
        px: 2, // padding left & right
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        borderRadius: 'sm',
        boxShadow: 'md',
    }}>
        <div>
            <Typography level="h4" component="h1">
                {course_name}
            </Typography>
            <ExpandableList />
        </div>
    </Box>);
}