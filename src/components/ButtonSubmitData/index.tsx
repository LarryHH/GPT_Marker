import { Button } from "@mantine/core";
import { useStyles } from "./styles";
import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";

function ButtonSubmitData(props?: any) {
  const { apiKey, data, setData } = props;
  const { classes } = useStyles();

  const [isLoading, setIsLoading] = useState(false)

  async function request() {
    setIsLoading(true)

    const configuration = new Configuration({
      apiKey: apiKey,
    });

    const openai = new OpenAIApi(configuration);

    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: data.system },
        { role: "user", content: data.user },
      ],
    });

    setData((prev: any) => ({
      ...prev,
      reponse: prev.response.push({
        id: completion.data.id,
        content: completion.data.choices[0]?.message?.content,
        usage: completion.data.usage,
        created: completion.data.created,
      }),
    }));
    
    setIsLoading(false)
  }

  return (
    <div className={classes.button}>
      <Button
        sx={{ marginTop: "0.66rem" }}
        type="submit"
        onClick={() => {
          request();
        }}
        classNames={{ root: classes.buttonRoot }}
        loading={isLoading}
      >
        Submit
      </Button>
    </div>
  );
}

export default ButtonSubmitData;
