
import { ChangeEvent } from "react";
import * as SC from "./TopicButtonsStyled"

const TopicButtons = () => {

    const topicHandler = (evt: ChangeEvent<HTMLInputElement>) => {
        console.log(evt.target.name)
    }

    return (
        <SC.StyledGroup >
            <SC.StyledButton name="overview" onClick={topicHandler}>overview</SC.StyledButton>
            <SC.StyledButton name="structure" onClick={topicHandler}>structure</SC.StyledButton>
            <SC.StyledButton name="surface" onClick={topicHandler}>surface</SC.StyledButton>
        </SC.StyledGroup>
    );
}

export default TopicButtons;