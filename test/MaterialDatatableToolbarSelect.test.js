import React from "react";
import {spy, stub} from "sinon";
import {mount, shallow} from "enzyme";
import {assert, expect, should} from "chai";
import DeleteIcon from "@material-ui/icons/Delete";
import MaterialDatatableToolbarSelect from "../src/MaterialDatatableToolbarSelect";
import textLabels from "../src/textLabels";

describe("<MaterialDatatableSelectCell />", function () {
    before(() => {
    });

    it("should render table toolbar select", () => {
        const onRowsDelete = () => {
        };
        const mountWrapper = mount(
            <MaterialDatatableToolbarSelect
                options={{textLabels}}
                selectedRows={{data: [1]}}
                onRowsDelete={onRowsDelete}
            />,
        );

        const actualResult = mountWrapper.find(DeleteIcon);
        assert.strictEqual(actualResult.length, 1);
    });
});
