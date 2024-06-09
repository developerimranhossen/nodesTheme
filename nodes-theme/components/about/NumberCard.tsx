

function NumberCard({green, puplish, red, children}) {
  return (
    <div className={`nt-card-container ${green && 'bg-component-fill-secondary h-[200px]'} ${puplish && 'bg-component-fill-tertiary h-[200px]'} ${red && 'bg-component-fill-primary h-[292px]'}`}>
        {children}
    </div>
  )
}

export default NumberCard