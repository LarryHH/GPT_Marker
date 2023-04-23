import {
  Box,
  Button,
  Checkbox,
  Group,
  Modal,
  TextInput,
  Textarea,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { useStyles } from "./styles";
import React, { useState } from "react";

function Prompt(props: any) {
  const { name, width, showButton = false } = props;
  const { classes } = useStyles();
  console.log(name)
  const classList: any = {
    system: classes.system,
    user: classes.user,
  };
  const [prompt, setPrompt] = useState<any>({
    system: "",
    user: "",
  });
  const handleChange = (k: string, v: string) => {
    setPrompt((prev: any) => ({
      ...prev,
      [k]: v,
    }));
  };

  return (
    <>
      <div className={classList[name]}>
        <Textarea
          id={name}
          value={prompt.name}
          label={name.charAt(0).toUpperCase() + name.slice(1)}
          onChange={(e) => handleChange(name, e.target.value)}
          sx={{ width: `${width}%` }}
        />
        {showButton && 
          <Button
            sx={{ marginTop: "0.66rem" }}
            type="submit"
            // onClick={() => { handleClick() }}
          >
            Submit
          </Button>
        }
      </div>
    </>
  );
}

export default Prompt;
