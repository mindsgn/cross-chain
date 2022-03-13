import type { NextPage } from 'next'
import { Web3Address, Web3Button } from '../components'

const Home: NextPage = () => {
  console.log(process.env.NEXT_PUBLIC_INFURA_ID)
  return (
    <div>
      <>
        <Web3Button />
      </>
      <>
        <Web3Address />
      </>
    </div>
  )
}

export default Home
