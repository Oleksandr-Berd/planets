import TopicButtons from "components/TopicButtons/TopicButtons";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from '@mui/material';

import planets from "dataBase/data.json";
import PlanetContent from "components/PlanetContent/PlanetContent";
import * as SC from "./PlanetPageStyled"
import NotFound from "pages/NotFoundPage/NotFoundPage";

const PlanetPage = (): JSX.Element => {
    const [isStressed, setIsStressed] = useState<string>("overview");
    const [isError] = useState<string | null>(null)
    const location = useLocation();
    const { pathname } = location;
    const active = pathname.slice(1);

    const isMobile = useMediaQuery('(max-width:767px)')

    const isTablet = useMediaQuery('(min-width:768px)')

    const planet = planets.find((el) => el.name === active);


    const handleStressed = (topic: string): void => {
        setIsStressed(topic);
    };

    
    return (
        <div>
            {isError ? <NotFound error={isError} />: null}
            {isMobile ? <>
                <TopicButtons isStressed={isStressed} submitTopic={handleStressed} />
                <PlanetContent
                    topic={isStressed}
                    content={planet}
                />
            </> :null}
           
            
            {isTablet ? <SC.PageContainer>
                
                <PlanetContent
                    topic={isStressed}
                    content={planet}
                    TopicButtons={<TopicButtons isStressed={isStressed} submitTopic={handleStressed} />}
                />
                
            </SC.PageContainer> : null}
        </div>
    );
};

export default PlanetPage;
