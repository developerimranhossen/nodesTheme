import React from "react";

function UseCasesCard({ children, bg }) {
  console.log(bg);
  return (
    <div
      style={{ backgroundColor: `var(--${bg})` }}
      className="flex py-1 px-2 items-center rounded-lg "
    >
      {children}
    </div>
  );
}

export default UseCasesCard;
