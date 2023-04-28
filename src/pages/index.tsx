import ButtonSubmitData from '@/components/ButtonSubmitData'
import PromptSystem from '@/components/PromptSystem'
import PromptUser from '@/components/PromptUser'
import Response from '@/components/Response'
import { ReactElement, useEffect, useState } from 'react'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

const Home = (props: any): ReactElement => {
  const { title } = props
  const [apiKey, setApiKey] = useState<string>('')
  const [data, setData] = useState<any>({
    user: '',
    system: '',
    response: [],
  })

  useEffect(() => {
    setApiKey(localStorage.api)
    setData((prev: any) => ({
      ...prev,
      response: localStorage.response ? JSON.parse(localStorage.response) : [],
    }))
  }, [])

  return (
    <>
      <Header title={title} apiKey={apiKey} setApiKey={setApiKey} />
      <div className={styles.container}>
        <PromptSystem data={data} setData={setData} />
        <div className={styles.rightContainer}>
          <PromptUser data={data} setData={setData} />
          <ButtonSubmitData apiKey={apiKey} data={data} setData={setData} />
          <Response data={data} setData={setData} />
        </div>
      </div>
    </>
  )
}

export default Home
