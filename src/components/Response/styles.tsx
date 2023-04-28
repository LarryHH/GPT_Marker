import { createStyles, rem } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
    responseContainer: {
        padding: '1rem',
        paddingTop: '0.5rem',
        borderRight: '1px solid #ddd',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        overflow: 'auto',
    },

    responseLabel: {
        display: 'inline-block',
        color: '#212529',
        wordBreak: 'break-word',
        cursor: 'default',
        fontSize: '1.25rem',
        fontWeight: 'bold',
    },

    responseArea: {
        overflow: 'auto',
        height: '100%',
    },

    responseItem: {
        borderRadius: '6px',
        margin: '0.5rem 0',
        padding: '0.6rem 0.6rem',
        '&:nth-of-type(2n)': {
            background: '#f7f7f7',
        },
    },

    comment: {
        padding: `${theme.spacing.lg} ${theme.spacing.xl}`,
        marginTop: theme.spacing.sm,
    },

    body: {
        paddingLeft: rem(54),
        paddingTop: theme.spacing.sm,
        fontSize: theme.fontSizes.sm,
    },

    content: {
        '& > p:last-child': {
            marginBottom: 0,
        },
    },
}))
