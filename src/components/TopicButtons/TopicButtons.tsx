
import { ChangeEvent } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from '@mui/material';

import * as SC from "./TopicButtonsStyled"

import { colorsArray } from "utils/planetColors";
import topics from "dataBase/topics.json"

interface iProps {
    isStressed: string,
    submitTopic: Function
}

const TopicButtons = ({ isStressed, submitTopic }: iProps): JSX.Element => {

    const location = useLocation()

    const { pathname } = location;
    const active = pathname.slice(1)

    const isMobile = useMediaQuery('(max-width:767px)')

    const isTablet = useMediaQuery('(min-width:768px)')

    const properColor = colorsArray.find(el => el[0] === active)

    const topicHandler = (evt: ChangeEvent<HTMLInputElement>) => {
        submitTopic(evt.currentTarget.name)
    }

    const setSequenceNumber = (idx:number):string => {
        return "0" + (idx + 1)
    }

    return (<>
    
    {isMobile ?
            <SC.StyledGroup >
                {topics.map(({ name }) => (
                    
                    <SC.StyledButton key={name} name={name} onClick={topicHandler} ><SC.Text stressed={isStressed === name ? "active" : null} color={properColor![1]}>{name}</SC.Text></SC.StyledButton>

                ))}


            </SC.StyledGroup>
    : null}
    
        {isTablet ?
            <SC.StyledGroup >
                {topics.map(({ name }, idx) => (
                    <SC.StyledButton key={name} name={name} onClick={topicHandler} stressed={isStressed === name ? "active" : null} color={properColor![1]}><SC.SequenceNumber>{setSequenceNumber(idx)}</SC.SequenceNumber><SC.Text stressed={isStressed === name ? "active" : null} color={properColor![1]}>{name}</SC.Text></SC.StyledButton>

                ))}


            </SC.StyledGroup>
        
        : null}
    </>
        
    );
}

export default TopicButtons;