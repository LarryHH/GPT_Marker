import { Alert, Box, Button, Group, Modal, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useDisclosure } from '@mantine/hooks'
import { ReactElement, useEffect, useState } from 'react'
import { CircleCheck, Settings } from 'tabler-icons-react'

const ConfigModal = (props: any): ReactElement => {
  const { apiKey, setApiKey } = props
  const [modalOpened, { open, close }] = useDisclosure(false)
  const [isAPIKeyValid, setIsAPIKeyValid] = useState(false)
  const form = useForm({
    initialValues: {
      key: '',
    },
    validate: {
      key: (value) =>
        /^[a-zA-Z0-9\-]*$/.test(value) ? null : 'Invalid API Key',
    },
  })

  useEffect(() => {
    form.setFieldValue('key', apiKey)
  }, [apiKey])

  const handleClick = () => {
    setIsAPIKeyValid(/^[a-zA-Z0-9\-]*$/.test(form.values.key) ? true : false)
    setApiKey(form.values.key)
    if (typeof window !== 'undefined') localStorage.api = form.values.key
  }

  return (
    <>
      <Modal
        opened={modalOpened}
        onClose={close}
        title="ChatGPT 3.5 API Configuration"
        centered
      >
        <Box maw={300} mx="auto">
          <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <TextInput
              withAsterisk
              label="API Key"
              placeholder="Awdn9a2nasdmaWAEsadha"
              {...form.getInputProps('key')}
              onKeyDown={() => {
                setIsAPIKeyValid(false)
              }}
            />
            {isAPIKeyValid && (
              <>
                <Alert
                  icon={<CircleCheck size="2rem" />}
                  title="Great!"
                  color="teal"
                  mt="md"
                >
                  Your API key appears to be valid. Please verify that it&apos;s
                  correct by using the app.
                </Alert>
                <Button fullWidth mt="md" onClick={close} color="teal">
                  Exit
                </Button>
              </>
            )}
            {!isAPIKeyValid && (
              <Button
                type="submit"
                fullWidth
                mt="md"
                onClick={() => {
                  handleClick()
                }}
              >
                Save
              </Button>
            )}
          </form>
        </Box>
      </Modal>
      <Group position="center">
        <Button leftIcon={<Settings size="1rem" />} onClick={open}>
          Settings
        </Button>
      </Group>
    </>
  )
}

export default ConfigModal
