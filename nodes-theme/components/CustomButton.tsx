

function CustomButton({children, className}) {
  return (
    <button className={`${className} nt-btn`}>{children}</button>
  )
}

export default CustomButton