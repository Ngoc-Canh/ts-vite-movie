import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MediaPersonApi from "../../api/media.person.api";
import tmdbConfig from "../../config/tmdbConfigs";
import { Cast } from "../../models/CompileCreditsMedia";
import { ModelPerson } from "../../models/Person";
import ConfigUI from "../../utils/config-ui";
import Container from "../common/Container";
import ItemBox from "./components/ItemBox";

const DetailPersonPage = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState<ModelPerson>();
  const [medias, setMedias] = useState<Cast[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getDetail = async () => {
      const { response, err } = await MediaPersonApi.getList({ id: id });

      if (response) {
        setDetail(response.data);
      }
      if (err) throw err;
    };

    const getMedias = async () => {
      const { response, err } = await MediaPersonApi.compileCredits({ id: id });

      if (response) {
        const sorted = response.data.cast.sort(function (a, b) {
          if (!a.release_date || !b.release_date) return 0;
          var keyA = new Date(a.release_date),
            keyB = new Date(b.release_date);
          if (keyA < keyB) return 1;
          if (keyA > keyB) return -1;
          return 0;
        });
        setMedias(sorted);
      }
      if (err) throw err;
    };

    getDetail();
    getMedias();
  }, [id]);

  const onNextPage = () => {
    setPage(page + 1);
  };

  return (
    <Box
      sx={{
        margin: "auto",
        padding: "64px 16px 16px 16px",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box
          sx={{
            width: { xs: "50%", sm: "30%", md: "20%" },
            paddingTop: { sm: "50%", md: "30%" },
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundImage: `url(${tmdbConfig.backdropPath(
              detail?.profile_path ?? ""
            )})`,
          }}
        />
        <Box
          sx={{
            width: { xs: "100%", sm: "65%", md: "80%" },
            paddingX: "2%",
          }}
        >
          <Typography
            color="white"
            variant="h5"
            fontWeight="bold"
            paddingY="15px"
            sx={{ ...ConfigUI.style.textLine(1) }}
          >
            {detail && detail.name} (
            {new Date(detail?.birthday ?? "").getFullYear()})
          </Typography>
          <Typography
            color="white"
            variant="body1"
            sx={{ ...ConfigUI.style.textLine(12) }}
          >
            {detail && detail.biography}
          </Typography>
        </Box>
      </Box>

      <Container sx={{ marginTop: "50px" }} header="Medias">
        <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
          {medias.slice(0, page * 8).map((item, key) => {
            return (
              <ItemBox
                key={key}
                medialResult={{
                  title: item.title ?? "",
                  overview: item.overview,
                  release_date: item.release_date,
                  vote_average: item.vote_average,
                  vote_count: item.vote_count,
                  poster_path: item.poster_path ?? "",
                  id: item.id,
                  media_type: item.media_type,
                }}
              />
            );
          })}
        </Box>
      </Container>
      <Box
        sx={{
          display: page * 8 <= medias.length ? "flex" : "none",
          flexDirection: "row",
          justifyContent: "center",
          pt: "15px",
        }}
      >
        <Button
          sx={{
            ...ConfigUI.style.styleButtonPrimary,
            color: "red",
            width: "20%",
          }}
          onClick={onNextPage}
        >
          Load More
        </Button>
      </Box>
    </Box>
  );
};

export default DetailPersonPage;
