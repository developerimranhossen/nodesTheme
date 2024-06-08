import Image from "next/image";
import ContactImg from "../public/contact.svg";
import Input from "./auth/Input";
import TextArea from "./auth/TextArea";
import CustomButton from "./CustomButton";

function ContactCard() {
  return (
    <div className="nt-contact-container">
      <div className="nt-contact-wrap">
        <Image src={ContactImg} width={564} height={759} alt="" />
        <div className="nt-touch-container">
          <h1>Get in touch</h1>
          <p>Our friendly team would love to hear from you.</p>
          <div className="nt-input-wrap">
            <div className="nt-name-wrap">
              <div>
                <Input
                  data={{
                    type: "text",
                    label: "First name",
                    placeholder: "Your first name",
                  }}
                />
              </div>
              <div>
                <Input
                  data={{
                    type: "text",
                    label: "Last name",
                    placeholder: "Your last name",
                  }}
                />
              </div>
            </div>
            <div>
              <Input
                data={{
                  type: "text",
                  label: "Enter",
                  placeholder: "Enter email",
                }}
              />
            </div>
            <div>
              <div className="nt-label-wrap">
                <label htmlFor="phone">Phone</label>
              </div>
              <div className="nt-select-wrap">
                <select>
                  <option>+88</option>
                  <option>+60</option>
                  <option>+96</option>
                </select>
                <input id="phone" type="number" placeholder="Enter phone" />
              </div>
            </div>
            <TextArea
              data={{
                label: "Message",
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
          <div className="nt-send-wrap">
            <CustomButton className="bg-component-fill-primary w-[288px] text-component-text-light-fixed">
              Send
            </CustomButton>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
