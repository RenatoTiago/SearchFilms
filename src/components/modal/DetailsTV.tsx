import { Card, CardContent, Typography } from "@material-ui/core"
import { FunctionComponent } from "react"
import { details } from "../../css/styles";
import { convertDateBR } from "../../helpers";

type TProps = {
    showItem: any
}

const DetailsTV: FunctionComponent<TProps> = ({ showItem }) => {
    const style = details();

    return (
        <Card className={style.root}>
            {!!showItem ? (<>
                <div className={style.details}>
                    <CardContent className={style.content}>
                        <Typography component="h5" variant="h5">
                            {showItem.name}
                        </Typography>

                    </CardContent>
                    <CardContent className={style.content}>
                        <Typography variant="subtitle1" color="textSecondary">
                            Temporadas lançadas: {showItem.seasons.length}
                        </Typography>
                        <Typography component="span" variant="subtitle1" color="textSecondary">
                            Data de lançamento: {convertDateBR(showItem.first_air_date)}
                        </Typography>
                    </CardContent>
                </div>
            </>) :
                <CardContent>
                    Houve um problema
                </CardContent>}
        </Card>
    )
}

export default DetailsTV