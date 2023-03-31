import PageButton from "../components/pageButton/PageButton";
import { PageContentBox } from "../components/pageContentBox/PageContentBox.styled";
import { PageHeader } from "../components/pageHeader/PageHeader.styled";
import PageNav from "../components/pageNav/PageNav";
import PageTable from "../components/pageTable/PageTable";
import { PageTitle } from "../components/pageTitle/PageTtitle.styled";
import { Section } from "../components/section/Section.styled";

const Products = () => {
  return (
    <PageContentBox>
      <Section>
        <PageHeader>
          <PageTitle>Title Permissions Index</PageTitle>
          <PageButton
            color={"#fff"}
            background={"#28a745"}
            title={"Створити"}
          />
        </PageHeader>
      </Section>
      <Section>
        <PageNav />
        <PageTable />
      </Section>
    </PageContentBox>
  );
};

export default Products;