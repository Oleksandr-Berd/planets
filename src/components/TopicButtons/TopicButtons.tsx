
import { ChangeEvent } from "react";
import { useLocation } from "react-router-dom";

import * as SC from "./TopicButtonsStyled"

import { colorsArray } from "utils/planetColors";




const TopicButtons = ():JSX.Element => {

    const location = useLocation()
    
    const { pathname } = location;
    const active = pathname.slice(1)
    
    const properColor = colorsArray.find(el => el[0] === active)

    const topicHandler = (evt: ChangeEvent<HTMLInputElement>) => {
        console.log(evt.target.name)
    }

    return (
        <SC.StyledGroup >
            <SC.StyledButton name="overview" onClick={topicHandler}><SC.Text color={properColor![1]}>overview</SC.Text></SC.StyledButton>
            <SC.StyledButton name="structure" onClick={topicHandler}><SC.Text color={properColor![1]}>structure</SC.Text></SC.StyledButton>
            <SC.StyledButton name="surface" onClick={topicHandler}><SC.Text color={properColor![1]}>surface</SC.Text></SC.StyledButton>
        </SC.StyledGroup>
    );
}

export default TopicButtons;