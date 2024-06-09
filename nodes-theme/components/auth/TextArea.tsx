import React from "react";

function TextArea({ data }) {
  return (
    <div>
      <div className="flex flex-col gap-3">
        <label
          className="text-component-text-dark self-start text-xs font-medium "
          htmlFor={data.label}
        >
          {data.label}
        </label>
        <textarea
          className="h-[99px] p-3.5 placeholder:text- indent-2.5 border border-component-stroke-dark-soft rounded-lg"
          id={data.label}
          placeholder={data.placeholder}
        />
      </div>
    </div>
  );
}

export default TextArea;
