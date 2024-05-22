

function CustomButton({children, className}) {
  return (
    <button className={`${className} btn`}>{children}</button>
  )
}

export default CustomButton