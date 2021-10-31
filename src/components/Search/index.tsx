import { Box, Button, TextField } from "@material-ui/core";
import { FunctionComponent } from "react";
import { GetSearchMulti } from "../../services";
import { searchInpunt } from "../../css/styles";

type TProps = {
    setList: React.Dispatch<React.SetStateAction<any>>,
    setSearch: React.Dispatch<React.SetStateAction<string>>,
    search: string,
    setTotalPages: React.Dispatch<React.SetStateAction<number>>,

}

const Search: FunctionComponent<TProps> = ({ setList, setSearch, search, setTotalPages }) => {

    const style = searchInpunt();

    const handleChange = (event: any) => {
        setSearch(event.target.value);
    };

    const handleClick = () => {
        GetSearchMulti(search, 1)
            .then(data => {
                setList(data.results)
                setTotalPages(data.total_pages)
            })
    }

    return (
        <Box margin={3} display="flex">
            <TextField
                className={style.inputSearch}
                value={search}
                label="Busque Filme, Série ou Pessoa"
                onChange={handleChange}
                onKeyPress={(evt) => {
                    if (evt.charCode === 13) {
                        return handleClick()
                    }
                }
                }
            />
            <Button color="primary" variant="outlined" onClick={handleClick}>Buscar</Button>
        </Box>
    );
}

export default Search;