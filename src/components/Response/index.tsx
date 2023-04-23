import React from 'react'
import { Text, Title } from '@mantine/core'
import { useStyles } from "./styles";

interface ResponseProps {
  response: any
}

const result = [
  {
    id: "/1",
    text: "About",
  },
  {
    id: "2/",
    text: "Pricing",
  },
  {
    id: "/3",
    text: "Pricing",
  },
  {
    id: "/1",
    text: "About",
  },
  {
    id: "2/",
    text: "Pricing",
  },
  {
    id: "/3",
    text: "Pricing",
  },
  {
    id: "/1",
    text: "About",
  },
  {
    id: "2/",
    text: "Pricing",
  },
  {
    id: "/3",
    text: "Pricing",
  },
  {
    id: "/1",
    text: "About",
  },
  {
    id: "2/",
    text: "Pricing",
  },
  {
    id: "/3",
    text: "Pricing",
  },
];

const Response = ({ response }: ResponseProps) => {

  const { classes } = useStyles()

  const textChunks = result.map((item: any) => {
    return (
      <p className={classes.responseItem} key={item.id}>
        {item.text}
      </p>
    );
  });

  return (
    <>
    <div className={classes.responseContainer}>
      <span className={classes.responseLabel}>
        Reponses
      </span>
      <div className={classes.responseArea}>
        {textChunks}
      </div>
    </div>
  </>
  )
}

export default Response