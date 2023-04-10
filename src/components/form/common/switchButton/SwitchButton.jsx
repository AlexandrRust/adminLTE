import { AfterSwitchSlider } from "./common/AfterSwitchSlider.styled";
import { BeforeSwitchSlider } from "./common/BeforeSwitchSlider.styled";
import { SwitchButtonBox } from "./common/SwitchButtonBox.styled";
import { SwitchButtonContent } from "./common/SwitchButtonContent.styled";
import { SwitchSlider } from "./common/SwitchSlider.styled";
import { SwitchSliderText } from "./common/SwitchSliderText.styled";

const SwitchButton = ({ id, name, type, onChange, value }) => {
  return (
    <SwitchButtonBox>
      <input
        style={{
          opacity: "0",
          width: "100%",
          position: "absolute",
          zIndex: "1",
        }}
        id={id}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
      />

      <SwitchButtonContent>
        {value && (
          <BeforeSwitchSlider>
            <SwitchSliderText>ON</SwitchSliderText>
          </BeforeSwitchSlider>
        )}
        <SwitchSlider />
        {!value && (
          <AfterSwitchSlider>
            <SwitchSliderText>OFF</SwitchSliderText>
          </AfterSwitchSlider>
        )}
      </SwitchButtonContent>
    </SwitchButtonBox>
  );
};

export default SwitchButton;
