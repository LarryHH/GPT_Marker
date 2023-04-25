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

  wrapper: {
    height: '100%',
  },

    root: {
    height: '100%',
  },

    input: {
    height: 'calc(100% - 31px)',
  },
}));
