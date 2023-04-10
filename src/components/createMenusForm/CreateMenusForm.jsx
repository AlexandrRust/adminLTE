import { Formik } from "formik";
import { useState } from "react";
import { FormBox } from "../form/common/FormBox.styled";
import { FormList } from "../form/common/FormList.styled";
import { FormListItem } from "../form/common/FormListItem.styled";
import { InputStyle } from "../form/common/InputStyle.styled";
import { LabelStyle } from "../form/common/LabelStyle.styled";
import { FormStyle } from "../form/FormStyle.styled";

const CreateMenusForm = () => {
    const [selectedTab, setSelectedTab] = useState("Контент");
    return   <>
      <FormList>
        <FormListItem
          isActive={selectedTab === "Контент"}
          onClick={() => setSelectedTab("Контент")}
          style={
            selectedTab === "Контент"
              ? { color: "black", backgroundColor: "#fff" }
              : { color: "#fff", backgroundColor: "inherit" }
          }
        >
          Контент
        </FormListItem>
        <FormListItem
          isActive={selectedTab === "Зображення"}
          onClick={() => setSelectedTab("Зображення")}
          style={
            selectedTab === "Зображення"
              ? { color: "black", backgroundColor: "#fff" }
              : { color: "#fff", backgroundColor: "inherit" }
          }
        >
          Зображення
        </FormListItem>
        <FormListItem
          isActive={selectedTab === "СЕО"}
          onClick={() => setSelectedTab("СЕО")}
          style={
            selectedTab === "СЕО"
              ? { color: "black", backgroundColor: "#fff" }
              : { color: "#fff", backgroundColor: "inherit" }
          }
        >
          СЕО
        </FormListItem>
        <FormListItem
          isActive={selectedTab === "Конфігурації"}
          onClick={() => setSelectedTab("Конфігурації")}
          style={
            selectedTab === "Конфігурації"
              ? { color: "black", backgroundColor: "#fff" }
              : { color: "#fff", backgroundColor: "inherit" }
          }
        >
          Конфігурації
        </FormListItem>
      </FormList>
      <Formik
        initialValues={{
          code: "",
          category: "",
          price: "",
          title: "",
          content: "",
          characteristics: "",
          nickname: "",
          metaTitle: "",
          metaKey: "",
          metaDescription: "",
          top: false,
          hit: false,
          status: "",
        }}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.resetForm();
        }}
      >
        {(props) => (
          <>
           <div hidden={selectedTab !== "Контент"}>
          <FormStyle  onSubmit={props.handleSubmit} id="productForm">
              <FormBox>
                <LabelStyle htmlFor="code">Код продукту<sup style={{color: 'red', fontWeight: 'inherit' }}>*</sup></LabelStyle>
                <InputStyle
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.code}
                  id="code"
                  name="code"
                />
              </FormBox>

          </FormStyle>
          </div>
          <div hidden={selectedTab !== "Зображення"}>Company</div>
          <div hidden={selectedTab !== "СЕО"}>
          <FormStyle  onSubmit={props.handleSubmit} id="productForm">
            
          </FormStyle>
          </div>
          <div hidden={selectedTab !== "Конфігурації"}>
          <FormStyle  onSubmit={props.handleSubmit} id="productForm">
              
          </FormStyle>
          </div>
          </>
        )}
      </Formik>
    </>
}

export default CreateMenusForm