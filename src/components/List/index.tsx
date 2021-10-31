import { Box, Grid } from "@material-ui/core";
import { FunctionComponent } from "react";
import CardPoster from "./Card";

type TProps = {
    list: any,
    setItemSelected: React.Dispatch<React.SetStateAction<null>>,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ListResult:FunctionComponent<TProps> = ({list,setItemSelected,setOpen}) => {
    return(
        <Box margin={3}>
            <Grid container spacing={3} >
                {list && list.map((obj:any) => {
                    return(
                        <Grid item xs={6} md={4} lg={3} key={obj.id}>
                            <CardPoster item={obj} setItemSelected={setItemSelected} setOpen={setOpen}/>
                        </Grid>
                    )
                })}
            </Grid>
        </Box>
        
    )
    
}

export default ListResult;