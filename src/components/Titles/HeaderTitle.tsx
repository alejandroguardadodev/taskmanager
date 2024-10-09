
import {
    Typography,
    Box
} from "@mui/material"

interface HeaderTitlePropsType {
    title: string,
    marginTop?: number
}

const HeaderTitle = ({ title, marginTop=undefined }:HeaderTitlePropsType) => {
    return (
        <Box sx={{ ...(marginTop && { marginTop: `${marginTop}px` }) }}>
            <Typography variant="h4" component="span">
                {title}
                <Box sx={{ width: '100%', height: '1px', marginTop: '4px', marginBottom: '6px', background: 'rgba(0,0,0,.3)' }}  />
            </Typography>

        </Box>
    )
}

export default HeaderTitle
