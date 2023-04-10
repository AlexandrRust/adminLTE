
import CreateMenusForm from "../components/createMenusForm/CreateMenusForm";
import { PageContentBox } from "../components/pageContentBox/PageContentBox.styled";
import { PageHeader } from "../components/pageHeader/PageHeader.styled";
import { PageTitle } from "../components/pageTitle/PageTtitle.styled";
import { Section } from "../components/section/Section.styled";
import theme from "../theme/theme";

const CreateMenus = () => {
    
    return (
      <PageContentBox>
      <Section>
        <PageHeader>
          <PageTitle>Menus</PageTitle>
          <button style={theme.btn.btnGreen} form="menusForm" type="submit">
            Створити
          </button>
        </PageHeader>
      </Section>
      <Section>
        <CreateMenusForm />
      </Section>
    </PageContentBox>
     
      )
}

export default CreateMenus