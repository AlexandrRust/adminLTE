import { PageInputStyle } from "./common/PageInputStyle.styled";
import { PageInputLabel } from "./common/PageInputLabel.styled";

const Pageinput = () => {
  return (
    <PageInputLabel>
      Search:
      <PageInputStyle type={"search"} />
    </PageInputLabel>
  );
};

export default Pageinput;
