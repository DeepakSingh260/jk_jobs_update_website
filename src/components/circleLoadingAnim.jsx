import { Box, CircularProgress } from "@mui/material"

export const LoadingAnim = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
            <CircularProgress />
        </Box>
    )
}