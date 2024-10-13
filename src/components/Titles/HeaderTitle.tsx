
import {
    Typography,
    Box
} from "@mui/material"

interface HeaderTitlePropsType {
    title: string,
    marginTop?: number,
    hideline?: boolean,
}

const HeaderTitle = ({ title, marginTop=undefined, hideline=false }:HeaderTitlePropsType) => {
    return (
        <Box sx={{ ...(marginTop && { marginTop: `${marginTop}px`}) }}>
            <Typography variant="h4" component="span" sx={{ color: 'rgba(0,0,0,.6)' }}>
                {title}
                {!hideline && (
                    <Box sx={{ width: '100%', height: '1px', marginTop: '4px', marginBottom: '6px', background: 'rgba(0,0,0,.3)' }}  />
                )}
            </Typography>

        </Box>
    )
}

export default HeaderTitle
