import { useMediaQuery } from '@mui/material';

import { geologyPng, internalSvgMobile, planetsSvgMobile } from "utils/processedImages";
import externalPath from "assets/images/external-link-square-with-an-arrow-in-right-diagonal.png"

import * as SC from "./PlanetContentStyled"
interface IProps {
    topic: string,
    content: { [key: string]: any } | undefined,
    TopicButtons?: any
}

const PlanetContent = ({ topic, content, TopicButtons }: IProps) => {

    const isMobile = useMediaQuery('(max-width:767px)')

    const isTablet = useMediaQuery('(min-width:768px)')

    const ImagePlanetMobile = planetsSvgMobile[content!.images.planet]
    const ImageInternalMobile = internalSvgMobile[content!.images.internal]
    const imageGeology = geologyPng[content!.images.geology]

    // const ImageComponentDesktop = planetsSvg[content!.images.planet]



    return (<>
        {
            isMobile ?
                <SC.PageContainer >
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
                </SC.PageContainer >
                : null
        }

        {isTablet ?
            <SC.PageContainer >
                <>

                    {topic === "overview" ? <>
                        <ImagePlanetMobile />
                        <SC.ContentAndButtonsContainer>
                            <div>
                            <SC.Name>{content!.name}</SC.Name>
                            <SC.Content>{content!.overview.content}</SC.Content>
                            <SC.SourceContainer>
                                <SC.SourceTitle>Source : </SC.SourceTitle>
                                <SC.SourceLink to={content!.overview.source}> Wikipedia<SC.SourceIcon src={externalPath} alt="externalPath" /></SC.SourceLink>
                                </SC.SourceContainer>
                            </div>
                            {TopicButtons}
                        </SC.ContentAndButtonsContainer>
                    </>
                        : topic === "structure" ?
                            <>
                                <ImageInternalMobile />
                                <SC.ContentAndButtonsContainer>
                                    <div>
                                        <SC.Name>{content!.name}</SC.Name>
                                        <SC.Content>{content!.structure.content}</SC.Content>
                                        <SC.SourceContainer>
                                            <SC.SourceTitle>Source : </SC.SourceTitle>
                                            <SC.SourceLink to={content!.overview.source}> Wikipedia<SC.SourceIcon src={externalPath} alt="externalPath" /></SC.SourceLink>
                                        </SC.SourceContainer>
                                    </div>
                                    {TopicButtons}
                                </SC.ContentAndButtonsContainer>
                            </>
                            :
                            <><SC.GeologyImagesContainer>
                                <ImagePlanetMobile />
                                <SC.GeologyImageMobile src={imageGeology} alt="geology" />
                            </SC.GeologyImagesContainer>
                                <SC.ContentAndButtonsContainer>
                                    <div>
                                        <SC.Name>{content!.name}</SC.Name>
                                        <SC.Content>{content!.structure.content}</SC.Content>
                                        <SC.SourceContainer>
                                            <SC.SourceTitle>Source : </SC.SourceTitle>
                                            <SC.SourceLink to={content!.structure.source}> Wikipedia<img src={externalPath} alt="externalPath" /></SC.SourceLink>
                                        </SC.SourceContainer>
                                    </div>
                                    {TopicButtons}
                                </SC.ContentAndButtonsContainer>

                            </>
                    }


                </>
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
            </SC.PageContainer >

            : null}
    </>
    )

}

export default PlanetContent;