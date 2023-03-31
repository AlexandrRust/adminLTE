import { MenuItem } from "./common/MenuItem.styled";
import { MenuItemTitle } from "./common/MenuItemTitle.styled";
import { MenuLink } from "./common/MenuLink.styled";
import { MenuStyle } from "./common/MenuStyle.styled";

import { BiChevronLeft } from "react-icons/bi";
import { SubMenu } from "../header/common/SubMenu.styled";

const Menu = () => {
  const OpenSubMenu = (e) => {
    const classList = e.currentTarget.classList.value.split(" ");
    if (classList.find((el) => el === "close")) {
      e.currentTarget.classList.remove("close");
    } else {
      e.currentTarget.classList.add("close");
    }
  };
  return (
    <MenuStyle>
      <MenuItem className="close">
        <MenuLink to="/dashboard">
          <MenuItemTitle>Dashboard</MenuItemTitle>
        </MenuLink>
      </MenuItem>
      <MenuItem onClick={OpenSubMenu} className="close">
        <MenuItemTitle>
          Pages
          <BiChevronLeft />
        </MenuItemTitle>
        <SubMenu>
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
        </SubMenu>
      </MenuItem>
      <MenuItem onClick={OpenSubMenu} className="close">
        <MenuItemTitle>
          Users
          <BiChevronLeft />
        </MenuItemTitle>
        <SubMenu>
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
        </SubMenu>
      </MenuItem>
      <MenuItem>
        <MenuLink to="/menus">
          <MenuItemTitle>Menus</MenuItemTitle>
        </MenuLink>
      </MenuItem>
      <MenuItem onClick={OpenSubMenu} className="close">
        <MenuItemTitle>
          Products <BiChevronLeft />
        </MenuItemTitle>
        <SubMenu>
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
        </SubMenu>
      </MenuItem>
    </MenuStyle>
  );
};
export default Menu;
