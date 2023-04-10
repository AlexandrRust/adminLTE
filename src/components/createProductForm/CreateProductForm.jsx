import { Formik } from "formik";
import { Persist } from "formik-persist";
import { useState } from "react";
import { FormBox } from "../form/common/FormBox.styled";
import { FormList } from "../form/common/FormList.styled";
import { FormListItem } from "../form/common/FormListItem.styled";
import { InputStyle } from "../form/common/InputStyle.styled";
import { LabelStyle } from "../form/common/LabelStyle.styled";
import { SelectStyle } from "../form/common/SelectStyle.styled";
import SwitchButton from "../form/common/switchButton/SwitchButton";
import { TextareaStyle } from "../form/common/TextareaStyle.styled";
import { FormStyle } from "../form/FormStyle.styled";
import ImageUpload from "../imageUpload/ImageUpload";

const CreateProductForm = () => {
  const [selectedTab, setSelectedTab] = useState("Контент");
  const [imageArray, setImageArray] = useState(
    JSON.parse(localStorage.getItem("images")) ?? []
  );
  const getImages = (images) => {
    localStorage.setItem("images", JSON.stringify(images));
    setImageArray(images);
  };
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
          console.log({ ...values, images: imageArray });
          localStorage.clear();
          setImageArray([]);
          localStorage.removeItem("form");
          localStorage.setItem("images", JSON.stringify([]));
          actions.resetForm();
        }}
      >
        {(props) => (
          <>
            <FormStyle onSubmit={props.handleSubmit} id="productForm">
              <div hidden={selectedTab !== "Контент"}>
                <FormBox>
                  <LabelStyle htmlFor="code">
                    Код продукту
                    <sup style={{ color: "red", fontWeight: "inherit" }}>*</sup>
                  </LabelStyle>
                  <InputStyle
                    type="text"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.code}
                    id="code"
                    name="code"
                  />
                </FormBox>

                <FormBox>
                  <LabelStyle htmlFor="category">
                    Категорії
                    <sup style={{ color: "red", fontWeight: "inherit" }}>*</sup>
                  </LabelStyle>
                  <SelectStyle
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.category}
                    id="category"
                    name="category"
                  />
                </FormBox>

                <FormBox>
                  <LabelStyle htmlFor="price">
                    Ціна
                    <sup style={{ color: "red", fontWeight: "inherit" }}>*</sup>
                  </LabelStyle>
                  <InputStyle
                    type="text"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.price}
                    id="price"
                    name="price"
                  />
                </FormBox>

                <FormBox>
                  <LabelStyle htmlFor="title">
                    Назва
                    <sup style={{ color: "red", fontWeight: "inherit" }}>*</sup>
                  </LabelStyle>
                  <InputStyle
                    type="text"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.title}
                    id="title"
                    name="title"
                  />
                </FormBox>

                <FormBox style={{ height: "auto" }}>
                  <LabelStyle htmlFor="content">
                    Зміст
                    <sup style={{ color: "red", fontWeight: "inherit" }}>*</sup>
                  </LabelStyle>
                  <TextareaStyle
                    type="text"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.content}
                    id="content"
                    name="content"
                  />
                </FormBox>

                <FormBox style={{ height: "auto" }}>
                  <LabelStyle htmlFor="characteristics">
                    Характеристики
                    <sup style={{ color: "red", fontWeight: "inherit" }}>*</sup>
                  </LabelStyle>
                  <TextareaStyle
                    type="text"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.characteristics}
                    id="characteristics"
                    name="characteristics"
                  />
                </FormBox>

                {/* {props.errors.name && (
                <div id="feedback">{props.errors.name}</div>
              )} */}
                {/* <button type="submit">Submit</button> */}
              </div>
              <div hidden={selectedTab !== "Зображення"}>
                <ImageUpload getImages={getImages} items={imageArray} />
              </div>
              <div hidden={selectedTab !== "СЕО"}>
                <FormBox>
                  <LabelStyle htmlFor="nickname">
                    Псевдонім
                    <sup style={{ color: "red", fontWeight: "inherit" }}>*</sup>
                  </LabelStyle>
                  <InputStyle
                    type="text"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.nickname}
                    id="nickname"
                    name="nickname"
                  />
                </FormBox>
                <FormBox>
                  <LabelStyle htmlFor="metaTitle">
                    Мета-Заголовок
                    <sup style={{ color: "red", fontWeight: "inherit" }}>*</sup>
                  </LabelStyle>
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
                  <LabelStyle htmlFor="metaKey">
                    Мета-Ключ
                    <sup style={{ color: "red", fontWeight: "inherit" }}>*</sup>
                  </LabelStyle>
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
                  <LabelStyle htmlFor="metaDescription">
                    Мета-Опис
                    <sup style={{ color: "red", fontWeight: "inherit" }}>*</sup>
                  </LabelStyle>
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
              </div>
              <div hidden={selectedTab !== "Конфігурації"}>
                <FormBox>
                  <LabelStyle htmlFor="top">Top</LabelStyle>
                  <SwitchButton
                    id="top"
                    name="top"
                    type="checkbox"
                    onChange={props.handleChange}
                    value={props.values.top}
                  />
                </FormBox>
                <FormBox>
                  <LabelStyle htmlFor="hit">Hit</LabelStyle>
                  <SwitchButton
                    id="hit"
                    name="hit"
                    type="checkbox"
                    onChange={props.handleChange}
                    value={props.values.hit}
                  />
                </FormBox>
                <FormBox>
                  <LabelStyle htmlFor="status">Статус</LabelStyle>
                  <SelectStyle
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.status}
                    id="status"
                    name="status"
                  />
                </FormBox>

                {/* {props.errors.name && (
                <div id="feedback">{props.errors.name}</div>
              )} */}
                {/* <button type="submit">Submit</button> */}
              </div>
              <Persist name="form"></Persist>
            </FormStyle>
          </>
        )}
      </Formik>
    </>
  );
};

export default CreateProductForm;
