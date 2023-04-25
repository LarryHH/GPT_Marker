import React from 'react'
import { Text, Title } from '@mantine/core'
import { useStyles } from "./styles";
import { useState, useEffect } from 'react';



const Response = (props: any) => {

  const { data, setData } = props
  const { classes } = useStyles()

  const textChunks = data.response.map((item: any) => {
    return (
      <p className={classes.responseItem} key={item.id}>
        {item.content}
      </p>
    );
  });


  return (
    <div className={classes.responseContainer}>
      <span className={classes.responseLabel}>
        Reponses
      </span>
      <div className={classes.responseArea}>
        {textChunks}
      </div>
    </div>
  )
}

export default Response