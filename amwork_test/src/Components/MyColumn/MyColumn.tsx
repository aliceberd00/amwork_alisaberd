import React from "react";
// import {MyCard} from "../MyCard/MyCard";
import {IOneCardData} from "../../Types/dataTypes";
import MyCard from "../MyCard/MyCard";
interface Props {
    items: Array<IOneCardData>;
}
export function MyColumn (allCards: Props){
    return (
        <>
        {/*<MyCard items={[{title:"object_name",  completed: false, id: 100,userId: 100 }]}/>*/}

            {allCards.items.map((e) => {return <MyCard title={e.title} id={e.id} userId={e.userId} completed={e.completed} />})}
        </>
    )
}