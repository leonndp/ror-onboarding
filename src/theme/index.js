import palette from "./palette"

export default {
  overrides: {
    MuiFilledInput: {
      root: {
        backgroundColor: "white",
      },
    },
    MuiButton: {
      root: {
        textTransform: "none",
        fontWeight: 700,
      },
    },
  },
  typography: {
    fontFamily: "Sansation",
  },
  palette,
}
