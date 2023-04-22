import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { rem } from "@mantine/core";
import { useState } from "react";
import '../styles/globals.css'

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const [title, setTitle] = useState<string>("GPT Exam Marker");

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
          components: {
            Textarea: {
              styles: {
                root: { height: "100%" },
                wrapper: { height: "100%" },
                input: { height: "calc(100% - 31px - 1rem)" },
                label: { fontSize: rem(20), fontWeight: "bold" },
                //todo: calc height relative to button, button margins, response size
              },
            },
          },
        }}
      >
        <Component {...pageProps} title={title} setTitle={setTitle} />
      </MantineProvider>
    </>
  );
}
