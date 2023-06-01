import { PropsWithChildren } from "react"
import Box from '@mui/material/Box'
import { Swiper } from "swiper/react"

const CustomAutoSwiper = (props: PropsWithChildren) => {
    return <Box sx={{
        "& .swiper-slide": {
            width: {
                xs: "50%",
                sm: "35%",
                md: "25%",
                lg: "20.5%"
            }
        }
    }}>
        <Swiper
            slidesPerView="auto"
            grabCursor={true}
            style={{ width: "100%", height: "max-content" }}>
            {props.children}
        </Swiper>
    </Box>
}

export default CustomAutoSwiper