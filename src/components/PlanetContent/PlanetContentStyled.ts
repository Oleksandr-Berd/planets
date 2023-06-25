import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const PageContainer = styled.div`
  padding-top: 95px;
  padding-bottom: 47px;
  padding-right: ${(props) => props.theme.space[6]};
  padding-left: ${(props) => props.theme.space[6]};

  text-align: center;

  @media (min-width: 768px) {
    padding-left: ${(props) => props.theme.space[10]};
    padding-right: ${(props) => props.theme.space[10]};
  }
`;

export const GeologyImagesContainer = styled.div`
  position: relative;

  width: 327px;
  margin-right: auto;
  margin-left: auto;
`;

export const GeologyImageMobile = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateY(70%) translateX(130%);

  display: block;
  width: 90px;

  margin-left: auto;
  margin-right: auto;
`;

export const Name = styled.h2`
  margin-top: 98px;
  margin-bottom: ${(props) => props.theme.space[4]};

  color: ${(props) => props.theme.color.primary};
  font-family: ${(props) => props.theme.fontFamily.title};
  font-size: ${(props) => props.theme.size.XXM};
  line-height: 1.29;

  @media (min-width: 768px) {
    margin-bottom: ${(props) => props.theme.space[6]};

    font-size: ${(props) => props.theme.size.SL};
  }
`;

export const Content = styled.p`
  margin-bottom: ${(props) => props.theme.space[8]};

  color: ${(props) => props.theme.color.primary};
  font-family: ${(props) => props.theme.fontFamily.text};
  font-size: ${(props) => props.theme.size.S};
  line-height: 2;
  font-weight: ${(props) => props.theme.weight.normal};
`;

export const SourceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-bottom: ${(props) => props.theme.space[7]};

  color: ${(props) => props.theme.color.notActive};

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

export const SourceTitle = styled.p`
  margin-bottom: 0;

  font-weight: ${(props) => props.theme.weight.normal};
  font-size: ${(props) => props.theme.size.XS};
  line-height: 2.08;
`;

export const SourceLink = styled(NavLink)`
  display: inline-flex;
  flex-direction: row;
  align-items: center;

  color: ${(props) => props.theme.color.notActive};
  font-weight: ${(props) => props.theme.weight.bold};
  font-size: ${(props) => props.theme.size.XS};
  line-height: 2.08;
`;

export const SourceIcon = styled.img`
  display: block;
  margin-left: ${(props) => props.theme.space[1]};
`;

export const InfoList = styled.ul`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

export const InfoItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding-right: ${(props) => props.theme.space[6]};
  padding-left: ${(props) => props.theme.space[6]};
  padding-top: ${(props) => props.theme.space[4]};
  padding-bottom: ${(props) => props.theme.space[4]};

  border: 1px solid ${(props) => props.theme.color.border};

  &:not(:last-child) {
    margin-bottom: ${(props) => props.theme.space[2]};

    @media (min-width: 768px) {
      margin-bottom: 0;
      margin-right: ${(props) => props.theme.space[3]};
    }
  }

  @media (min-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    padding-left: ${(props) => props.theme.space[4]};
    padding-top: ${(props) => props.theme.space[5]};
    padding-bottom: ${(props) => props.theme.space[5]};

    min-width: 164px;
  }
`;

export const InfoTitle = styled.h4`
  color: ${(props) => props.theme.color.notActive};
  font-weight: ${(props) => props.theme.weight.bold};
  font-size: ${(props) => props.theme.size.N};
  line-height: 2;
  font-family: ${(props) => props.theme.fontFamily.title};

  @media (min-width: 768px) {
    margin-bottom: 6px;

    font-size: ${(props) => props.theme.size.S};
  }
`;

export const InfoData = styled.p`
  color: ${(props) => props.theme.color.primary};
  font-size: ${(props) => props.theme.size.XN};
  font-family: ${(props) => props.theme.fontFamily.title};
  line-height: 1.29;

  @media (min-width: 768px) {
    font-size: ${(props) => props.theme.size.XXN};
  }
`;

//tablet

export const ContentAndButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ContentContainer = styled.div`
  margin-right: 69px;

  text-align: left;
`;
