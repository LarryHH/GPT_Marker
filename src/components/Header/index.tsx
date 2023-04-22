import {
  Menu,
  Center,
  Header,
  Container,
  Group,
  Button,
  Burger,
  rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import styles from "../../styles/Home.module.css";
import { useStyles, HEADER_HEIGHT } from "./styles";

const links = [
  {
    link: "/",
    label: "bello",
  },
  {
    link: "/",
    label: "shid",
  },
  {
    link: "/",
    label: "more linkgs",
  },
  {
    link: "/",
    label: "let sgoooo",
  },
];

const HeaderAction = (props: any) => {
  const { title } = props;
  const { classes } = useStyles();
  const [opened, { toggle }] = useDisclosure(false);

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
      <div className={styles.headerContainer}>
        <span className={styles.titleContainer}>{title}</span>
        <div className={styles.navContainer}>
          <Container className={classes.inner} fluid>
            <Group>
              <Burger
                opened={opened}
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
      </div>
    </Header>
  );
};

export default HeaderAction;
