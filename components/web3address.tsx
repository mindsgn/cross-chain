import React from 'react'
import { useWeb3Context } from '../context'

export function Web3Address() {
  const { address } = useWeb3Context()
  console.log(address)

  return (
    <div>
        Address:{address}
    </div>
  )
}