import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({

    responseContainer: {
        padding: "1rem",
        paddingTop: "0",
        borderRight: "1px solid #ddd",
        display: "flex",
        flexDirection: "column",
        height: "40%",
        width: "100%",
    },

    responseLabel: {
        display: "inline-block",
        color: "#212529",
        wordBbreak: "break-word",
        cursor: "default",
        fontSize: "1.25rem",
        fontWeight: "bold",
    },

    responseArea: {
        borderRadius: "0.25rem",
        border: "0.0625rem solid #ced4da",
        paddingLeft: "calc(2.25rem / 3)",
        paddingRight: "calc(2.25rem / 3)",
        overflow: "auto",
        height: "calc(100% - 31px - 1rem)"
    },

    responseItem: {
        borderRadius: '6px',
        margin: '0.5rem 0',
        padding: '0.6rem 0.6rem',
        '&:nth-of-type(2n)': {
            background: '#f7f7f7'
        }
    }

}));
