import Pageinput from "../pageInput/PageInput";
import { PageNavBox } from "./common/PageNavBox.styled";
import { PageNavList } from "./common/PageNavList.styled";
import { PageNavListItem } from "./common/PageNavListItem.styled";

const PageNav = () => {
  return (
    <PageNavBox>
      <PageNavList>
        <PageNavListItem>Copy</PageNavListItem>
        <PageNavListItem>CSV</PageNavListItem>
        <PageNavListItem>Excel</PageNavListItem>
        <PageNavListItem>PDF</PageNavListItem>
        <PageNavListItem>Print</PageNavListItem>
        <PageNavListItem>Column visibility</PageNavListItem>
      </PageNavList>
      <Pageinput />
    </PageNavBox>
  );
};

export default PageNav;
