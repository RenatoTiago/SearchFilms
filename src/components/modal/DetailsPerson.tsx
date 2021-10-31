import { Card, CardContent, Typography } from "@material-ui/core"
import { FunctionComponent, useEffect, useState } from "react"
import { details } from "../../css/styles";
import { calculateAge, convertDateBR } from "../../helpers";
import { getLastCast } from "../../services";

type TProps ={
    showItem: any
}

const DetailsPerson:FunctionComponent<TProps> = ({showItem}) => {
    const style = details();
    const [lastmovie, setLastMovie] = useState('')

    useEffect(() => {
        if(!!showItem){
            getLastCast(showItem.id)
            .then( data => {
              let newdata = data.cast.map((obj: any)=>{ 
                return {
                    ...obj,
                    data: new Date(obj.release_date) 
                }
              })
              //console.log("with date",newdata)
              newdata.sort((a:any, b:any)=>{
                  return b.data - a.data
              })
              setLastMovie(newdata[0].title)
            })
        }
      },[showItem]);

    return(
        <Card className={style.root}>
            {!!showItem ? (<>
                <div className={style.details}>
                    <CardContent className={style.content}>
                        <Typography component="h5" variant="h5">
                            {showItem.name}
                        </Typography>
                        
                    </CardContent>
                    <CardContent className={style.content}>
                       
                        <Typography component="span" variant="subtitle1" color="textSecondary">
                            Data de Nacimento: {convertDateBR(showItem.birthday) }
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Popularidade: {showItem.popularity}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Idade: {calculateAge(showItem.birthday)}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Último Filme: {lastmovie}
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

export default DetailsPerson