import CustomButton from "./CustomButton";

function Task({heading}) {
  return (
    <div className="w-[487px] h-[270px] flex flex-col gap-6 items-start shrink-0">
      <h2 className="text-typography-heading text-lg_2x font-medium">{heading}</h2>
      <p className="text-typography-paragraph-soft">
        Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin
        faucibus nibh et sagittis a. Lacinia purus ac amet pellentesque aliquam
        enim.
      </p>
      <CustomButton className="bg-component-fill-primary text-component-text-light-fixed">Start build today</CustomButton>
    </div>
  );
}

export default Task;
