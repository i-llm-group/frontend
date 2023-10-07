import * as React from 'react';
import {CssVarsProvider} from '@mui/joy/styles';
import {Sheet, Typography} from '@mui/joy';

import TabBar from "./TabBar";
import InteractionUI from "./InteractionUI";

export default function App() {
    const tabBar = TabBar();
    const interactionUI = InteractionUI();
    return (
        <CssVarsProvider>
            {tabBar}
            {interactionUI}
        </CssVarsProvider>
    );
}