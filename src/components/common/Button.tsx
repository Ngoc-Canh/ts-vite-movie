import Button from '@mui/material/Button'
import { fontSize } from '@mui/system'

interface Props {
    text?: String,
    height?: String
}

const ButtonCustom = (props: Props) => {
    return (
        <Button variant="contained" style={{
            backgroundColor: "red",
            textTransform: "capitalize",
            color: "white",
            borderRadius: "50px",
            height: `${props.height || "26px"}`,
            padding: "6px 10px",
            fontSize: "0.7rem"
        }}>
            {props.text}
        </Button>
    )
}

export default ButtonCustom