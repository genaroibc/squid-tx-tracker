import { useEffect, useState } from 'react'
import { TxTracker } from './TxTracker'
import { ChainData } from './types'
import { getChainsData } from './services/getChainsData'

function App() {
  const [ chains, setChains ] = useState<ChainData[]>([])

  useEffect(() => {
    const handleGetChains = async () => {
      const chains = await getChainsData()

      setChains(chains)
    }

    handleGetChains()
  }, [])

  return (
    <main className="max-w-5xl mx-auto my-32">
      <h1 className="text-center my-8">Squid TX Tracker</h1>

      {chains ? <TxTracker chains={chains} /> : <p>Loading chains...</p>}
    </main>
  )
}

export default App
