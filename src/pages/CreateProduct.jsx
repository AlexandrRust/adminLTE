import CreateProductForm from "../components/createProductForm/CreateProductForm";
import { PageContentBox } from "../components/pageContentBox/PageContentBox.styled";
import { PageHeader } from "../components/pageHeader/PageHeader.styled";
import { PageTitle } from "../components/pageTitle/PageTtitle.styled";
import { Section } from "../components/section/Section.styled";
import theme from "../theme/theme";

const CreateProduct = () => {
  return (
    <PageContentBox>
      <Section>
        <PageHeader>
          <PageTitle>Product</PageTitle>
          <button style={theme.btn.btnGreen} form="productForm" type="submit">
            Створити
          </button>
        </PageHeader>
      </Section>
      <Section>
        <CreateProductForm />
      </Section>
    </PageContentBox>
  );
};

export default CreateProduct;
