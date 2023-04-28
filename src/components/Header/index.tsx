import { Burger, Container, Group, Header } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { ReactElement } from 'react'
import ConfigModal from '../ConfigModal'
import { HEADER_HEIGHT, useStyles } from './styles'

const links = [
  {
    link: '/',
    label: 'About',
  },
  {
    link: '/',
    label: 'Pricing',
  },
  {
    link: '/',
    label: 'Contact',
  },
]

const HeaderAction = (props: any): ReactElement => {
  const { title, apiKey, setApiKey } = props
  const { classes } = useStyles()
  const [burgerOpened, { toggle }] = useDisclosure(false)

  const items = links.map((link) => {
    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    )
  })

  return (
    <Header height={HEADER_HEIGHT} sx={{ borderBottom: '1px solid #ddd' }}>
      <div className={classes.headerContainer}>
        <span className={classes.titleContainer}>{title}</span>
        <div className={classes.navContainer}>
          <Container className={classes.inner} fluid>
            <Group>
              <Burger
                opened={burgerOpened}
                onClick={toggle}
                className={classes.burger}
                size="sm"
              />
            </Group>
            <Group spacing={5} className={classes.links}>
              {items}
            </Group>
          </Container>
        </div>
        <div className={classes.modalContainer}>
          <ConfigModal apiKey={apiKey} setApiKey={setApiKey} />
        </div>
      </div>
    </Header>
  )
}

export default HeaderAction
