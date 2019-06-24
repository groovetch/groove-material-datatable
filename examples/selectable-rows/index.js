import React from "react";
import ReactDOM from "react-dom";
import MaterialDatatable from "../../src/";
import Button from "@material-ui/core/Button/Button";

class Example extends React.Component {

    state = {
        tableState: undefined
    };

    constructor(props, context, state) {
        super(props, context);
    }

    render() {
        const columns = [
            {
                name: 'Name',
                field: 'name',
                options: {
                    width: 70,

                },
            },
            {
                name: 'Title',
                field: 'title'
            },
            {
                name: 'Location',
                field: 'location'
            },
            {
                name: 'Age',
                field: 'age'
            },
            {
                name: 'Salary',
                field: 'salary'
            },
            {
                name: 'Veeeeery loooooooooong title',
                field: 'salary',
                options: {
                    width: 100,
                    headerNoWrap: true,
                    customBodyRender: (value, tableMeta, updateValue) => {
                        return (
                            <Button size="large" variant={"contained"} color={"secondary"}>
                                Edit
                            </Button>
                        );
                    },
                    customValue: (dataObject) => {
                        return dataObject.salary + "Edit";
                    },
                },
            }
            ,
            {
                name: 'SubFieldData',
                field: 'subFieldData',
                options: {
                    width: 100,
                    headerNoWrap: true,
                    customBodyRender: (dataObject, tableMeta, updateValue) => {
                        return (
                            <div>
                                <Button size="large" variant={"contained"} color={"secondary"}>
                                    {dataObject.salary * 10}
                                </Button>
                            </div>
                        );
                    },
                    customSortValue: (dataObject) => {
                        return (dataObject.salary * 10);
                    },
                    customValue: (dataObject) => {
                        return (dataObject.salary * 10);
                    },

                },
            }
        ];

        const data = [
            {
                name: "Veeeeery loooooooooong naaaaaaaaaaame",
                title: "Title 1",
                location: "Location 1",
                age: 30,
                salary: 10,
                subFieldData: {value: "11111111"}
            },
            {
                name: "Name 2",
                title: "Title 2",
                location: "Location 2",
                age: 31,
                salary: 11,
                subFieldData: {value: "222222222"}
            },
            {
                name: "Name 2",
                title: "Title 3",
                location: "Location 2",
                age: 31,
                salary: 11,
                subFieldData: {value: "222222222"}
            },
            {
                name: "Name 2",
                title: "Title 4",
                location: "Location 2",
                age: 31,
                salary: 11,
                subFieldData: {value: "222222222"}
            },
            {
                name: "Name 2",
                title: "Title 5",
                location: "Location 2",
                age: 31,
                salary: 11,
                subFieldData: {value: "222222222"}
            },
            {
                name: "Name 2",
                title: "Title 6",
                location: "Location 2",
                age: 31,
                salary: 11,
                subFieldData: {value: "222222222"}
            },
            {
                name: "Name 2",
                title: "Title 7",
                location: "Location 2",
                age: 31,
                salary: 11,
                subFieldData: {value: "222222222"}
            },
            {
                name: "Name 2",
                title: "Title 8",
                location: "Location 2",
                age: 31,
                salary: 11,
                subFieldData: {value: "222222222"}
            },
            {
                name: "Name 2",
                title: "Title 9",
                location: "Location 2",
                age: 31,
                salary: 11,
                subFieldData: {value: "222222222"}
            },
            {
                name: "Name 2",
                title: "Title 10",
                location: "Location 2",
                age: 31,
                salary: 11,
                subFieldData: {value: "222222222"}
            },
            {
                name: "Name 2",
                title: "Title 11",
                location: "Location 2",
                age: 31,
                salary: 11,
                subFieldData: {value: "222222222"}
            },
            {
                name: "Name 1",
                title: "Title 1",
                location: "Location 1",
                age: 31,
                salary: 11,
                subFieldData: {value: "222222222"}
            },
            {
                name: "Name 2",
                title: "Title 2",
                location: "Location 2",
                age: 31,
                salary: 11,
                subFieldData: {value: "222222222"}
            },
            {
                name: "Name 3",
                title: "Title 3",
                location: "Location 3",
                age: 31,
                salary: 11,
                subFieldData: {value: "222222222"}
            },
            {
                name: "Name 2",
                title: "Title 15",
                location: "Location 2",
                age: 31,
                salary: 11,
                subFieldData: {value: "222222222"}
            },
            {
                name: "Name 2",
                title: "Title 16",
                location: "Location 2",
                age: 31,
                salary: 11,
                subFieldData: {value: "222222222"}
            },
            {
                name: "Name 2",
                title: "Title 17",
                location: "Location 2",
                age: 31,
                salary: 11,
                subFieldData: {value: "222222222"}
            },
        ];

        let options = {
            filter: true,
            selectableRows: true,
            usePaperPlaceholder: false,
            filterType: 'multiselect',
            responsive: 'stacked',
            rowCursorHand: true,
            rowsSelected: [1],
            showSelectedRowsToolbar: false,
            onlyOneRowCanBeSelected: true,
            componentWillReceiveProps: true,
            page: 0,
            sortColumnIndex: 2,
            sortColumnDirection: "desc",
            filterList: [[], [], ["Location 2"], [], [], [], []],

            onTableChange: (action, state) => this.onChange(state),
            onRowClick: (rowObject) => this.handleOnClick(rowObject)
        };

        if (this.state.tableState !== undefined && this.state.tableState !== null) {
            options.filterList = this.state.tableState.filterList;
            options.searchText = this.state.tableState.searchText;
            options.page = this.state.tableState.page;
            options.rowsPerPage = this.state.tableState.rowsPerPage;
            options.sortColumnDirection = this.state.tableState.sortColumnDirection;
            options.sortColumnIndex = this.state.tableState.sortColumnIndex;
            options.rowsSelected = this.state.tableState.rowsSelected;
        }
        return (
            <MaterialDatatable
                title={"ACME Employee list"}
                data={data}
                columns={columns}
                options={options}
            />
        );

    }
    
    handleOnClick(rowObject){
        console.log(rowObject);
        
        this.setState({
            ...this.state
        });
    }

    onChange(tableState) {
        this.setState({
            tableState: tableState
        });
    }
}

ReactDOM.render(<Example/>, document.getElementById("app-root"));
