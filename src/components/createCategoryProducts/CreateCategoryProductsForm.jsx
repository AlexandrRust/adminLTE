import { Formik } from "formik";
import { useState } from "react";
import { FormBox } from "../form/common/FormBox.styled";
import { FormList } from "../form/common/FormList.styled";
import { FormListItem } from "../form/common/FormListItem.styled";
import { InputStyle } from "../form/common/InputStyle.styled";
import { LabelStyle } from "../form/common/LabelStyle.styled";
import { SelectStyle } from "../form/common/SelectStyle.styled";
import { TextareaStyle } from "../form/common/TextareaStyle.styled";
import { FormStyle } from "../form/FormStyle.styled";

const CreateCategoryProductsForm = () => {
    const [selectedTab, setSelectedTab] = useState("Контент");
    return (
      <>
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
            title: "",
            content: "",
          metaTitle: "",
          metaKey: "",
          metaDescription: "",
          categoty:"",
          sortingOrder:"",
          nickname: "",
          }}
          onSubmit={(values, actions) => {
            console.log(values);
            actions.resetForm();
          }}
        >
          {(props) => (
            <>
             <div hidden={selectedTab !== "Контент"}>
            <FormStyle  onSubmit={props.handleSubmit} id="categotyProductForm">
                <FormBox>
                  <LabelStyle htmlFor="title">Назва<sup style={{color: 'red', fontWeight: 'inherit' }}>*</sup></LabelStyle>
                  <InputStyle
                    type="text"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.title}
                    id="title"
                    name="title"
                  />
                </FormBox>
  
                <FormBox style={{height: 'auto'}} >
                  <LabelStyle htmlFor="content">Зміст<sup style={{color: 'red', fontWeight: 'inherit' }}>*</sup></LabelStyle>
                  <TextareaStyle
                    type="text"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.content}
                    id="content"
                    name="content"
                  />
                </FormBox>
            </FormStyle>
            </div>
            <div hidden={selectedTab !== "Зображення"}>Company</div>
            <div hidden={selectedTab !== "СЕО"}>
            <FormStyle  onSubmit={props.handleSubmit} id="categotyProductForm">
                <FormBox>
                  <LabelStyle htmlFor="metaTitle">Мета-Заголовок<sup style={{color: 'red', fontWeight: 'inherit' }}>*</sup></LabelStyle>
                  <InputStyle
                    type="text"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.metaTitle}
                    id="metaTitle"
                    name="metaTitle"
                  />
                </FormBox>
                <FormBox>
                  <LabelStyle htmlFor="metaKey">Мета-Ключ<sup style={{color: 'red', fontWeight: 'inherit' }}>*</sup></LabelStyle>
                  <InputStyle
                    type="text"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.metaKey}
                    id="metaKey"
                    name="metaKey"
                  />
                </FormBox>
                <FormBox>
                  <LabelStyle htmlFor="metaDescription">Мета-Опис<sup style={{color: 'red', fontWeight: 'inherit' }}>*</sup></LabelStyle>
                  <InputStyle
                    type="text"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.metaDescription}
                    id="metaDescription"
                    name="metaDescription"
                  />
                </FormBox>
  
                {/* {props.errors.name && (
                  <div id="feedback">{props.errors.name}</div>
                )} */}
                {/* <button type="submit">Submit</button> */}
              
            </FormStyle>
            </div>
            <div hidden={selectedTab !== "Конфігурації"}>
            <FormStyle  onSubmit={props.handleSubmit} id="categotyProductForm">
            <FormBox>
                <LabelStyle htmlFor="categoty">Категорії</LabelStyle>
                <SelectStyle
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.categoty}
                  id="categoty"
                  name="categoty"
                />
              </FormBox>
              <FormBox>
                  <LabelStyle htmlFor="sortingOrder">Порядок сортування<sup style={{color: 'red', fontWeight: 'inherit' }}>*</sup></LabelStyle>
                  <InputStyle
                    type="text"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.sortingOrder}
                    id="sortingOrder"
                    name="sortingOrder"
                  />
                </FormBox>
                <FormBox>
                  <LabelStyle htmlFor="nickname">Псевдонім<sup style={{color: 'red', fontWeight: 'inherit' }}>*</sup></LabelStyle>
                  <InputStyle
                    type="text"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.nickname}
                    id="nickname"
                    name="nickname"
                  />
                </FormBox>
            </FormStyle>
            </div>
            </>
          )}
        </Formik>
        <div className="p-4">
          
        </div>
      </>
    );
}

export default CreateCategoryProductsForm