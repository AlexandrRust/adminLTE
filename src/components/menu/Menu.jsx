import { MenuItem } from "./common/MenuItem.styled";
import { MenuItemTitle } from "./common/MenuItemTitle.styled";
import { MenuLink } from "./common/MenuLink.styled";
import { MenuStyle } from "./common/MenuStyle.styled";

import { BiChevronLeft } from "react-icons/bi";
import { useState } from "react";
import { SubList } from "./common/SubList.styled";

const Menu = () => {
  const [menuItemOpen, setMenuItemOpen] = useState([]);

  const OpenSubMenu = (e) => {
    const element = e.currentTarget.dataset.title;
    if (
      menuItemOpen.length === 0 ||
      !menuItemOpen.find((elem) => elem === element)
    ) {
      setMenuItemOpen((prevState) => [...prevState, element]);
    }
    if (menuItemOpen.find((elem) => elem === element)) {
      if (menuItemOpen.length === 1) {
        setMenuItemOpen([]);
      } else {
        setMenuItemOpen(menuItemOpen.filter((elem) => elem !== element));
      }
    }
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
          Pages
          <BiChevronLeft
            style={
              menuItemOpen.find((elem) => elem === "pages") && {
                rotate: "-90deg",
              }
            }
          />
        </MenuItemTitle>
        <SubList
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
        </SubList>
      </div>
      <div>
        <MenuItemTitle data-title="users" onClick={OpenSubMenu}>
          Users
          <BiChevronLeft
            style={
              menuItemOpen.find((elem) => elem === "users") && {
                rotate: "-90deg",
              }
            }
          />
        </MenuItemTitle>
        <ul
          hidden={
            !menuItemOpen.find((elem) => elem === "users") ||
            menuItemOpen === []
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
          Products
          <BiChevronLeft
            style={
              menuItemOpen.find((elem) => elem === "products") && {
                rotate: "-90deg",
              }
            }
          />
        </MenuItemTitle>
        <ul
          hidden={
            !menuItemOpen.find((elem) => elem === "products") ||
            menuItemOpen.length === 0
          }
        >
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
  );
};
export default Menu;
