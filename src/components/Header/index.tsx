import {
  Menu,
  Center,
  Header,
  Container,
  Group,
  Button,
  Burger,
  rem,
  Modal,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useStyles, HEADER_HEIGHT } from "./styles";
import ConfigModal from "../ConfigModal";

const links = [
  {
    link: "/",
    label: "About",
  },
  {
    link: "/",
    label: "Pricing",
  },
  {
    link: "/",
    label: "Contact",
  },
];

const HeaderAction = (props: any) => {
  const { title } = props;
  const { classes } = useStyles();
  const [burgerOpened, { toggle }] = useDisclosure(false);

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
    );
  });


  return (
    <Header height={HEADER_HEIGHT} sx={{ borderBottom: "1px solid #ddd" }}>
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
          <ConfigModal/>
        </div>
      </div>
    </Header>
  );
};

export default HeaderAction;
