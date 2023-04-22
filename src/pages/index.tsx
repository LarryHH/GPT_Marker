import React, { useState } from "react";
import axios from "axios";
import styles from "../styles/Home.module.css";
import { Textarea, Button, Navbar } from "@mantine/core";
import type Prompt from "./index";
import Header from "../components/Header";
import Response from "@/components/Response";

const Home: React.FC = (props: any) => {
  const { title, setTitle } = props;

  const [apiKey, setApiKey] = useState<string>("");
  const [prompt, setPrompt] = useState<Prompt>({
    system: "",
    user: "",
  });
  const [response, setResponse] = useState<string>("");

  const handleChange = (k: string, v: string) => {
    setPrompt((prev: any) => ({
      ...prev,
      [k]: v,
    }));
  };

  const handleClick = async () => {
    setTitle(prompt.user)
    // try {
    //   const result = await axios.post("/api/generate-response", {
    //     apiKey,
    //     systemPrompt,
    //     userPrompt,
    //   });
    //   setResponse(result.data.generated_text);
    // } catch (error) {
    //   console.error(`Error generating response: ${error}`);
    // }
  };

  return (
    <>
      <Header title={title} />
      <div className={styles.container}>
        <div className={styles.systemPrompt}>
          <Textarea
            id="system-prompt"
            value={prompt.system}
            label="System"
            onChange={(e) => handleChange("system", e.target.value)}
            sx={{ width: "100%" }}
          />
        </div>
        <div className={styles.responseContainer}>
          <div className={styles.userPrompt}>
            <Textarea
              id="user-prompt"
              value={prompt.user}
              label="User"
              onChange={(e) => handleChange("user", e.target.value)}
              sx={{ width: "100%" }}
            />
            <Button
              sx={{ marginTop: "0.66rem" }}
              type="submit"
              onClick={() => { handleClick() }}
            >
              Submit
            </Button>
          </div>
          <div className={styles.response}>
            <Textarea
              id="response"
              value={response}
              label="Response"
              onChange={(e) => {
                setResponse(e.target.value);
              }}
              sx={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
