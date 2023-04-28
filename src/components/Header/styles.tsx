import { createStyles, rem } from '@mantine/core'

export const HEADER_HEIGHT = rem(60)

export const useStyles = createStyles((theme) => ({
  inner: {
    height: HEADER_HEIGHT,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkLabel: {
    marginRight: rem(5),
  },

  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleContainer: {
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    left: '1rem',
    paddingLeft: '0',
    fontSize: '1.5rem',
  },

  navContainer: {
    paddingTop: '0',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '66.66%',
  },

  modalContainer: {
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    right: '1rem',
    paddingRight: '0',
  },
}))
