import { Card, CardContent, CardHeader, Typography } from "@material-ui/core";
import { FunctionComponent } from "react";
import { verifyIMG } from "../../helpers";

type TProps ={
    item: any,
    setItemSelected: React.Dispatch<React.SetStateAction<null>>,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const CardPoster:FunctionComponent<TProps> = ({item, setItemSelected, setOpen}) => {
    const handleShowModal = () =>{
        setItemSelected(item);
        setOpen(true)
    }
    return(<>
    <Card onClick={handleShowModal}>
        <CardHeader
            title={item.title || item.name}
        />
        <div className="img" style={{textAlign:"center"}}>
            <img src={verifyIMG(item.profile_path, item.poster_path)} alt="img"/>
        </div>

        <CardContent>
            <Typography className="" variant="body2" color="textSecondary" component="p" >
                {item.overview}
            </Typography>
        </CardContent>
    </Card>
    </>)
}

export default CardPoster;