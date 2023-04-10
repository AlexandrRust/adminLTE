import { MenuItem } from "./common/MenuItem.styled";
import { MenuItemTitle } from "./common/MenuItemTitle.styled";
import { MenuLink } from "./common/MenuLink.styled";
import { MenuStyle } from "./common/MenuStyle.styled";

import { BiChevronLeft } from "react-icons/bi";
import { SubMenu } from "../header/common/SubMenu.styled";
import { useState } from "react";

const Menu = () => {
  const [menuItemOpen, setMenuItemOpen] = useState([]);
  console.log(menuItemOpen);
  const OpenSubMenu = (e) => {
    const element = e.currentTarget.dataset.title;
    // const find = menuItemOpen.find((elem) => elem === element);
    console.log(element);
    // console.log(find);
    if (
      menuItemOpen.length === 0 ||
      !menuItemOpen.find((elem) => elem === e.currentTarget.dataset.title)
    ) {
      setMenuItemOpen((prevState) => [...prevState, element]);
    }
    if (menuItemOpen.find((elem) => elem === e.currentTarget.dataset.title)) {
      console.log("yes");
    }
    // if (menuItemOpen.find((elem) => elem === e.currentTarget.dataset.title)) {
    //   setMenuItemOpen(
    //     menuItemOpen.map((elem) => elem !== e.currentTarget.dataset.title)
    //   );
    // }
    // if (
    //   menuItemOpen.find((elem) => elem !== e.currentTarget.dataset.title) ||
    //   menuItemOpen.length === 0
    // ) {
    //   setMenuItemOpen((prevState) => [
    //     ...prevState,
    //     e.currentTarget.dataset.title,
    //   ]);
    //   e.currentTarget.children[0].style.rotate = "-90deg";
    // } else {
    // e.currentTarget.children[0].style.rotate = "-30deg";
    // setMenuItemOpen("");
    // e.currentTarget.children[0].style.rotate = "-30deg";
    // }
    // const classList = e.currentTarget.classList.value.split(" ");
    // if (classList.find((el) => el === "close")) {
    //   e.currentTarget.classList.remove("close");
    //   // e.currentTarget.firstChild.children[0].style.rotate = "-90deg";
    // } else {
    //   e.currentTarget.classList.add("close");
    //   // e.currentTarget.firstChild.children[0].style.rotate = "0deg";
    // }
  };
  return (
    <MenuStyle>
      <div className="close">
        <MenuLink to="/dashboard">
          <MenuItemTitle>Dashboard</MenuItemTitle>
        </MenuLink>
      </div>
      <div>
        <MenuItemTitle data-title="pages" onClick={OpenSubMenu}>
          Pages <BiChevronLeft />
        </MenuItemTitle>
        <ul
          hidden={
            !menuItemOpen.find((elem) => elem === "pages") ||
            menuItemOpen.length === 0
          }
        >
          <MenuItem>
            <MenuLink to="/pages">
              <MenuItemTitle>Pages</MenuItemTitle>
            </MenuLink>
          </MenuItem>

          <MenuItem>
            <MenuLink to="/news">
              <MenuItemTitle>News</MenuItemTitle>
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/bunners">
              <MenuItemTitle>Banners</MenuItemTitle>
            </MenuLink>
          </MenuItem>
        </ul>
      </div>
      <div>
        <MenuItemTitle data-title="users" onClick={OpenSubMenu}>
          Users <BiChevronLeft />
        </MenuItemTitle>
        <ul
          hidden={
            menuItemOpen.find((elem) => elem !== "users") || menuItemOpen === []
          }
        >
          <MenuItem>
            <MenuLink to="/users">
              <MenuItemTitle>Users</MenuItemTitle>
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/roles">
              <MenuItemTitle>Roles</MenuItemTitle>
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/permissions">
              <MenuItemTitle>Permissions</MenuItemTitle>
            </MenuLink>
          </MenuItem>
        </ul>
      </div>
      <div className="close">
        <MenuLink to="/menus">
          <MenuItemTitle>Menus</MenuItemTitle>
        </MenuLink>
      </div>
      <div>
        <MenuItemTitle data-title="products" onClick={OpenSubMenu}>
          Products <BiChevronLeft />
        </MenuItemTitle>
        <ul hidden={menuItemOpen !== "products" || menuItemOpen === ""}>
          <MenuItem>
            <MenuLink to="/products">
              <MenuItemTitle>Products</MenuItemTitle>
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/categoryProducts">
              <MenuItemTitle>Category Products</MenuItemTitle>
            </MenuLink>
          </MenuItem>
        </ul>
      </div>
    </MenuStyle>
    // <MenuStyle>
    //   <MenuItem className="close">
    //     <MenuLink to="/dashboard">
    //       <MenuItemTitle>Dashboard</MenuItemTitle>
    //     </MenuLink>
    //   </MenuItem>
    //   <MenuItem onClick={OpenSubMenu} className="close">
    //     <MenuItemTitle>
    //       Pages
    //       <BiChevronLeft />
    //     </MenuItemTitle>
    //     <SubMenu>
    //       <MenuItem>
    //         <MenuLink to="/pages">
    //           <MenuItemTitle>Pages</MenuItemTitle>
    //         </MenuLink>
    //       </MenuItem>
    //       <MenuItem>
    //         <MenuLink to="/news">
    //           <MenuItemTitle>News</MenuItemTitle>
    //         </MenuLink>
    //       </MenuItem>
    //       <MenuItem>
    //         <MenuLink to="/bunners">
    //           <MenuItemTitle>Banners</MenuItemTitle>
    //         </MenuLink>
    //       </MenuItem>
    //     </SubMenu>
    //   </MenuItem>
    //   <MenuItem onClick={OpenSubMenu} className="close">
    //     <MenuItemTitle>
    //       Users
    //       <BiChevronLeft />
    //     </MenuItemTitle>
    //     <SubMenu>
    //       <MenuItem>
    //         <MenuLink to="/users">
    //           <MenuItemTitle>Users</MenuItemTitle>
    //         </MenuLink>
    //       </MenuItem>
    //       <MenuItem>
    //         <MenuLink to="/roles">
    //           <MenuItemTitle>Roles</MenuItemTitle>
    //         </MenuLink>
    //       </MenuItem>
    //       <MenuItem>
    //         <MenuLink to="/permissions">
    //           <MenuItemTitle>Permissions</MenuItemTitle>
    //         </MenuLink>
    //       </MenuItem>
    //     </SubMenu>
    //   </MenuItem>
    //   <MenuItem>
    //     <MenuLink to="/menus">
    //       <MenuItemTitle>Menus</MenuItemTitle>
    //     </MenuLink>
    //   </MenuItem>
    //   <MenuItem onClick={OpenSubMenu} className="close">
    //     <MenuItemTitle>
    //       Products <BiChevronLeft />
    //     </MenuItemTitle>
    //     <SubMenu>
    //       <MenuItem>
    //         <MenuLink to="/products">
    //           <MenuItemTitle>Products</MenuItemTitle>
    //         </MenuLink>
    //       </MenuItem>
    //       <MenuItem>
    //         <MenuLink to="/categoryProducts">
    //           <MenuItemTitle>Category Products</MenuItemTitle>
    //         </MenuLink>
    //       </MenuItem>
    //     </SubMenu>
    //   </MenuItem>
    // </MenuStyle>
  );
};
export default Menu;
