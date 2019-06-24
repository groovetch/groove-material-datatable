import React from "react";
import {spy, stub} from "sinon";
import {mount, shallow} from "enzyme";
import {assert, expect, should} from "chai";
import MaterialDatatable from "../src/MaterialDatatable";
import MaterialDatatableFilterList from "../src/MaterialDatatableFilterList";
import MaterialDatatablePagination from "../src/MaterialDatatablePagination";
import textLabels from "../src/textLabels";
import Chip from "@material-ui/core/Chip";
import Cities from "../examples/component/cities";

describe("<MaterialDatatable />", function () {
    let data;
    let displayData;
    let columns;
    let tableData;
    let renderCities = (value, tableMeta, updateValueFn) => (
        <Cities value={value.city} index={tableMeta.rowIndex} change={event => updateValueFn(event)}/>
    );
    let renderName = value => {
        return value.name.split(" ")[1] + ", " + value.name.split(" ")[0];
    };

    before(() => {
        columns = [
            {name: "Name", field: "name", options: {customBodyRender: renderName, width: 100}},
            {name: "Company", field: "company"},
            {name: "City", field: "city", options: {customBodyRender: renderCities, headerNoWrap: 200}},
            {name: "State", field: "state"},
        ];
        data = [
            {name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY"},
            {name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT"},
            {name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL"},
            {name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX"},
        ];
        // internal table data built from source data provided
        displayData = JSON.stringify([
            {
                data: ["James, Joe", "Test Corp", renderCities(data[0], {rowIndex: 0}), "NY"],
                dataObject: data[0],
                dataIndex: 0,
            },
            {
                data: ["Walsh, John", "Test Corp", renderCities(data[1], {rowIndex: 1}), "CT"],
                dataObject: data[1],
                dataIndex: 1,
            },
            {
                data: ["Herm, Bob", "Test Corp", renderCities(data[2], {rowIndex: 2}), "FL"],
                dataObject: data[2],
                dataIndex: 2,
            },
            {
                data: ["Houston, James", "Test Corp", renderCities(data[3], {rowIndex: 3}), "TX"],
                dataObject: data[3],
                dataIndex: 3,
            },
        ]);
        tableData = [
            {
                index: 0,
                data: {
                    name: "James, Joe",
                    company: "Test Corp",
                    city: renderCities(data[0], {rowIndex: 0}),
                    state: "NY",
                },
            },
            {
                index: 1,
                data: {
                    name: "Walsh, John",
                    company: "Test Corp",
                    city: renderCities(data[1], {rowIndex: 1}),
                    state: "CT",
                },
            },
            {
                index: 2,
                data: {
                    name: "Herm, Bob",
                    company: "Test Corp",
                    city: renderCities(data[2], {rowIndex: 2}),
                    state: "FL",
                },
            },
            {
                index: 3,
                data: {
                    name: "Houston, James",
                    company: "Test Corp",
                    city: renderCities(data[3], {rowIndex: 3}),
                    state: "TX",
                },
            },
        ];
    });

    it("should render a table", () => {
        const shallowWrapper = shallow(<MaterialDatatable columns={columns} data={data}/>);
        assert.strictEqual(
            shallowWrapper
                .dive()
                .dive()
                .name(),
            "Paper",
        );
    });

    it("should correctly build internal columns data structure", () => {
        const shallowWrapper = shallow(<MaterialDatatable columns={columns} data={data}/>);
        const actualResult = shallowWrapper.dive().state().columns;

        const expectedResult = [
            {
                display: "true",
                name: "Name",
                field: "name",
                sort: true,
                filter: true,
                width: 100,
                headerNoWrap: null,
                download: true,
                sortDirection: null,
                customBodyRender: renderName,
            },
            {
                display: "true",
                name: "Company",
                field: "company",
                sort: true,
                filter: true,
                width: null,
                headerNoWrap: null,
                download: true,
                sortDirection: null,
            },
            {
                display: "true",
                name: "City",
                field: "city",
                sort: true,
                filter: true,
                width: null,
                headerNoWrap: 200,
                download: true,
                sortDirection: null,
                customBodyRender: renderCities,
            },
            {
                display: "true",
                field: "state",
                name: "State",
                sort: true,
                filter: true,
                width: null,
                headerNoWrap: null,
                download: true,
                sortDirection: null,
            },
        ];

        assert.deepEqual(actualResult, expectedResult);
    });

    it("should correctly build internal table data and displayData structure", () => {
        const shallowWrapper = shallow(<MaterialDatatable columns={columns} data={data}/>);
        const state = shallowWrapper.dive().state();
        //assert.deepEqual(state.data, data);
        assert.deepEqual(JSON.stringify(state.displayData), displayData);
    });

    it("should correctly re-build internal table data and displayData structure with prop change", () => {
        const shallowWrapper = shallow(<MaterialDatatable columns={columns} data={data}/>);
        let state = shallowWrapper.dive().state();

        assert.deepEqual(JSON.stringify(state.displayData), displayData);

        // now use updated props

        let newData = [
            {name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY"},
            {name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT"},
            {name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL"},
            {name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX"},
        ];

        /*  let newData = data.map(item => new {}(item));*/
        newData[0].name = "testing";
        shallowWrapper.setProps({data: newData});
        shallowWrapper.update();

        state = shallowWrapper.dive().state();
        const expectedResult = [
            {index: 0, data: {name: "testing", company: "Test Corp", city: "Yonkers", state: "NY"}},
            {index: 1, data: {name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT"}},
            {index: 2, data: {name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL"}},
            {index: 3, data: {name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX"}},
        ];

        assert.deepEqual(state.data, expectedResult);
    });

    it("should not re-build internal table data and displayData structure with no prop change to data or columns", () => {
        const initializeTableSpy = spy(MaterialDatatable.Naked.prototype, "initializeTable");
        const mountWrapper = mount(shallow(<MaterialDatatable columns={columns} data={data}/>).get(0));

        let state = mountWrapper.state();
        assert.deepEqual(JSON.stringify(state.displayData), displayData);

        // now update props with no change
        mountWrapper.setProps({});
        mountWrapper.update();

        state = mountWrapper.state();

        assert.deepEqual(JSON.stringify(state.displayData), displayData);
        assert.deepEqual(initializeTableSpy.callCount, 1);
    });

    it("should correctly build internal filterList structure", () => {
        const shallowWrapper = shallow(<MaterialDatatable columns={columns} data={data}/>);
        const state = shallowWrapper.dive().state();
        const expectedResult = [[], [], [], []];

        assert.deepEqual(state.filterList, expectedResult);
    });

    it("should correctly build internal unique column data for filterData structure", () => {
        const shallowWrapper = shallow(<MaterialDatatable columns={columns} data={data}/>);
        const state = shallowWrapper.dive().state();
        const expectedResult = [
            ["Herm, Bob", "Houston, James", "James, Joe", "Walsh, John"],
            ["Test Corp"],
            ["Dallas", "Hartford", "Tampa", "Yonkers"],
            ["CT", "FL", "NY", "TX"],
        ];

        assert.deepEqual(state.filterData, expectedResult);
    });

    it("should correctly build internal rowsPerPage when provided in options", () => {
        const options = {
            rowsPerPage: 20,
            textLabels,
        };

        const shallowWrapper = shallow(<MaterialDatatable columns={columns} data={data} options={options}/>);
        const state = shallowWrapper.dive().state();
        assert.strictEqual(state.rowsPerPage, 20);
    });

    it("should correctly build internal rowsPerPageOptions when provided in options", () => {
        const options = {
            rowsPerPageOptions: [5, 10, 15],
        };

        const shallowWrapper = shallow(<MaterialDatatable columns={columns} data={data} options={options}/>);
        const state = shallowWrapper.dive().state();
        assert.deepEqual(state.rowsPerPageOptions, [5, 10, 15]);
    });

    it("should render pagination when enabled in options", () => {
        const options = {
            pagination: true,
        };

        const mountWrapper = mount(<MaterialDatatable columns={columns} data={data} options={options}/>);
        const actualResult = mountWrapper.find(MaterialDatatablePagination);
        assert.lengthOf(actualResult, 1);
    });

    it("should not render pagination when disabled in options", () => {
        const options = {
            pagination: false,
        };

        const mountWrapper = mount(<MaterialDatatable columns={columns} data={data} options={options}/>);
        const actualResult = mountWrapper.find(MaterialDatatablePagination);
        assert.lengthOf(actualResult, 0);
    });

    it("should properly set internal filterList when calling filterUpdate method with type=checkbox", () => {
        const shallowWrapper = shallow(<MaterialDatatable columns={columns} data={data}/>);
        const table = shallowWrapper.dive();
        const instance = table.instance();
        instance.filterUpdate(0, "Joe James", "checkbox");
        table.update();

        const state = table.state();
        assert.deepEqual(state.filterList, [["Joe James"], [], [], []]);
    });

    it("should remove entry from filterList when calling filterUpdate method with type=checkbox and same arguments a second time", () => {
        const shallowWrapper = shallow(<MaterialDatatable columns={columns} data={data}/>);
        const table = shallowWrapper.dive();
        const instance = table.instance();
        instance.filterUpdate(0, "Joe James", "checkbox");
        table.update();

        let state = table.state();
        assert.deepEqual(state.filterList, [["Joe James"], [], [], []]);

        instance.filterUpdate(0, "Joe James", "checkbox");
        table.update();

        state = table.state();
        assert.deepEqual(state.filterList, [[], [], [], []]);
    });

    it("should properly set internal filterList when calling filterUpdate method with type=dropdown", () => {
        const shallowWrapper = shallow(<MaterialDatatable columns={columns} data={data}/>);
        const table = shallowWrapper.dive();
        const instance = table.instance();
        instance.filterUpdate(0, "Joe James", "dropdown");
        table.update();

        const state = table.state();
        assert.deepEqual(state.filterList, [["Joe James"], [], [], []]);
    });

    it("should create Chip when filterList is populated", () => {
        const filterList = [["Joe James"], [], [], []];

        const mountWrapper = mount(<MaterialDatatableFilterList filterList={filterList} filterUpdate={() => true}/>);
        const actualResult = mountWrapper.find(Chip);
        assert.strictEqual(actualResult.length, 1);
    });

    it("should remove entry from filterList when calling filterUpdate method with type=dropdown and same arguments a second time", () => {
        const shallowWrapper = shallow(<MaterialDatatable columns={columns} data={data}/>);
        const table = shallowWrapper.dive();
        const instance = table.instance();
        instance.filterUpdate(0, "Joe James", "dropdown");
        table.update();

        let state = table.state();
        assert.deepEqual(state.filterList, [["Joe James"], [], [], []]);

        instance.filterUpdate(0, "Joe James", "dropdown");
        table.update();

        state = table.state();
        assert.deepEqual(state.filterList, [[], [], [], []]);
    });

    it("should properly reset internal filterList when calling resetFilters method", () => {
        // set a filter
        const shallowWrapper = shallow(<MaterialDatatable columns={columns} data={data}/>);
        const table = shallowWrapper.dive();
        const instance = table.instance();
        instance.filterUpdate(0, "Joe James", "checkbox");
        table.update();

        // now remove it
        let state = table.state();
        assert.deepEqual(state.filterList, [["Joe James"], [], [], []]);

        instance.resetFilters();
        table.update();
        state = table.state();
        assert.deepEqual(state.filterList, [[], [], [], []]);
    });

    it("should properly set searchText when calling searchTextUpdate method", () => {
        const shallowWrapper = shallow(<MaterialDatatable columns={columns} data={data}/>);
        const table = shallowWrapper.dive();
        const instance = table.instance();

        instance.searchTextUpdate("Joe");
        table.update();
        const state = table.state();

        const expectedResult = JSON.stringify([
            {
                data: ["James, Joe", "Test Corp", renderCities(data[0], {rowIndex: 0}), "NY"],
                dataObject: data[0],
                dataIndex: 0
            },
        ]);

        assert.deepEqual(JSON.stringify(state.displayData), expectedResult);
    });

    it("should sort provided column when calling toggleSortColum method", () => {
        const shallowWrapper = shallow(<MaterialDatatable columns={columns} data={data}/>).dive();
        const instance = shallowWrapper.instance();

        instance.toggleSortColumn(0);
        shallowWrapper.update();
        const state = shallowWrapper.state();

        const expectedResult = JSON.stringify([
            {
                data: ["Herm, Bob", "Test Corp", renderCities(data[2], {rowIndex: 0}), "FL"],
                dataObject: data[2],
                dataIndex: 2
            },
            {
                data: ["Houston, James", "Test Corp", renderCities(data[3], {rowIndex: 1}), "TX"],
                dataObject: data[3],
                dataIndex: 3
            },
            {
                data: ["James, Joe", "Test Corp", renderCities(data[0], {rowIndex: 2}), "NY"],
                dataObject: data[0],
                dataIndex: 0
            },
            {
                data: ["Walsh, John", "Test Corp", renderCities(data[1], {rowIndex: 3}), "CT"],
                dataObject: data[1],
                dataIndex: 1
            },
        ]);

        assert.deepEqual(JSON.stringify(state.displayData), expectedResult);
    });

    it("should toggle provided column when calling toggleViewCol method", () => {
        const shallowWrapper = shallow(<MaterialDatatable columns={columns} data={data}/>).dive();
        const instance = shallowWrapper.instance();

        instance.toggleViewColumn(0);
        shallowWrapper.update();
        const state = shallowWrapper.state();

        const expectedResult = [
            {
                name: "Name",
                field: "name",
                display: "false",
                sort: true,
                filter: true,
                width: 100,
                headerNoWrap: null,
                download: true,
                sortDirection: null,
                customBodyRender: renderName,
            },
            {
                name: "Company",
                field: "company",
                display: "true",
                sort: true,
                filter: true,
                width: null,
                headerNoWrap: null,
                download: true,
                sortDirection: null,
            },
            {
                name: "City",
                field: "city",
                display: "true",
                sort: true,
                filter: true,
                width: null,
                headerNoWrap: 200,
                download: true,
                sortDirection: null,
                customBodyRender: renderCities,
            },
            {
                name: "State",
                field: "state",
                display: "true",
                sort: true,
                filter: true,
                width: null,
                headerNoWrap: null,
                download: true,
                sortDirection: null,
            },
        ];

        assert.deepEqual(state.columns, expectedResult);
    });

    it("should get displayable data when calling getDisplayData method", () => {

        const data = [
            {name: "James, Joe", company: "Test Corp", city: "Yonkers", state: "NY"},
            {name: "Walsh, John", company: "Test Corp", city: "Hartford", state: "CT"},
            {name: "Herm, Bob", company: "Test Corp", city: "Tampa", state: "FL"},
            {name: "Houston, James", company: "Test Corp", city: "Dallas", state: "TX"},
        ];

        const data2 = [
            {name: "James, Joe", company: "Test Corp", city: renderCities(data[0], {rowIndex: 0}), state: "NY"},
            {name: "Walsh, John", company: "Test Corp", city: renderCities(data[1], {rowIndex: 1}), state: "CT"},
            {name: "Herm, Bob", company: "Test Corp", city: renderCities(data[2], {rowIndex: 2}), state: "FL"},
            {name: "Houston, James", company: "Test Corp", city: renderCities(data[3], {rowIndex: 3}), state: "TX"},
        ];

        const expectedResult = [
            {
                data: ["James, Joe", "Test Corp", renderCities(data[0], {rowIndex: 0}), "NY"],
                dataObject: data2[0],
                dataIndex: 0,
            },
            {
                data: ["Walsh, John", "Test Corp", renderCities(data[1], {rowIndex: 1}), "CT"],
                dataObject: data2[1],
                dataIndex: 1,
            },
            {
                data: ["Herm, Bob", "Test Corp", renderCities(data[2], {rowIndex: 2}), "FL"],
                dataObject: data2[2],
                dataIndex: 2,
            },
            {
                data: ["Houston, James", "Test Corp", renderCities(data[3], {rowIndex: 3}), "TX"],
                dataObject: data2[3],
                dataIndex: 3,
            },
        ];


        const shallowWrapper = shallow(<MaterialDatatable columns={columns} data={data}/>).dive();
        const instance = shallowWrapper.instance();
        const state = shallowWrapper.state();

        const actualResult = instance.getDisplayData(columns, tableData, state.filterList, "");
        assert.deepEqual(JSON.stringify(actualResult), JSON.stringify(expectedResult));
    });

    it("should update rowsPerPage when calling changeRowsPerPage method", () => {
        const shallowWrapper = shallow(<MaterialDatatable columns={columns} data={data}/>).dive();
        const instance = shallowWrapper.instance();

        instance.changeRowsPerPage(10);
        shallowWrapper.update();

        const state = shallowWrapper.state();
        assert.deepEqual(state.rowsPerPage, 10);
    });

    it("should update page position when calling changePage method", () => {
        const shallowWrapper = shallow(<MaterialDatatable columns={columns} data={data}/>).dive();
        const instance = shallowWrapper.instance();

        instance.changePage(2);
        shallowWrapper.update();

        const state = shallowWrapper.state();
        assert.deepEqual(state.page, 2);
    });

    it("should update selectedRows when calling selectRowUpdate method with type=head", () => {
        const shallowWrapper = shallow(<MaterialDatatable columns={columns} data={data}/>).dive();
        const instance = shallowWrapper.instance();

        instance.selectRowUpdate("head", 0, null);
        shallowWrapper.update();

        const state = shallowWrapper.state();
        const expectedResult = [
            {index: 0, dataIndex: 0},
            {index: 1, dataIndex: 1},
            {index: 2, dataIndex: 2},
            {index: 3, dataIndex: 3},
        ];
        assert.deepEqual(state.selectedRows.data, expectedResult);
    });

    it("should update selectedRows when calling selectRowUpdate method with type=cell", () => {
        const shallowWrapper = shallow(<MaterialDatatable columns={columns} data={data}/>).dive();
        const instance = shallowWrapper.instance();

        instance.selectRowUpdate("cell", 0, null);
        shallowWrapper.update();

        const state = shallowWrapper.state();
        assert.deepEqual(state.selectedRows.data, [0]);
    });

    it("should update selectedRows calling onRowsSelect", () => {
        const onRowsSelect = spy();
        
        const shallowWrapper = shallow(<MaterialDatatable 
            columns={columns} 
            data={data}
            options={{onRowsSelect : onRowsSelect}}
            
        />).dive();
        const instance = shallowWrapper.instance();

        instance.selectRowUpdate("cell", 0, null);
        shallowWrapper.update();

        assert.strictEqual(onRowsSelect.callCount, 1);
    });

    it("should update selectedRows not calling onRowsSelect when selectableRows false", () => {
        const onRowsSelect = spy();

        const shallowWrapper = shallow(<MaterialDatatable
            columns={columns}
            data={data}
            options={{onRowsSelect : onRowsSelect, selectableRows: false}}

        />).dive();
        const instance = shallowWrapper.instance();

        instance.selectRowUpdate("cell", 0, null);
        shallowWrapper.update();

        assert.strictEqual(onRowsSelect.callCount, 0);
    });

    it("should update selectedRows calling onRowsSelect when selectableRows true", () => {
        const onRowsSelect = spy();

        const shallowWrapper = shallow(<MaterialDatatable
            columns={columns}
            data={data}
            options={{onRowsSelect : onRowsSelect, selectableRows: true}}

        />).dive();
        const instance = shallowWrapper.instance();

        instance.selectRowUpdate("cell", 0, null);
        shallowWrapper.update();

        assert.strictEqual(onRowsSelect.callCount, 1);
    });

    it("should update selectedRows calling onRowClick", () => {
        const onRowClick = spy();

        const shallowWrapper = shallow(<MaterialDatatable
            columns={columns}
            data={data}
            options={{onRowClick : onRowClick}}

        />).dive();
        const instance = shallowWrapper.instance();

        instance.selectRowUpdate("cell", {rowIndex: 1, dataIndex: 1}, data[1]);
        shallowWrapper.update();

        assert.strictEqual(onRowClick.callCount, 1);
        assert(onRowClick.calledWith(data[1], {rowIndex: 1, dataIndex: 1}));
    });
    

    it("should insert into selectedRows twice when calling selectRowUpdate method with type=cell and constance just one when onlyOneRowCanBeSelected is false ", () => {
        const shallowWrapper = shallow(<MaterialDatatable
            columns={columns} data={data}
            options={{onlyOneRowCanBeSelected: false}}/>).dive();
        
        const instance = shallowWrapper.instance();

        instance.selectRowUpdate("cell", {dataIndex: 0});
        instance.selectRowUpdate("cell", {dataIndex: 1});
        shallowWrapper.update();

        const state = shallowWrapper.state();
        assert.deepEqual(state.selectedRows.data.length, 2);
    });


    it("should insert into selectedRows type cell twice when calling selectableRows false not modify selectedRows", () => {
        const shallowWrapper = shallow(<MaterialDatatable
            columns={columns} data={data}
            options={{selectableRows: false}}/>).dive();

        const instance = shallowWrapper.instance();

        instance.selectRowUpdate("cell", {dataIndex: 0}, null);
        instance.selectRowUpdate("cell", {dataIndex: 1}, null);
        shallowWrapper.update();

        const state = shallowWrapper.state();
        assert.deepEqual(state.selectedRows.data.length, 0);
    });

    it("should insert into selectedRows type head twice when calling selectableRows false not modify selectedRows", () => {
        const shallowWrapper = shallow(<MaterialDatatable
            columns={columns} data={data}
            options={{selectableRows: false}}/>).dive();

        const instance = shallowWrapper.instance();

        instance.selectRowUpdate("head", {dataIndex: 0}, null);
        shallowWrapper.update();

        const state = shallowWrapper.state();
        assert.deepEqual(state.selectedRows.data.length, 0);
    });


    it("should selectRowUpdate when calling selectableRows true modify selectedRows", () => {
        const shallowWrapper = shallow(<MaterialDatatable
            columns={columns} data={data}
            options={{selectableRows: true}}/>).dive();

        const instance = shallowWrapper.instance();

        instance.selectRowUpdate("head", {dataIndex: 0}, null);
        shallowWrapper.update();

        const state = shallowWrapper.state();
        assert.deepEqual(state.selectedRows.data.length, data.length);
    });

    it("should insert into selectedRows twice when calling selectRowUpdate method with type=cell and constance just one when onlyOneRowCanBeSelected is true ", () => {
        const shallowWrapper = shallow(<MaterialDatatable
            columns={columns} data={data}
            options={{onlyOneRowCanBeSelected: true}}/>).dive();

        const instance = shallowWrapper.instance();

        instance.selectRowUpdate("cell", {dataIndex: 0});
        instance.selectRowUpdate("cell", {dataIndex: 1});
        shallowWrapper.update();

        const state = shallowWrapper.state();
        assert.deepEqual(state.selectedRows.data.length, 1);
    });
    

    it("should update value when calling updateValue method in customBodyRender", () => {
        const shallowWrapper = shallow(<MaterialDatatable columns={columns} data={data}/>).dive();
        const instance = shallowWrapper.instance();

        instance.updateDataCol(0, 2, "Las Vegas");
        shallowWrapper.update();

        const state = shallowWrapper.state();
        assert.deepEqual(state.data[0].data[2], "Las Vegas");
    });
    it("should call onTableChange when calling selectRowUpdate method with type=head", () => {
        const options = {selectableRows: true, onTableChange: spy()};
        const shallowWrapper = shallow(<MaterialDatatable columns={columns} data={data} options={options}/>).dive();
        const instance = shallowWrapper.instance();

        instance.selectRowUpdate("head", 0);
        shallowWrapper.update();

        const state = shallowWrapper.state();
        const expectedResult = [
            {index: 0, dataIndex: 0},
            {index: 1, dataIndex: 1},
            {index: 2, dataIndex: 2},
            {index: 3, dataIndex: 3},
        ];
        assert.deepEqual(state.selectedRows.data, expectedResult);
        assert.strictEqual(options.onTableChange.callCount, 1);
    });
    it("should call onTableChange when calling selectRowUpdate method with type=cell", () => {
        const options = {selectableRows: true, onTableChange: spy()};

        const shallowWrapper = shallow(<MaterialDatatable columns={columns} data={data} options={options}/>).dive();
        const instance = shallowWrapper.instance();

        instance.selectRowUpdate("cell", 0);
        shallowWrapper.update();

        const state = shallowWrapper.state();
        assert.deepEqual(state.selectedRows.data, [0]);
        assert.strictEqual(options.onTableChange.callCount, 1);
    });
});
