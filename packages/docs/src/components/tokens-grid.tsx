import '../styles/tokens-grid.css'

interface TokensGridProps {
  tokens: Record<string, string>
  hasRemValue?: boolean
}

const TokensGrid = ({ tokens, hasRemValue }: TokensGridProps) => {
  return (
    <table className="tokens-grid">
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          {hasRemValue && <th>Pixels</th>}
        </tr>
      </thead>
      <tbody>
        {Object.entries(tokens).map(([key, value]) => (
          <tr key={value}>
            <td>{key}</td>
            <td>{value}</td>
            {hasRemValue && <td>{Number(value.replace('rem', '')) * 16}PX</td>}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TokensGrid
