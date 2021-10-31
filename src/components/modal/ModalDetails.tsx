import { Backdrop, Fade, Modal } from "@material-ui/core";
import { FunctionComponent, useEffect, useState } from "react";
import { modal } from "../../css/styles";
import { GetDetails } from "../../services";
import ShowDetails from "./ShowDetails";

type TProps = {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    itemSelected: any
}

const ModalDetails:FunctionComponent<TProps> = ({open, setOpen, itemSelected}) =>{
    const handleClose = () =>{
        setOpen(false)
    }
    const style = modal();
    const [showItem, setShowItem] = useState(null)

    useEffect(() => {
      if(!!itemSelected){
        GetDetails(itemSelected.id, itemSelected.media_type)
        .then( data => {
            setShowItem(data)
        })
      }
    },[itemSelected]);

    return (
        <Modal
            className={style.modal}
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            }}
      > 
        <Fade in={open} >
            {!!itemSelected ?
            
                <ShowDetails type={itemSelected.media_type} showItem={showItem} />
           : (
                <div>Nada foi selecionado, por favor abra novamente a poster.</div>
              )
            }
          
        </Fade>
      </Modal>
    )
}
export default ModalDetails;