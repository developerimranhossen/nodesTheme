
function PricingCard() {
  return (
    <div className="flex flex-col items-center gap-10 w-[384px] py-10 px-8 border-[1.5px] border-background-stroke-surface rounded-2xl bg-background-fill-surface">
        <div className="flex justify-between items-center self-stretch">
            <h2 className="text-container-text-secondary text-[24px] font-semibold">Standard</h2>
            <p className="text-typography-sub-heading text-lg font-medium">$ 29.99 USD <span className="text-typography-sub-heading-soft text-center text-xs ml-1">/mon</span> </p>
        </div>
        <hr className="w-[320px] h-[1px] border-0 bg-container-stroke-primary-soft" />
        <p className="text-typography-paragraph-soft text-xs leading-[22.4px]">Unlock the full potential of your business with our Standard Plan —a feature-packed solution designed to elevate your workflow & collaboration.</p>
        <div className="flex flex-col items-start gap-[14px] self-stretch">
            <div className="flex items-center gap-[10px] self-stretch">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
  <g clip-path="url(#clip0_22003_146223)">
    <path d="M12.1427 6.56533C12.4007 6.828 12.3967 7.25 12.1333 7.508L9.18267 10.4047C8.66067 10.9167 7.98867 11.172 7.316 11.172C6.65067 11.172 5.98533 10.9213 5.46533 10.4193L4.19933 9.17467C3.93667 8.91667 3.93333 8.49467 4.19133 8.232C4.44867 7.96867 4.872 7.96533 5.134 8.224L6.396 9.46467C6.91333 9.96467 7.73 9.962 8.25 9.45267L11.2 6.55667C11.462 6.298 11.8827 6.30267 12.1427 6.56533ZM16 8.5C16 12.9113 12.4113 16.5 8 16.5C3.58867 16.5 0 12.9113 0 8.5C0 4.08867 3.58867 0.5 8 0.5C12.4113 0.5 16 4.08867 16 8.5ZM14.6667 8.5C14.6667 4.824 11.676 1.83333 8 1.83333C4.324 1.83333 1.33333 4.824 1.33333 8.5C1.33333 12.176 4.324 15.1667 8 15.1667C11.676 15.1667 14.6667 12.176 14.6667 8.5Z" fill="#525D73"/>
  </g>
  <defs>
    <clipPath id="clip0_22003_146223">
      <rect width="16" height="16" fill="white" transform="translate(0 0.5)"/>
    </clipPath>
  </defs>
</svg>
<p className="text-container-text-gray leading-[20.8px]">20GB Storage capacity</p>
<hr className="w-[320px] h-[1px] border-[0] bg-container-d" />
            </div>
        </div>
    </div>
  )
}

export default PricingCard