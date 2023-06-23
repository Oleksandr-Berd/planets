
import { ChangeEvent, useState } from "react";
import { useLocation } from "react-router-dom";

import * as SC from "./TopicButtonsStyled"

import { colorsArray } from "utils/planetColors";

const topics = [
    { name: "overview" },
    { name: "structure" },
    { name: "surface" }
]


const TopicButtons = (): JSX.Element => {

    const [isStressed, setIsStressed] = useState<string>("overview")

    const location = useLocation()

    const { pathname } = location;
    const active = pathname.slice(1)

    const properColor = colorsArray.find(el => el[0] === active)

    const topicHandler = (evt: ChangeEvent<HTMLInputElement>) => {
        setIsStressed(evt.currentTarget.name)
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