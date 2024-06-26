import CustomButton from "./CustomButton";
import Input from "./auth/Input";
import TextArea from "./auth/TextArea";

function RegistrationCard() {
  return (
    <div className="nt-registration-container">
      <div className="nt-registration-wrap">
        <h1>Registration</h1>
        <p>Our friendly team would love to hear from you.</p>
        <div className="nt-button-wrap">
          <CustomButton className="nt-prents-button">Parents</CustomButton>
          <CustomButton className="nt-students-button">Students</CustomButton>
        </div>
        <div className="nt-form-container">
          <form>
            <div className="nt-left-wrap">
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
                    label: "Email",
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
            </div>
            <div className="nt-right-wrap">
              <div>
                <Input
                  data={{
                    type: "text",
                    label: "Class",
                    placeholder: "Select your class",
                  }}
                />
              </div>
              <TextArea
                data={{
                  label: "Address",
                  placeholder: "Write address here...",
                }}
              />
              <Input
                data={{
                  type: "checkbox",
                  label: "You agree to our friendly privacy policy.",
                }}
              />
            </div>
          </form>
        </div>
        <CustomButton className="nt-submit-button">Send</CustomButton>
      </div>
    </div>
  );
}

export default RegistrationCard;
