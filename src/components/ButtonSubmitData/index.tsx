import { Button } from '@mantine/core'
import { Configuration, OpenAIApi } from 'openai'
import React, { ReactElement, useState } from 'react'
import { useStyles } from './styles'

const ButtonSubmitData = (props?: any): ReactElement => {
  const { apiKey, data, setData } = props
  const { classes } = useStyles()
  const [isLoading, setIsLoading] = useState(false)

  const request = async () => {
    setIsLoading(true)
    setData((prev: any) => ({
      ...prev,
      response: [...prev.response, {
        id: Date.now(),
        content: data.user,
        usage: 0,
        created: Date.now(),
        type: 'user',
      }],
    }))
    localStorage.response = JSON.stringify([...data.response, {
      id: Date.now(),
      content: data.user,
      usage: 0,
      created: Date.now(),
      type: 'user',
    }])

    const configuration = new Configuration({
      apiKey: apiKey,
    })
    const openai = new OpenAIApi(configuration)
    try {
      const completion = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: data.system },
          { role: 'user', content: data.user },
        ],
      })

      setData((prev: any) => ({
        ...prev,
        response: [...prev.response, {
          id: completion.data.id,
          content: completion.data.choices[0]?.message?.content,
          usage: completion.data.usage,
          created: completion.data.created,
          type: 'bot',
        }],
      }))
      localStorage.response = JSON.stringify([...data.response, {
        id: completion.data.id,
        content: completion.data.choices[0]?.message?.content,
        usage: completion.data.usage,
        created: completion.data.created,
        type: 'bot',
      }])
    } catch (e) {
      console.warn(e)
    }
    setIsLoading(false)
  }

  return (
    <>
      <div className={classes.button}>
        <Button
          sx={{ marginTop: '0.66rem' }}
          type="submit"
          onClick={() => {
            request()
          }}
          classNames={{ root: classes.buttonRoot }}
          loading={isLoading}
        >
          Submit
        </Button>
      </div>
    </>
  )
}

export default ButtonSubmitData
