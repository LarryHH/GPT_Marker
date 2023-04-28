import React from 'react'
import { useStyles } from './styles'

const Response = (props: any) => {
  const { data } = props
  const { classes } = useStyles()

  const textChunks = data.response.map((item: any) => {
    return (
      <p className={classes.responseItem} key={item.id}>
        {item.content}
      </p>
    )
  })

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
