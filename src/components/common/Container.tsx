import { PropsWithChildren } from "react"
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { SxProps } from "@mui/material/styles"


interface Props {
    children: JSX.Element,
    header: String,
    sx?: SxProps
}

const Container = (props: Props) => {
    return <Box sx={props.sx}>
        {props.header
            ? <Typography variant="h5" fontWeight="700" color="white">{props.header.toUpperCase()}</Typography>
            : <></>
        }
        <Box bgcolor={"red"} height="3px" width={"70px"} mb={2} />
        {props.children}
    </Box>
}

export default Container