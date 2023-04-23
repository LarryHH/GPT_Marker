import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  system: {
    padding: "1rem",
    borderRight: "1px solid #ddd",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "33.333%",
  },

  user: {
    padding: " 1rem",
    paddingTop: "0",
    display: "flex",
    flexDirection: "column",
    height: "80%",
    width: "100%",
    justifyContent: "space-between",
  },
}));
