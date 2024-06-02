interface props {
  className?: string,
  children: any
}

function CustomButton({children, className}:props) {
  return (
    <button className={`${className} nt-btn`}>{children}</button>
  )
}

export default CustomButton