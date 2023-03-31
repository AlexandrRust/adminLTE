import { PageTableStyle } from "./common/PageTableStyle.styled";
import { TableTh } from "./common/TableTh.style";
import { FiArrowUp, FiArrowDown } from "react-icons/fi";
import { TableTd } from "./common/TableTd.style";

const PageTable = () => {
  return (
    <PageTableStyle>
      <thead>
        <tr>
          <TableTh>
            ID
            <FiArrowUp style={{ marginLeft: "20px" }} />
            <FiArrowDown />
          </TableTh>
          <TableTh>
            Назва
            <FiArrowUp style={{ float: "right" }} />
            <FiArrowDown style={{ float: "right" }} />
          </TableTh>
          <TableTh>
            Псевдонім
            <FiArrowUp />
            <FiArrowDown />
          </TableTh>
          <TableTh>
            Дії
            <FiArrowUp />
            <FiArrowDown />
          </TableTh>
        </tr>
      </thead>
      <tbody>
        <tr>
          <TableTd>1</TableTd>
          <TableTd>Home</TableTd>
          <TableTd>Home</TableTd>
          <TableTd>Home</TableTd>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <TableTh>ID</TableTh>
          <TableTh>Назва</TableTh>
          <TableTh>Псевдонім</TableTh>
          <TableTh>Дії</TableTh>
        </tr>
      </tfoot>
    </PageTableStyle>
  );
};

export default PageTable;
