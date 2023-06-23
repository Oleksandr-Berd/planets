import { NavLink } from "react-router-dom";
import { planetsSvg, planetsSvgMobile } from "utils/processedImages";
import externalPath from "assets/images/external-link-square-with-an-arrow-in-right-diagonal.png"


interface IProps {
    topic: string,
    content: { [key: string]:any } | undefined,
}

const PlanetContent = ({ topic, content }: IProps) => {

    

    const ImageComponentMobile = planetsSvgMobile[content!.images.planet]
    
    const ImageComponentDesktop = planetsSvg[content!.images.planet]

    

    return (<div>
        {topic === "overview" ?<>
            <ImageComponentMobile />
            <h2>{content!.name}</h2>
            <p>{content!.overview.content}</p>
            <div>
                <p>Source:</p>
                <NavLink to={content!.overview.source}><span>Wikipedia</span><img src={externalPath} alt="externalPath" /></NavLink>
                
            </div>
           
        </>
: topic === "structure" ?
                <div style={{ color: "red" }}>{topic}</div>
                : 
                <div style={{ color: "red" }}>{topic}</div>}
        <ul>
            <li>
                <h4>rotation time</h4>
                <p>{content!.rotation}</p>
            </li>
            <li>
                <h4>revolution time</h4>
                <p>{content!.revolution}</p>
            </li>
            <li>
                <h4>radius</h4>
                <p>{content!.radius}</p>
            </li>
            <li>
                <h4>average temp.</h4>
                <p>{content!.temperature}</p>
            </li>
        </ul>
    </div> );
}
 
export default PlanetContent;