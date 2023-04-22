import React from 'react'
import { Text, Title } from '@mantine/core'

const Response = ({ response }: { response: any}) => {
  const data = [
  {
  title: 'abc',
  text: 'shid'
},
  {
  title: 'asfdasfd',
  text: 'bxczbxxzbc'
},
  {
  title: 'a23t332',
  text: 'xcvncxvnvcn'
},
]


const content = data.map((res) => {
  return (
  <div key={res.title} style={{marginTop: '0.5rem'}}>
    <Text weight={500}>
      {res.title}
    </Text>
    <Text size="sm" color="dimmed">
      {res.text}
    </Text>
  </div>
  )
})

  return (
    <>   
    <Title order={2} sx={{marginBottom: '1rem'}}>System</Title>
    <div>{content}</div>
    </>
  )
}

export default Response