import MainCard from "./MainCard";
import SideBar from "./SideBar";
import Box from "@mui/joy/Box";

export default function InteractionUI() {
    const mainCard = MainCard();
    const sideBar = SideBar();
    return (<Box sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, 1fr)',
        gap: 1,
        gridTemplateRows: 'auto',
        gridTemplateAreas: `"sidebar main main main"`,
        height: '80vh',
        mx: 'auto', // margin left & right
        my: 4, // margin top & bottom
        py: 3, // padding top & bottom
        px: 2, // padding left & right
    }}>
        <Box sx={{
            gridArea: 'sidebar',
            bgcolor: 'primary.main',
            display: {xs: 'none', sm: 'none', md: 'block'}
        }}> {sideBar}</Box>
        <Box sx={{
            gridArea: 'main',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '80vh'
        }}>{mainCard}</Box>
    </Box>)
        ;
}