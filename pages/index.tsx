import React from 'react';
import type { NextPage } from 'next'
import { Web3Address, Web3Button } from '../components'
import { useWeb3Context } from '../context'
import { Hyphen, SIGNATURE_TYPES } from "@biconomy/hyphen";
import { Web3ProviderState, web3InitialState } from '../reducers'
import { Web3Provider } from '@ethersproject/providers';

const Home: NextPage = () => {
  
  React.useEffect(() => {
    
  },[]);

  return (
    <div  className="flex-col justify-items-center flex-wrap">
      <div>
        <>
          <Web3Button />
        </>
        <>
          <Web3Address />
        </>
      </div>
      <div>
        <button
          className=' border-2'
          type='button'>
            connect hyphen
        </button>
        <button
          className='border-2'
          type='button'>
            approve tx
        </button>
        <button
          className='m border-2'
          type='button'>
            swap
        </button>
      </div>
    </div>
  )
}

export default Home
