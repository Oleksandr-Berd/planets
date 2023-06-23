import { planetsSvg, planetsSvgMobile } from "utils/processedImages";


interface IProps {
    topic: string,
    content: { [key: string]: any; } | undefined,
}

const PlanetContent = ({ topic, content }: IProps) => {

    

    const ImageComponentMobile: any = planetsSvgMobile[content!.images.planet]
    
    

    return (<div>
        {topic === "overview" ?
            <ImageComponentMobile />
: topic === "structure" ?
                <div style={{ color: "red" }}>{topic}</div>
                : 
                <div style={{ color: "red" }}>{topic}</div>}
    </div> );
}
 
export default PlanetContent;