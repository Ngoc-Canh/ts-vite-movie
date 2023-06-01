import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/free-mode";
import tmdbConfig from "../../config/tmdbConfigs";
import Container from "../common/Container";
import MediaSlide from "./components/MediaSlide";
import Slide from "./components/Slide";

const HomePage = () => {

  return (
    <Box bgcolor={"black"}>
      <Slide
        mediaType={tmdbConfig.mediaType.movie}
        timeWindow={tmdbConfig.timeWindow.week}
      />

      <Container
        header="POPULAR MOVIES"
        sx={{ paddingX: "1.5rem", paddingTop: "5%" }}
      >
        <MediaSlide
          mediaType={tmdbConfig.mediaType.movie}
          mediaCategory={tmdbConfig.mediaCategory.popular}
        />
      </Container>

      <Container
        header="TV POPULAR"
        sx={{ paddingX: "1.5rem", paddingTop: "50px" }}
      >
        <MediaSlide
          mediaType={tmdbConfig.mediaType.tv}
          mediaCategory={tmdbConfig.mediaCategory.popular}
        />
      </Container>
      <Container
        header="Upcoming"
        sx={{ paddingX: "1.5rem", paddingTop: "50px" }}
      >
        <MediaSlide
          mediaType={tmdbConfig.mediaType.movie}
          mediaCategory={tmdbConfig.mediaCategory.upcoming}
        />
      </Container>
      <Grid height={"100px"} />
    </Box>
  );
};

export default HomePage;
