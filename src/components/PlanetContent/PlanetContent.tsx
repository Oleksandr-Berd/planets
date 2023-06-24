import { geologyPng, internalSvgMobile, planetsSvgMobile } from "utils/processedImages";
import externalPath from "assets/images/external-link-square-with-an-arrow-in-right-diagonal.png"

import * as SC from "./PlanetContentStyled"
interface IProps {
    topic: string,
    content: { [key: string]: any } | undefined,
}

const PlanetContent = ({ topic, content }: IProps) => {

    const ImagePlanetMobile = planetsSvgMobile[content!.images.planet]
    const ImageInternalMobile = internalSvgMobile[content!.images.internal]
    const imageGeology = geologyPng[content!.images.geology]

    // const ImageComponentDesktop = planetsSvg[content!.images.planet]



    return (<SC.PageContainer>
        {topic === "overview" ? <>
            <ImagePlanetMobile />
            <SC.Name>{content!.name}</SC.Name>
            <SC.Content>{content!.overview.content}</SC.Content>
            <SC.SourceContainer>
                <SC.SourceTitle>Source : </SC.SourceTitle>
                <SC.SourceLink to={content!.overview.source}> Wikipedia<SC.SourceIcon src={externalPath} alt="externalPath" /></SC.SourceLink>
            </SC.SourceContainer>

        </>
            : topic === "structure" ?
                <>
                    <ImageInternalMobile />
                    <SC.Name>{content!.name}</SC.Name>
                    <SC.Content>{content!.structure.content}</SC.Content>
                    <SC.SourceContainer>
                        <SC.SourceTitle>Source : </SC.SourceTitle>
                        <SC.SourceLink to={content!.overview.source}> Wikipedia<SC.SourceIcon src={externalPath} alt="externalPath" /></SC.SourceLink>
                    </SC.SourceContainer>

                </>
                :
                <><SC.GeologyImagesContainer>
                    <ImagePlanetMobile />
                    <SC.GeologyImageMobile src={imageGeology} alt="geology" />
                </SC.GeologyImagesContainer>
                    <SC.Name>{content!.name}</SC.Name>
                    <SC.Content>{content!.structure.content}</SC.Content>
                    <SC.SourceContainer>
                        <SC.SourceTitle>Source : </SC.SourceTitle>
                        <SC.SourceLink to={content!.structure.source}> Wikipedia<img src={externalPath} alt="externalPath" /></SC.SourceLink>
                    </SC.SourceContainer>

                </>
        }
        <SC.InfoList>
            <SC.InfoItem>
                <SC.InfoTitle>rotation time</SC.InfoTitle>
                <SC.InfoData>{content!.rotation}</SC.InfoData>
            </SC.InfoItem>
            <SC.InfoItem>
                <SC.InfoTitle>revolution time</SC.InfoTitle>
                <SC.InfoData>{content!.revolution}</SC.InfoData>
            </SC.InfoItem>
            <SC.InfoItem>
                <SC.InfoTitle>radius</SC.InfoTitle>
                <SC.InfoData>{content!.radius}</SC.InfoData>
            </SC.InfoItem>
            <SC.InfoItem>
                <SC.InfoTitle>average temp.</SC.InfoTitle>
                <SC.InfoData>{content!.temperature}</SC.InfoData>
            </SC.InfoItem>
        </SC.InfoList>
    </SC.PageContainer>);
}

export default PlanetContent;