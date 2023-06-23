
interface IProps {
    topic: string,
    content: { name: string; overview: { content: string; source: string; }; structure: { content: string; source: string; }; geology: { content: string; source: string; }; rotation: string; revolution: string; radius: string; temperature: string; images: { } } | undefined,
}

const PlanetContent = ({ topic, content }: IProps) => {

    console.log(content);


    return (<div>
        {topic === "overview" ?
            <div style={{color: "red"}}>{topic}</div>    
         : topic === "structure" ?
                <div style={{ color: "red" }}>{topic}</div>
                : 
                <div style={{ color: "red" }}>{topic}</div>}
    </div> );
}
 
export default PlanetContent;