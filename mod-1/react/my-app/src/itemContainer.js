import React, { useState } from 'react';

export const ItemContainer = (props) => {
    // console.log("PROPS ARE...", props)
    return (
        <div>
            {props.item.map((item, idx) => {
                return <p key={idx}>{item}</p>
            })}
        </div>
    )
}