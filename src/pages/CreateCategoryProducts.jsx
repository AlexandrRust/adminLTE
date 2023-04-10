import CreateCategoryProductsForm from "../components/createCategoryProducts/CreateCategoryProductsForm"
import { PageContentBox } from "../components/pageContentBox/PageContentBox.styled"
import { PageHeader } from "../components/pageHeader/PageHeader.styled"
import { PageTitle } from "../components/pageTitle/PageTtitle.styled"
import { Section } from "../components/section/Section.styled"
import theme from "../theme/theme"

const CreateCategoryProducts = () => {
    return <PageContentBox>
    <Section>
      <PageHeader>
        <PageTitle>CategoryProducts</PageTitle>
        <button style={theme.btn.btnGreen} form="categotyProductForm" type="submit">
          Створити
        </button>
      </PageHeader>
    </Section>
    <Section>
      <CreateCategoryProductsForm />
    </Section>
  </PageContentBox>
}


export default CreateCategoryProducts