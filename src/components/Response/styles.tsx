import { createStyles } from '@mantine/core'

export const useStyles = createStyles(() => ({
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
        borderRadius: '0.25rem',
        border: '0.0625rem solid #ced4da',
        paddingLeft: 'calc(2.25rem / 3)',
        paddingRight: 'calc(2.25rem / 3)',
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
}))
