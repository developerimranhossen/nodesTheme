function Input({ data }) {
  return (
    <div
      className={`${
        data.type === "checkbox"
          ? "flex flex-row-reverse justify-end items-center gap-3"
          : "flex flex-col gap-3"
      } `}
    >
      <label
        className={`text-component-text-dark ${
          data.type === "checkbox" ? "self-center" : "self-start"
        } text-xs font-medium `}
        htmlFor={data.label}
      >
        {data.label}
      </label>
      <input
        className={`text-component-text-dark ${
          data.type === "checkbox"
            ? "size-6"
            : "h-[48px] p-1 border border-component-stroke-dark-soft placeholder:text- indent-2.5 rounded-lg"
        } text-xs font-medium `}
        id={data.label}
        type={data.type}
        placeholder={data.placeholder}
      />
    </div>
  );
}

export default Input;
