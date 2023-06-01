const ConfigUI = {
  style: {
    styleButton: {
      backgroundColor: "red",
      color: "white",
      "&:hover ": {
        backgroundColor: "#b30000 !important",
      },
    },
    styleButtonPrimary: {
      color: "red",
      "&:hover ": {
        backgroundColor: "#400f0b !important",
      },
    },
    textLine: (lineLimit: number) => ({
      overflow: "hidden",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: lineLimit,
    }),
  },
};

export default ConfigUI;
