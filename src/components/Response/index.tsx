import { Box, Button, Group, Modal, Paper, Text, TypographyStylesProvider } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import React, { ReactElement } from 'react'
import Moment from 'react-moment'
import { AlertTriangle, Robot, Trash, UserCircle } from 'tabler-icons-react'
import { useStyles } from './styles'

const Response = (props: any): ReactElement => {
  const { data, setData } = props
  const { classes } = useStyles()
  const [opened, { open, close }] = useDisclosure(false)

  const textChunks = data.response.map((item: any) => {
    return (
      <Paper withBorder radius="md" className={classes.comment} key={item.id}>
        {item.type === 'bot' &&
          <Group>
            <Robot width={38} />
            <div>
              <Text fz="sm">ChatGPT</Text>
              <Text fz="xs" c="dimmed">
                <Moment fromNow>
                  {item.created}
                </Moment>
              </Text>
            </div>
          </Group>
        }
        {item.type === 'user' &&
          <Group>
            <UserCircle width={38} />
            <div>
              <Text fz="sm">User</Text>
              <Text fz="xs" c="dimmed">
                <Moment fromNow>
                  {item.created}
                </Moment>
              </Text>
            </div>
          </Group>
        }
        <TypographyStylesProvider className={classes.body}>
          <div className={classes.content}>
            {item.content}
          </div>
        </TypographyStylesProvider>
      </Paper>
    )
  }).filter(Boolean).reverse()

  const handleClear = () => {
    setData((prev: any) => ({
      ...prev,
      response: [],
    }))
    localStorage.response = JSON.stringify([])
    close()
  }

  return (
    <>
      <div className={classes.responseContainer}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span className={classes.responseLabel}>
            Reponses
          </span>
          <Button leftIcon={<Trash size={16} />} variant="light" color="red" onClick={open}>
            Clear
          </Button>
        </div>
        <div className={classes.responseArea}>
          {textChunks}
        </div>
      </div>
      <Modal opened={opened} onClose={close} title="Warning" centered>
        <Box maw={300} mx="auto">
          <span>This action is not reversible. Are you sure?</span>
          <Button fullWidth mt="md" onClick={close} >
            Cancel
          </Button>
          <Button variant="light" leftIcon={<AlertTriangle style={{ transform: 'translatey(1px)' }} />} fullWidth mt="xs" onClick={() => handleClear()} color="red">
            Clear chat history
          </Button>
        </Box>
      </Modal>
    </>
  )
}

export default Response
