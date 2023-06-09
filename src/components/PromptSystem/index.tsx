import { Textarea } from '@mantine/core'
import { ReactElement } from 'react'
import { useStyles } from './styles'

const PromptSystem = (props?: any): ReactElement => {
  const { data, setData } = props
  const { classes } = useStyles()

  const handleChange = (k: string, v: string) => {
    setData((prev: any) => ({
      ...prev,
      [k]: v,
    }))
  }

  return (
    <>
      <div className={classes.system}>
        <Textarea
          id="System"
          value={data.system}
          label="System"
          onChange={(e) => handleChange('system', e.target.value)}
          sx={{ width: '100%' }}
          classNames={{
            wrapper: classes.wrapper,
            root: classes.root,
            input: classes.input,
          }}
        />
      </div>
    </>
  )
}

export default PromptSystem
