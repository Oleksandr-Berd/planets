
import { ChangeEvent } from "react";
import { useLocation } from "react-router-dom";

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

    const properColor = colorsArray.find(el => el[0] === active)

    const topicHandler = (evt: ChangeEvent<HTMLInputElement>) => {
        submitTopic(evt.currentTarget.name)
    }

    return (
        <SC.StyledGroup >
            {topics.map(({ name }) => (
                <SC.StyledButton key={name} name={name} onClick={topicHandler} ><SC.Text stressed={isStressed === name ? "active" : null} color={properColor![1]}>{name}</SC.Text></SC.StyledButton>

            ))}


        </SC.StyledGroup>
    );
}

export default TopicButtons;