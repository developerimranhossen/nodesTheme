

function NumberCard({green, puplish, red, children}) {
  return (
    <div className={`nt-card-container ${green && 'bg-component-fill-secondary'} ${puplish && 'bg-component-fill-tertiary'} ${red && 'bg-component-fill-primary'}`}>
        {children}
    </div>
  )
}

export default NumberCard