import { useState } from "react";
import { ChainData } from "./types";

export function TxTracker({
  chains
}: {
  chains: ChainData[]
}) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [ statusResponse, setStatusResponse ] = useState<any | null>(null)
  const [ error, setError ] = useState<string | null>(null)
  const [ loading, setLoading ] = useState<boolean>(false)

  const handleSubmitTx = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    const formData = new FormData(e.currentTarget);
    const txHash = formData.get("txHash") as string;
    const fromChainId = formData.get("fromChainId") as string;
    const toChainId = formData.get("toChainId") as string;

    const baseUrl = "https://api.squidrouter.com/v1/status"

    const url = new URL(baseUrl);
    url.searchParams.append("transactionId", txHash);
    url.searchParams.append("fromChainId", fromChainId);
    url.searchParams.append("toChainId", toChainId);

    setLoading(true)
    fetch(url.toString()).then((res) => res.json()).then(setStatusResponse).catch((error) => {
      setError("Error fetching transaction status, check console for more details")

      console.error("Error fetching transaction status", error)
    }).finally(() => {
      setLoading(false)
    })
  }

  return <section>
    <form className="grid grid-cols-1 gap-4 mx-auto max-w-2xl" onSubmit={handleSubmitTx}>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-4">
          <div>From chain:</div>

          <ChainSelector chains={chains}
            name="fromChainId"
          />
        </div>

        <div className="flex flex-col gap-4">
          <div>To chain:</div>
          <ChainSelector chains={chains}
            name="toChainId"
          />
        </div>
      </div>

      <input type="text"
        name="txHash"
        placeholder="0xA7D7079b0F..."
        className="p-2"
      />

      <button
        disabled={loading}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center">
        <span>
          {loading ? <Loader /> : "Check status"}
        </span>
      </button>
    </form>


    <div className="max-w-6xl">

      {loading ? null : statusResponse ?

        <aside className="grid grid-cols-1 gap-3 mt-12 bg-black p-4">
          <p>
            Status: {statusResponse.squidTransactionStatus}
          </p>

          <p>

            Axelar link: <a
              href={statusResponse.axelarTransactionUrl}
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              {statusResponse.axelarTransactionUrl}
            </a>
          </p>

          <p>
            IBC hop details:
            <pre
              className="mt-4 bg-gray-900 p-4 border border-gray-900 rounded overflow-auto"
            >
              {JSON.stringify(statusResponse.routeStatus, null, 2)}
            </pre>
          </p>

          <details>
            <summary>

              Full response:
            </summary>
            <pre
              className="mt-4 bg-gray-900 p-4 border border-gray-900 rounded overflow-auto"
            >
              {JSON.stringify(statusResponse, null, 2)}
            </pre>
          </details>
        </aside>
        : error ? <p
          className="mt-4 text-red-400 bg-red-900 p-4 border border-red-900 rounded"
        >
          {error}
        </p> : null}
    </div>

  </section>
}

const Loader = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 38 38">
      <defs>
        <linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a">
          <stop stop-color="#fff" stop-opacity="0" offset="0%" />
          <stop stop-color="#fff" stop-opacity=".631" offset="63.146%" />
          <stop stop-color="#fff" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fill-rule="evenodd">
        <g transform="translate(1 1)">
          <path d="M36 18c0-9.94-8.06-18-18-18" id="Oval-2" stroke="url(#a)" stroke-width="2">
            <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite" />
          </path>
          <circle fill="#fff" cx="36" cy="18" r="1">
            <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite" />
          </circle>
        </g>
      </g>
    </svg>
  )
}

interface ChainSelectorProps extends React.HTMLProps<HTMLSelectElement> {
  chains: ChainData[]
}

const ChainSelector = ({ chains, ...props }: ChainSelectorProps) => {
  return (
    <select className="p-2"
      {...props}
    >
      {chains.map((chain) => (
        <option key={chain.chainId} value={chain.chainId}>
          {chain.name}
        </option>
      ))}
    </select>
  )
}