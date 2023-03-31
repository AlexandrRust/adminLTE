import { PageButtonStyle } from "./PageButtonStyle.style";

const PageButton = ({ color, background, title }) => {
  return (
    <PageButtonStyle btnColor={color} background={background}>
      {title}
    </PageButtonStyle>
  );
};

export default PageButton;
