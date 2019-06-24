import React from "react";
import {spy, stub} from "sinon";
import {mount, shallow} from "enzyme";
import {assert, expect, should} from "chai";
import {MaterialPopover, MaterialPopoverTarget, MaterialPopoverContent} from "../src/MaterialPopover";
import Popover from "@material-ui/core/Popover";

describe("<MaterialPopover />", function () {
    it("should render a popover", () => {
        const mountWrapper = mount(
            <MaterialPopover>
                <MaterialPopoverTarget>
                    <a href="#">Simple Link!</a>
                </MaterialPopoverTarget>
                <MaterialPopoverContent>Some content</MaterialPopoverContent>
            </MaterialPopover>,
        );

        const actualResult = mountWrapper.find(Popover);
        assert.strictEqual(actualResult.length, 1);
    });

    it("should not render a popover if children are not MaterialPopoverContent or MaterialPopoverTarget", () => {
        stub(console, "error");
        const mountWrapper = mount(
            <MaterialPopover>
                <div>testing</div>
            </MaterialPopover>,
        );

        assert(console.error.called);
        console.error.restore();
    });

    it("should return children when calling MaterialPopoverContent", () => {
        const shallowWrapper = shallow(<MaterialPopoverContent>Some content</MaterialPopoverContent>);

        assert.strictEqual(shallowWrapper.text(), "Some content");
    });

    it("should call handleOnExit when unmounting MaterialPopover", () => {
        const exitFunc = spy();
        const shallowWrapper = shallow(
            <MaterialPopover refExit={exitFunc}>
                <MaterialPopoverTarget>
                    <a href="#">Simple Link!</a>
                </MaterialPopoverTarget>
                <MaterialPopoverContent>Some content</MaterialPopoverContent>
            </MaterialPopover>,
        );

        const instance = shallowWrapper.instance();
        instance.handleOnExit();
        assert.strictEqual(exitFunc.callCount, 1);
    });

    it("should close popover when calling method handleRequestClose", () => {
        const refClose = spy();
        const mountWrapper = mount(
            <MaterialPopover refClose={refClose}>
                <MaterialPopoverTarget>
                    <a href="#">Simple Link!</a>
                </MaterialPopoverTarget>
                <MaterialPopoverContent>Some content</MaterialPopoverContent>
            </MaterialPopover>,
        );

        // open popover
        mountWrapper.setState({open: true});
        mountWrapper.update();
        let state = mountWrapper.state();

        assert.strictEqual(state.open, true);
        assert.strictEqual(mountWrapper.find(Popover).length, 1);

        // hide popover
        const instance = mountWrapper.instance();
        instance.handleRequestClose();
        mountWrapper.update();
        state = mountWrapper.state();

        assert.strictEqual(state.open, false);
        assert.strictEqual(refClose.callCount, 1);
    });

    it("should open popover when calling method handleClick", () => {
        const mountWrapper = mount(
            <MaterialPopover>
                <MaterialPopoverTarget>
                    <a href="#">Simple Link!</a>
                </MaterialPopoverTarget>
                <MaterialPopoverContent>Some content</MaterialPopoverContent>
            </MaterialPopover>,
        );

        let state = mountWrapper.state();
        const instance = mountWrapper.instance();
        assert.strictEqual(state.open, false);

        instance.handleClick();
        mountWrapper.update();

        state = mountWrapper.state();
        assert.strictEqual(state.open, true);
        assert.strictEqual(mountWrapper.find(Popover).length, 1);
    });
});
