import { MantineProvider, rem } from '@mantine/core'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { useState } from 'react'
import '../styles/globals.css'

export default function App (props: AppProps) {
  const { Component, pageProps } = props
  const [title, setTitle] = useState<string>('GPT Exam Marker')

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
          components: {
            Textarea: {
              styles: {
                label: { fontSize: rem(20), fontWeight: 'bold' },
              },
            },
          },
        }}
      >
        <Component {...pageProps} title={title} setTitle={setTitle} />
      </MantineProvider>
    </>
  )
}
