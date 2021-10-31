import { Card, CardContent, Typography } from "@material-ui/core"
import { FunctionComponent } from "react"
import { details } from "../../css/styles";
import { convertDateBR } from "../../helpers";

type TProps ={
    showItem: any
}

const DetailsMovie:FunctionComponent<TProps> = ({showItem}) => {
    const style = details();

    return(
        <Card className={style.root}>
            {!!showItem ? (<>
                <div className={style.details}>
                    <CardContent className={style.content}>
                        <Typography component="h5" variant="h5">
                            {showItem.title}
                        </Typography>
                        
                    </CardContent>
                    <CardContent className={style.content}>
                       
                        <Typography component="span" variant="subtitle1" color="textSecondary">
                            Data de lançamento: {convertDateBR(showItem.release_date) }
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Popularidade: {showItem.popularity}
                        </Typography>
                    </CardContent>
                </div>
            </>):
            <CardContent>
                Houve um problema
            </CardContent>}
            
        </Card>
    )
}

export default DetailsMovie