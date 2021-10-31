import { Box } from "@material-ui/core";
import Pagination from '@material-ui/lab/Pagination';
import { useState } from "react";
import Nav from "./components/header";
import ListResult from "./components/List";
import ModalDetails from "./components/modal/ModalDetails";
import Search from "./components/Search";
import { GetSearchMulti } from "./services";


const App = () => {
  const [list, setList] = useState(null);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [itemSelected, setItemSelected] = useState(null);
  const [open, setOpen] = useState(false)

  const handleSelectPage = (evt, value) => {
    setPage(value);

    GetSearchMulti(search, page)
      .then(data => {
        setList(data.results)
        setTotalPages(data.total_pages)
      })
  }

  return (
    <Box >
      <Nav />
      <Search setList={setList} search={search} setSearch={setSearch} setTotalPages={setTotalPages} />
      <ListResult list={list} setItemSelected={setItemSelected} setOpen={setOpen} />
      <ModalDetails open={open} setOpen={setOpen} itemSelected={itemSelected} />
      <Box display={!!list ? "flex" : "none"} justifyContent="center" mb={3}>
        <Pagination count={totalPages} page={page} onChange={handleSelectPage} />
      </Box>

    </Box>
  );
}

export default App;
