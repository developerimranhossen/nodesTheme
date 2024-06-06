import React from "react";
import Input from "../auth/Input";
import TextArea from "../auth/TextArea";
import CustomButton from "../CustomButton";

function SendMessage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-[18px]">
      <Input
        data={{ type: "text", label: "Name", placeholder: "Enter your name" }}
      />
      <Input
        data={{
          type: "password",
          label: "Email",
          placeholder: "Enter your Email Address",
        }}
      />

      <TextArea
        data={{
          label: "Write your Message",
          placeholder: "Write message here...",
        }}
      />

      <Input
        data={{
          type: "checkbox",
          label: "You agree to our friendly privacy policy.",
        }}
      />
      </div>

      <CustomButton className="bg-component-fill-primary w-full text-component-text-light-fixed">
        Send
      </CustomButton>
    </div>
  );
}

export default SendMessage;
