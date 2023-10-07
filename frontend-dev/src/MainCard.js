import {Sheet, Typography} from "@mui/joy";
import * as React from "react";

import Menu from "./Menu";

export default function MainCard() {
    const menu = Menu();
    return (<Sheet variant="outlined" sx={{
        width: 300,
        mx: 'auto', // margin left & right
        my: 'auto', // margin top & bottom
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
                Stokes' Theorem
            </Typography>
            <Typography level="body-md">Lorem ipsum is placeholder text commonly used in the graphic, print, and
                publishing industries for previewing layouts and visual mockups.</Typography>
            {menu}
        </div>
    </Sheet>);
}