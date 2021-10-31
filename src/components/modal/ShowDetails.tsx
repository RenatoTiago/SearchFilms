import { Box } from "@material-ui/core";
import { FunctionComponent } from "react";
import DetailsMovie from "./DetailsMovie";
import DetailsPerson from "./DetailsPerson";
import DetailsTV from "./DetailsTV";

type TProps = {
    showItem: any,
    type: any
}

const ShowDetails: FunctionComponent<TProps> = ({ showItem, type }) => {

    let pageDetails

    if (type === 'tv') {
        pageDetails = <DetailsTV showItem={showItem} />
    }
    else if (type === 'movie') {
        pageDetails = <DetailsMovie showItem={showItem} />
    }
    else if (type === 'person') {
        pageDetails = <DetailsPerson showItem={showItem} />
    }

    return (
        <Box>
            {pageDetails}
        </Box>
    )
}
export default ShowDetails;