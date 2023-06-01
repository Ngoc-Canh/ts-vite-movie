import { Box } from "@mui/system";
import tmdbConfig from "../../../config/tmdbConfigs";

function HeaderPage(props: { path: String }) {
  const { path } = props;
  return (
    <Box
      sx={{
        paddingTop: {
          xs: "120%",
          sm: "70%",
          md: "50%",
          lg: "38%",
        },
        position: "relative",
        zIndex: -1,
        backgroundPosition: "top",
        backgroundSize: "cover",
        backgroundImage: `url(${tmdbConfig.backdropPath(path)})`,
        backgroundAttachment: "fixed",
        "&::before": {
          content: '""',
          position: "absolute",
          left: 0,
          bottom: 0,
          width: "100%",
          height: "100%",
          backgroundImage:
            "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))",
        },
      }}
    />
  );
}

export default HeaderPage;
