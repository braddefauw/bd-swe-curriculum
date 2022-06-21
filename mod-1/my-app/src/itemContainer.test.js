import React from "react";
import renderer from 'react-test-renderer';
import { ItemContainer } from './itemContainer';

describe("Item container component", () => {
    test("renders Item Container component as expected", () => {
        const component = renderer.create(<ItemContainer />)
        const snapshot = component.toJSON();
        console.log("What does our snapshot look like? ", snapshot)
    })
})