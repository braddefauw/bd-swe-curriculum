import React, { useState } from 'react';

export const ItemContainer = (props) => {
    console.log("PROPS ARE...", props);
    return (
        <div>
            {props.item.map((x, idx) => {
                return <p key={idx}>{x}</p>
            })}
        </div>
    )
}