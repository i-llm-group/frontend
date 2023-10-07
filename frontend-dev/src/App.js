import * as React from 'react';
import {CssVarsProvider} from '@mui/joy/styles';

import TabBar from "./TabBar";
import InteractionUI from "./InteractionUI";

export default function App() {
    return (
        <CssVarsProvider>
            <TabBar/>
            <InteractionUI />
        </CssVarsProvider>
    );
}