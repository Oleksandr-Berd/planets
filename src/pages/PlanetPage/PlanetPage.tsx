import TopicButtons from "components/TopicButtons/TopicButtons";
import { useState } from "react";
import { useLocation } from "react-router-dom";

import planets from "dataBase/data.json";
import PlanetContent from "components/PlanetContent/PlanetContent";

const PlanetPage = (): JSX.Element => {
    const [isStressed, setIsStressed] = useState<string>("overview");
    const location = useLocation();
    const { pathname } = location;
    const active = pathname.slice(1);

    const planet = planets.find((el) => el.name === active);

    const handleStressed = (topic: string): void => {
        setIsStressed(topic);
    };

    
    return (
        <div>
            <TopicButtons isStressed={isStressed} submitTopic={handleStressed} />
            <PlanetContent
                topic={isStressed}
                content={planet}
            />
        </div>
    );
};

export default PlanetPage;
