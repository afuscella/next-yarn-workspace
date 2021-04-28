import styled from 'styled-components'
import { Button } from '@afuscella/commons/components/Button';

const Title = styled.h1`
  color: red;
  font-size: 50px;
`

export default function Home() {
  return (
    <div>
      <Button />
      <Title>
        website using local lib components
      </Title>
    </div>
  )
}
