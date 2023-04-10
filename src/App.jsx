import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

const SharedLayout = lazy(() => import("./layout/SharedLayout"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Pages = lazy(() => import("./pages/Pages"));
const News = lazy(() => import("./pages/News"));
const Bunners = lazy(() => import("./pages/Banners"));
const Menus = lazy(() => import("./pages/Menus"));
const CreateMenus = lazy(()=> import("./pages/CreateMenus"))
const Users = lazy(() => import("./pages/Users"));
const Roles = lazy(() => import("./pages/Roles"));
const Permissions = lazy(() => import("./pages/Permissions"));
const Products = lazy(() => import("./pages/Products"));
const CreateProduct = lazy(() => import("./pages/CreateProduct"));
const CategoryProducts = lazy(() => import("./pages/CategoryProducts"));
const CreateCategoryProducts = lazy(()=> import("./pages/CreateCategoryProducts"))

function App() {
  return (
    <>
      {/* <Suspense fallback={<div>Loading page...</div>}> */}
      <Routes>
        <Route path="/" element={<SharedLayout/>}>
          <Route index element={<Dashboard />} />
          <Route index path="dashboard" element={<Dashboard />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/news" element={<News />} />
          <Route path="/bunners" element={<Bunners />} />
          <Route path="/menus" element={<Menus />} />
          <Route path="/menus/create" element={<CreateMenus />} />
          <Route path="/users" element={<Users />} />
          <Route path="/roles" element={<Roles />} />
          <Route path="/permissions" element={<Permissions />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/create" element={<CreateProduct />} />
          <Route path="/categoryProducts" element={<CategoryProducts />} />
          <Route path="/categoryProducts/create" element={<CreateCategoryProducts  />} />
          <Route path="*" element={<div>Page not found</div>} />
        </Route>
      </Routes>
      {/* </Suspense> */}
    </>
  );
}
export default App;
