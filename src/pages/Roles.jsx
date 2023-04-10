import { Link } from "react-router-dom";
import { PageContentBox } from "../components/pageContentBox/PageContentBox.styled";
import { PageHeader } from "../components/pageHeader/PageHeader.styled";
import PageNav from "../components/pageNav/PageNav";
import PageTable from "../components/pageTable/PageTable";
import { PageTitle } from "../components/pageTitle/PageTtitle.styled";
import { Section } from "../components/section/Section.styled";
import theme from "../theme/theme";

const Roles = () => {
  return (
    <PageContentBox>
      <Section>
        <PageHeader>
          <PageTitle>Title Roles Index</PageTitle>
          <Link style={theme.btn.btnGreen} to="/menus/create">
            Створити
          </Link>
        </PageHeader>
      </Section>
      <Section>
        <PageNav />
        <PageTable />
      </Section>
    </PageContentBox>
  );
};

export default Roles;
