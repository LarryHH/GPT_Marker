import { Box, Button, Checkbox, Group, Modal, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { Settings } from 'tabler-icons-react';


function ConfigModal(props: any) {
  const [modalOpened, { open, close }] = useDisclosure(false);
  const form = useForm({
    initialValues: {
      key: "",
    },
    validate: {
      key: (value) => (/^[a-zA-Z0-9]*$/.test(value) ? null : "Invalid API Key"),
    },
  });
  return (
    <>
      <Modal
        opened={modalOpened}
        onClose={close}
        title="ChatGPT 3.5 API Configuration"
      >
        <Box maw={300} mx="auto">
          <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <TextInput
              withAsterisk
              label="API Key"
              placeholder="Awdn9a2nasdmaWAEsadha"
              {...form.getInputProps("key")}
            />
            <Group position="right" mt="md">
              <Button type="submit">Submit</Button>
            </Group>
          </form>
        </Box>
      </Modal>
      <Group position="center">
        <Button leftIcon={<Settings size="1rem"/>} onClick={open}>Settings</Button>
      </Group>
    </>
  );
}

export default ConfigModal;
