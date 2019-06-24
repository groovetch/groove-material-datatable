import React from "react";
import {spy, stub} from "sinon";
import {mount, shallow} from "enzyme";
import {assert, expect, should} from "chai";
import MaterialDatatableHead from "../src/MaterialDatatableHead";
import MaterialDatatableHeadCell from "../src/MaterialDatatableHeadCell";
import MaterialDatatableSelectCell from "../src/MaterialDatatableSelectCell";

describe("<MaterialDatatableHead />", function () {
    let columns;
    let handleHeadUpdateRef;

    before(() => {
        columns = [
            {name: "First Name", display: "true", sort: null},
            {name: "Company", display: "true", sort: null},
            {name: "City", display: "true", sort: null},
            {name: "State", display: "true", sort: null},
        ];

        handleHeadUpdateRef = () => {
        };
    });

    it("should render a table head", () => {
        const options = {};
        const toggleSort = () => {
        };

        const mountWrapper = mount(
            <MaterialDatatableHead
                columns={columns}
                options={options}
                setCellRef={() => {
                }}
                handleHeadUpdateRef={handleHeadUpdateRef}
                toggleSort={toggleSort}
            />,
        );
        const actualResult = mountWrapper.find(MaterialDatatableHeadCell);
        assert.strictEqual(actualResult.length, 4);
    });

    it("should render a table head with no cells", () => {
        const options = {};
        const toggleSort = () => {
        };

        const newColumns = columns.map(column => ({...column, display: false}));
        const mountWrapper = mount(
            <MaterialDatatableHead
                columns={newColumns}
                options={options}
                setCellRef={() => {
                }}
                handleHeadUpdateRef={handleHeadUpdateRef}
                toggleSort={toggleSort}
            />,
        );
        const actualResult = mountWrapper.find(MaterialDatatableHeadCell);
        assert.strictEqual(actualResult.length, 0);
    });


    it("should not render a table MaterialDatatableSelectCell when selectableRows true and onlyOneRowCanBeSelected true ", () => {
        const options = {selectableRows: true, onlyOneRowCanBeSelected: true};
        const toggleSort = () => {
        };

        const mountWrapper = mount(
            <MaterialDatatableHead
                columns={columns}
                options={options}
                setCellRef={() => {
                }}
                handleHeadUpdateRef={handleHeadUpdateRef}
                toggleSort={toggleSort}
            />,
        );

        const actualResult = mountWrapper.find(MaterialDatatableSelectCell);
        assert.strictEqual(actualResult.length, 0);
    });

    it("should render a table MaterialDatatableSelectCell when selectableRows true and onlyOneRowCanBeSelected false ", () => {
        const options = {selectableRows: true, onlyOneRowCanBeSelected: false};
        const toggleSort = () => {
        };

        const mountWrapper = mount(
            <MaterialDatatableHead
                columns={columns}
                options={options}
                setCellRef={() => {
                }}
                handleHeadUpdateRef={handleHeadUpdateRef}
                toggleSort={toggleSort}
            />,
        );

        const actualResult = mountWrapper.find(MaterialDatatableSelectCell);
        assert.strictEqual(actualResult.length, 1);
    });

    it("should trigger toggleSort prop callback when calling method handleToggleColumn", () => {
        const options = {sort: true};
        const toggleSort = spy();

        const shallowWrapper = shallow(
            <MaterialDatatableHead
                columns={columns}
                options={options}
                setCellRef={() => {
                }}
                handleHeadUpdateRef={handleHeadUpdateRef}
                toggleSort={toggleSort}
            />,
        ).dive();

        const instance = shallowWrapper.instance();
        instance.handleToggleColumn(2);
        shallowWrapper.update();

        assert.strictEqual(toggleSort.callCount, 1);
    });

    it("should trigger selectRowUpdate prop callback and selectChecked state update when calling method handleRowSelect", () => {
        const options = {sort: true, selectableRows: true};
        const rowSelectUpdate = spy();

        const shallowWrapper = shallow(
            <MaterialDatatableHead
                columns={columns}
                options={options}
                setCellRef={() => {
                }}
                handleHeadUpdateRef={handleHeadUpdateRef}
                selectRowUpdate={rowSelectUpdate}
            />,
        ).dive();

        const instance = shallowWrapper.instance();
        instance.handleRowSelect(2);
        shallowWrapper.update();

        let state = shallowWrapper.state();
        assert.strictEqual(rowSelectUpdate.callCount, 1);
    });
});
