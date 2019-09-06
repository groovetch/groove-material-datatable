import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import MaterialDatatableToolbar from "./MaterialDatatableToolbar";
import MaterialDatatableToolbarSelect from "./MaterialDatatableToolbarSelect";
import MaterialDatatableFilterList from "./MaterialDatatableFilterList";
import MaterialDatatableBody from "./MaterialDatatableBody";
import MaterialDatatableResize from "./MaterialDatatableResize";
import MaterialDatatableHead from "./MaterialDatatableHead";
import MaterialDatatablePagination from "./MaterialDatatablePagination";
import cx from "classnames";
import debounce from "lodash.debounce";
import cloneDeep from "lodash.clonedeep";
import merge from "lodash.merge";
import textLabels from "./textLabels";
import {withStyles} from "@material-ui/core/styles";


const defaultTableStyles = {
  root: {},
  responsiveScroll: {
      overflowX: "auto",
  },
  caption: {
      position: "absolute",
      left: "-1000px",
  },
  liveAnnounce: {
      border: "0",
      clip: "rect(0 0 0 0)",
      height: "1px",
      margin: "-1px",
      overflow: "hidden",
      padding: "0",
      position: "absolute",
      width: "1px",
  },
  tableSection: {
    position: 'relative',
    zIndex: 1,
  },
  tableTopToolbarSection: {
    position: 'relative',
    zIndex: '10',
  },
  overlayStickyTableSection: {
    position: 'relative',
    zIndex: 5,
  },
  overlayStickyTableWrapper: {
    position: 'absolute',
    width: 285,
    left: 0,
    top: 0,
    backgroundColor: '#ffffff',
    overflowX: 'hidden',
    boxShadow: '1px 0px 2px -3px rgba(0,0,0,.2)',

    '& thead tr': {
      backgroundColor: 'white'
    }
  },
  overlayStickyBackground: {
    backgroundColor: '#fdfdfd',
  }
};

const TABLE_LOAD = {
    INITIAL: 1,
    UPDATE: 2,
};

class MaterialDatatable extends React.Component {
    static propTypes = {
        /** Title of the table */
        title: PropTypes.string.isRequired,
        /** Data used to describe table */
        data: PropTypes.array.isRequired,
        /** Columns used to describe table */
        columns: PropTypes.PropTypes.arrayOf(
            PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.shape({
                    name: PropTypes.string.isRequired,
                    options: PropTypes.shape({
                        display: PropTypes.string, // enum('true', 'false', 'excluded')
                        filter: PropTypes.bool,
                        width: PropTypes.number,
                        headerNoWrap: PropTypes.bool,
                        sort: PropTypes.bool,
                        download: PropTypes.bool,
                        customHeadRender: PropTypes.func,
                        customBodyRender: PropTypes.func,
                        customSortValue: PropTypes.func,
                        customValue: PropTypes.func,
                    }),
                }),
            ]),
        ).isRequired,
        /** Options used to describe table */
        options: PropTypes.shape({
            hasStickyColumn: PropTypes.bool,
            stickyColumns: PropTypes.array,
            responsive: PropTypes.oneOf(["stacked", "scroll"]),
            filterType: PropTypes.oneOf(["dropdown", "checkbox", "multiselect"]),
            textLabels: PropTypes.object,
            pagination: PropTypes.bool,
            usePaperPlaceholder: PropTypes.bool,
            customToolbar: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
            customToolbarSelect: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
            customFooter: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
            onRowClick: PropTypes.func,
            resizableColumns: PropTypes.bool,
            sortColumnIndex: PropTypes.number,
            sortColumnDirection: PropTypes.string,
            selectableRows: PropTypes.bool,
            rowCursorHand: PropTypes.bool,
            onlyOneRowCanBeSelected: PropTypes.bool,
            showSelectedRowsToolbar: PropTypes.bool,
            rowsSelected: PropTypes.array,
            serverSide: PropTypes.bool,
            onTableChange: PropTypes.func,
            caseSensitive: PropTypes.bool,
            rowHover: PropTypes.bool,
            page: PropTypes.number,
            count: PropTypes.number,
            filterList: PropTypes.array,
            rowsPerPage: PropTypes.number,
            rowsPerPageOptions: PropTypes.array,
            filter: PropTypes.bool,
            sort: PropTypes.bool,
            search: PropTypes.bool,
            searchText: PropTypes.string,
            print: PropTypes.bool,
            viewColumns: PropTypes.bool,
            download: PropTypes.bool,
            downloadOptions: PropTypes.shape({
                filename: PropTypes.string,
                separator: PropTypes.string,
            }),
            useOnRowHoverOverlay: PropTypes.bool,
            onRowHoverOverlayRender: PropTypes.func,
        }),
        /** Pass and use className to style MaterialDatatable as desired */
        className: PropTypes.string,
    };

    static defaultProps = {
        title: "",
        options: {},
        data: [],
        columns: [],
    };

    state = {
      isShowingStickyTable: true,
      isBackgroundStickyStatus: false,
      announceText: null,
      activeColumn: null,
      data: [],
      displayData: [],
      notModifiedDisplayData: [],
      page: 0,
      rowsPerPage: 10,
      columns: [],
      filterData: [],
      filterList: [],
      selectedRows: {
          data: [],
          lookup: {},
      },
      rowsSelected:[],
      sortColumnIndex: null,
      sortColumnDirection: null,
      showResponsive: false,
      searchText: null,
    };

    constructor(props) {
        super(props);
        this.tableRef = false;
        this.tableContent = React.createRef();
        this.headCellRefs = {};
        this.setHeadResizeable = () => {
        };
    }

    componentWillMount() {
        this.initializeTable(this.props);
    }

    onScrollLeftHandler = table => {
        console.log('scrolled: ', table.scrollLeft);

        if (table.scrollLeft > 0 && !this.state.isBackgroundStickyStatus) {
          this.setState({
            isBackgroundStickyStatus: true,
          });
        }

        if (table.scrollLeft === 0) {
          this.setState({
            isBackgroundStickyStatus: false,
          });
        }
    };

    componentDidMount() {
      this.setHeadResizeable(this.headCellRefs, this.tableRef);
      this.setInitialSort(this.props);

      const tableDefault = document.querySelector('.table-section-default');
      tableDefault.addEventListener('scroll',debounce(() => this.onScrollLeftHandler(tableDefault), 30));
    }

    componentWillUnmount() {
      const tableDefault = document.querySelector('.table-section-default');
      tableDefault.removeEventListener('scroll', () => this.onScrollLeftHandler(tableDefault));

      this.setState({
        isBackgroundStickyStatus: false,
      });
    }


    componentWillReceiveProps(nextProps) {
      if (this.props.data !== nextProps.data || this.props.columns !== nextProps.columns) {
          if (this.props.options === undefined || this.props.options.componentWillReceiveProps === undefined || this.props.options.componentWillReceiveProps === true) {
              this.initializeTable(nextProps);
              this.setInitialSort(nextProps);
          }
      }
    }

    initializeTable(props) {
        this.getDefaultOptions(props);
        this.setTableOptions(props);
        this.setTableData(props, TABLE_LOAD.INITIAL);
    }

    setInitialSort(props) {
        if (props.options.sortColumnIndex !== null && props.options.sortColumnIndex !== undefined && props.options.sortColumnDirection !== null && props.options.sortColumnDirection !== undefined) {
            if (props.options.sortColumnIndex >= 0 && props.options.sortColumnIndex < props.columns.length && (props.options.sortColumnDirection === "asc" || props.options.sortColumnDirection === "desc")) {
                this.sortTableData(props.options.sortColumnIndex, props.options.sortColumnDirection, false);
            }
        }
    }

    //React currently does not support deep merge for defaultProps. Objects are overwritten
    getDefaultOptions(props) {
        const defaultOptions = {
            responsive: "stacked",
            filterType: "checkbox",
            usePaperPlaceholder: true,
            pagination: true,
            textLabels,
            resizableColumns: false,
            selectableRows: true,
            rowCursorHand: false,
            onlyOneRowCanBeSelected: false,
            showSelectedRowsToolbar: true,
            caseSensitive: false,
            serverSide: false,
            rowHover: true,
            rowsPerPage: 10,
            rowsPerPageOptions: [10, 15, 100],
            filter: true,
            sortFilterList: true,
            sort: true,
            sortColumnIndex: null,
            sortColumnDirection: null,
            search: true,
            searchText: null,
            print: true,
            viewColumns: true,
            download: true,
            componentWillReceiveProps: true,
            downloadOptions: {
                filename: "tableDownload.csv",
                separator: ",",
            },
            useOnRowOverlay: false,
            onRowOverlayRender: () => null,
        };

        this.options = merge(defaultOptions, props.options);
    }

    validateOptions(options) {
        if (options.serverSide && options.onTableChange === undefined) {
            throw Error("onTableChange callback must be provided when using serverSide option");
        }
    }

    setTableAction = action => {
        if (typeof this.options.onTableChange === "function") {
            this.options.onTableChange(action, this.state);
        }
    };

    setTableOptions(props) {
        const newState = {
            ...this.state,
            ...props.options
        };

        this.setState(newState);
    }

   /* setTableOptions(props) {
        const optionNames = ["rowsPerPage", "page", "rowsSelected", "filterList", "rowsPerPageOptions", "searchText"];
        const optState = optionNames.reduce((acc, cur) => {
            if (this.options[cur] !== undefined) {
                acc[cur] = this.options[cur];
            }
            return acc;
        }, {});

        this.validateOptions(optState);
        this.setState(optState);
    }*/

    setHeadCellRef = (index, el) => {
        this.headCellRefs[index] = el;
    };

    // Build the source table data
    setTableData(props, status, callback = () => {}) {
        const {data, columns, options} = props;
        const stateColumns = this.state.columns;

        let columnData = [],
            filterData = [],
            filterList = [],
            emptyFilterList = [],
            tableData = [];

        columns.forEach((column, colIndex) => {
            let columnOptions = {
                display: "true",
                filter: true,
                sort: true,
                download: true,
                sortDirection: null,
                width: null,
                headerNoWrap: null,
            };

            if (typeof column === "object") {
                if (column.options && column.options.display !== undefined) {
                    column.options.display = column.options.display.toString();
                } else if (stateColumns !== undefined
                    && stateColumns.length === columns.length
                    && stateColumns[colIndex].name === column.name) {
                    columnOptions.display = stateColumns[colIndex].display.toString();
                }

                if (column.options && column.options.sortDirection !== undefined) {
                    column.options.sortDirection = column.options.sortDirection.toString();
                } else if (stateColumns !== undefined
                    && stateColumns.length === columns.length
                    && stateColumns[colIndex].name === column.name
                    && stateColumns[colIndex].sortDirection !== null) {
                    columnOptions.sortDirection = stateColumns[colIndex].sortDirection;
                }

                columnOptions = {
                    name: column.name,
                    field: column.field,
                    ...columnOptions,
                    ...(column.options ? column.options : {}),
                };
            } else {
                columnOptions = {...columnOptions, name: column};
            }

            columnData.push(columnOptions);

            filterData[colIndex] = [];
            filterList[colIndex] = [];
            emptyFilterList[colIndex] = [];

            for (let rowIndex = 0; rowIndex < data.length; rowIndex++) {
                let rowData = status === TABLE_LOAD.INITIAL ? data[rowIndex] : data[rowIndex].data;
                let value = rowData[columns[colIndex].field];

                if (typeof tableData[rowIndex] === "undefined") {
                    tableData.push({
                        index: status === TABLE_LOAD.INITIAL ? rowIndex : data[rowIndex].index,
                        data: status === TABLE_LOAD.INITIAL ? data[rowIndex] : data[rowIndex].data,
                    });
                }

                //Call customBodyRender function we try to take filter value
                if (typeof columnOptions.customBodyRender === "function") {
                    const tableMeta = this.getTableMeta(rowIndex, colIndex, rowData, [], columnData, this.state);
                    const funcResult = columnOptions.customBodyRender(rowData, tableMeta);

                    value = funcResult;
                    // is customBodyRender return string we just take that value or try to take value from customValue function if provided
                    if (React.isValidElement(funcResult) && funcResult.props.value) {
                        value = funcResult.props.value;
                    } else if (typeof columnOptions.customValue === "function") {
                        value = columnOptions.customValue(rowData);
                    }
                    if (value === null || value === undefined || React.isValidElement(value)) {
                        value = "";
                    }
                }

                if (filterData[colIndex].indexOf(value) < 0) filterData[colIndex].push(value);
            }

            if (this.options.sortFilterList) {
                const collator = new Intl.Collator(undefined, {numeric: true, sensitivity: "base"});
                filterData[colIndex].sort(collator.compare);
            }
        });

        if (options.filterList)
            filterList = options.filterList;

        if (filterList.length !== columns.length) {
            throw new Error("Provided options.filterList does not match the column length");
        }

        let selectedRowsData = {
            data: [],
            lookup: {},
        };

        if (TABLE_LOAD.INITIAL) {
            if (options.rowsSelected && options.rowsSelected.length) {
                options.rowsSelected.forEach(row => {
                    selectedRowsData.data.push({index: row, dataIndex: row});
                    selectedRowsData.lookup[row] = true;
                });
            }
        }

        /* set source data and display Data set source set */
        this.setState(
            prevState => ({
                columns: columnData,
                filterData: filterData,
                filterList: filterList,
                selectedRows: selectedRowsData,
                data: tableData,
                displayData: this.getDisplayData(columnData, tableData, filterList, prevState.searchText),
                notModifiedDisplayData: this.getDisplayData(columnData, tableData, emptyFilterList, ""),
            }),
            callback,
        );
    }

    computeDisplayRow(columns, rowObjectData, rowIndex, filterList, searchText) {
        let isFiltered = false;
        let isSearchFound = false;
        let displayRow = [];

        // go through all record columns -> need to change to go thru column definition
        for (let index = 0; index < columns.length; index++) {
            let columnDisplay = '';
            let columnValue = '';

            if (columns[index].customBodyRender) {
                const tableMeta = this.getTableMeta(rowIndex, index, rowObjectData, columns[index], this.state.data, {
                    ...this.state,
                    filterList: filterList,
                    searchText: searchText,
                });

                let funcResult = columns[index].customBodyRender(rowObjectData, tableMeta, this.updateDataCol.bind(null, rowIndex, index));
                columnDisplay = funcResult;
                columnValue = funcResult;
                // console.log("TCL: MaterialDatatable -> computeDisplayRow -> columnValue", columnValue)

                if (React.isValidElement(funcResult) && funcResult.props.value) {
                    columnValue = funcResult.props.value;
                } else if (typeof columns[index].customValue === "function") {
                    columnValue = columns[index].customValue(rowObjectData);
                }
                if (columnValue === null || columnValue === undefined || React.isValidElement(columnValue)) {
                    columnValue = "";
                }
            } else {
                columnDisplay = rowObjectData[columns[index].field];
                columnValue = rowObjectData[columns[index].field];

                if (columnValue === undefined || columnDisplay === undefined) {
                    let display = `Wrong column name ${columns[index].field}`;
                    columnDisplay = display;
                    columnValue = display;
                }
            }

            displayRow.push(columnDisplay);

            if (filterList[index].length && filterList[index].indexOf(columnValue) < 0) {
                isFiltered = true;
            }

            const columnVal = columnValue === null ? "" : columnValue.toString();

            if (searchText) {
                let searchNeedle = searchText.toString();
                let searchStack = columnVal.toString();

                if (!this.options.caseSensitive) {
                    searchNeedle = searchNeedle.toLowerCase();
                    searchStack = searchStack.toLowerCase();
                }

                if (searchStack.indexOf(searchNeedle) >= 0) {
                    isSearchFound = true;
                }
            }
        }

        if (isFiltered || (searchText && !isSearchFound)) {
            return null;
        }

        return displayRow;
    }

    updateDataCol = (row, index, value) => {
        this.setState(prevState => {
            let changedData = cloneDeep(prevState.data);
            let filterData = cloneDeep(prevState.filterData);
            let filterValue = prevState["data"][row][index];

            const tableMeta = this.getTableMeta(row, index, row, prevState.columns[index], prevState.data, prevState);
            let customBodyRenderResult = prevState.columns[index].customBodyRender(value, tableMeta);

            if (React.isValidElement(customBodyRenderResult) && customBodyRenderResult.props.value) {
                filterValue = customBodyRenderResult.props.value;
            } else if (typeof prevState.columns[index].customValue === "function") {
                filterValue = prevState.columns[index].customValue(value);
            }
            if (filterValue === null || filterValue === undefined) {
                filterValue = "";
            }

            const prevFilterIndex = filterData[index].indexOf(filterValue);
            filterData[index].splice(prevFilterIndex, 1, filterValue);

            changedData[row].data[index] = value;

            if (this.options.sortFilterList) {
                const collator = new Intl.Collator(undefined, {numeric: true, sensitivity: "base"});
                filterData[index].sort(collator.compare);
            }

            return {
                data: changedData,
                filterData: filterData,
                displayData: this.getDisplayData(prevState.columns, changedData, prevState.filterList, prevState.searchText),
            };
        });
    };

    getTableMeta = (rowIndex, colIndex, rowData, columnData, tableData, curState) => {
        const {columns, data, displayData, filterData, ...tableState} = curState;

        return {
            rowIndex: rowIndex,
            columnIndex: colIndex,
            columnData: columnData,
            rowData: rowData,
            tableData: tableData,
            tableState: tableState,
        };
    };

    getDisplayData(columns, records, filterList, searchText) {
        let newRows = [];

        for (let index = 0; index < records.length; index++) {
            const value = records[index].data;
            const displayRow = this.computeDisplayRow(columns, value, index, filterList, searchText);

            if (displayRow) {
                newRows.push({
                    data: displayRow,
                    dataObject: value,
                    dataIndex: records[index].dataIndex !== undefined ? records[index].dataIndex : index,
                });
            }
        }

        return newRows;
    }

    toggleViewColumn = index => {
        this.setState(
            prevState => {
                const columns = cloneDeep(prevState.columns);
                columns[index].display = columns[index].display === "true" ? "false" : "true";
                return {
                    columns: columns,
                };
            },
            () => {
                this.setTableAction("columnViewChange");
                if (this.options.onColumnViewChange) {
                    this.options.onColumnViewChange(
                        this.state.columns[index].name,
                        this.state.columns[index].display === "true" ? "add" : "remove",
                    );
                }
            },
        );
    };

    getSortDirection(column) {
        return column.sortDirection === "asc" ? "ascending" : "descending";
    }

    sortTableData(index, order, throwNotification) {
        this.setState(
            prevState => {
                let columns = cloneDeep(prevState.columns);
                let data = prevState.data;
                const notModifiedDisplayData = prevState.notModifiedDisplayData;

                for (let pos = 0; pos < columns.length; pos++) {
                    if (index !== pos) {
                        columns[pos].sortDirection = null;
                    } else {
                        columns[pos].sortDirection = order;
                    }
                }

                const orderLabel = this.getSortDirection(columns[index]);
                const announceText = `Table now sorted by ${columns[index].name} : ${orderLabel}`;

                let newState = {
                    columns: columns,
                    announceText: announceText,
                    activeColumn: index,
                    sortColumnIndex: index,
                    sortColumnDirection: order
                };

                if (this.options.serverSide) {
                    newState = {
                        ...newState,
                        data: prevState.data,
                        displayData: prevState.displayData,
                        selectedRows: prevState.selectedRows,
                    };
                } else {
                    const sortedData = this.sortTable(data, index, order, notModifiedDisplayData, columns[index]);

                    newState = {
                        ...newState,
                        data: sortedData.data,
                        displayData: this.getDisplayData(columns, sortedData.data, prevState.filterList, prevState.searchText),
                        selectedRows: sortedData.selectedRows,
                    };
                }

                return newState;
            },
            () => {
                if (throwNotification) {
                    this.setTableAction("sort");
                    if (this.options.onColumnSortChange) {
                        this.options.onColumnSortChange(
                            this.state.columns[index].name,
                            this.getSortDirection(this.state.columns[index]),
                        );
                    }
                }
            },
        );
    }

    toggleSortColumn(index) {
        const order = this.state.columns[index].sortDirection === null || this.state.columns[index].sortDirection === "desc"
            ? "asc"
            : "desc";

        this.sortTableData(index, order, true);
    };

    changeRowsPerPage = rows => {
        const rowCount = this.options.count || this.state.displayData.length;
        const lastPage = Math.max(0, Math.ceil(rowCount / rows) - 1);

        this.setState(
            () => ({
                page: Math.min(this.state.page, lastPage),
                rowsPerPage: rows,
            }),
            () => {
                this.setTableAction("changeRowsPerPage");
                if (this.options.onChangeRowsPerPage) {
                    this.options.onChangeRowsPerPage(this.state.rowsPerPage);
                }
            },
        );
    };

    changePage = page => {
        this.setState(
            () => ({
                page: page,
            }),
            () => {
                this.setTableAction("changePage");
                if (this.options.onChangePage) {
                    this.options.onChangePage(this.state.page);
                }
            },
        );
    };

    searchTextUpdate = text => {
        this.setState(
            prevState => ({
                searchText: text && text.length ? text : null,
                displayData: this.options.serverSide
                    ? prevState.displayData
                    : this.getDisplayData(prevState.columns, prevState.data, prevState.filterList, text),
            }),
            () => {
                this.setTableAction("search");
            },
        );
    };

    resetFilters = () => {
        this.setState(
            prevState => {
                const filterList = prevState.columns.map((column, index) => []);

                return {
                    filterList: filterList,
                    displayData: this.options.serverSide
                        ? prevState.displayData
                        : this.getDisplayData(prevState.columns, prevState.data, filterList, prevState.searchText),
                };
            },
            () => {
                this.setTableAction("resetFilters");
                if (this.options.onFilterChange) {
                    this.options.onFilterChange(null, this.state.filterList);
                }
            },
        );
    };

    filterUpdate = (index, column, type) => {
        this.setState(
            prevState => {
                const filterList = cloneDeep(prevState.filterList);
                const filterPos = filterList[index].indexOf(column);

                switch (type) {
                    case "checkbox":
                        filterPos >= 0 ? filterList[index].splice(filterPos, 1) : filterList[index].push(column);
                        break;
                    case "multiselect":
                        filterList[index] = column === "" ? [] : column;
                        break;
                    default:
                        filterList[index] = filterPos >= 0 || column === "" ? [] : [column];
                }

                return {
                    filterList: filterList,
                    displayData: this.options.serverSide
                        ? prevState.displayData
                        : this.getDisplayData(prevState.columns, prevState.data, filterList, prevState.searchText),
                };
            },
            () => {
                this.setTableAction("filterChange");
                if (this.options.onFilterChange) {
                    this.options.onFilterChange(column, this.state.filterList);
                }
            },
        );
    };

    selectRowDelete = () => {
        const {selectedRows, data, filterList} = this.state;

        const selectedMap = this.buildSelectedMap(selectedRows.data);
        const cleanRows = data.filter((_, index) => !selectedMap[index]);

        if (this.options.onRowsDelete) {
            this.options.onRowsDelete(selectedRows);
        }

        this.setTableData(
            {
                columns: this.props.columns,
                data: cleanRows,
                options: {
                    filterList: filterList,
                },
            },
            TABLE_LOAD.UPDATE,
            () => {
                this.setTableAction("rowDelete");
            },
        );
    };

    buildSelectedMap = rows => {
        return rows.reduce((accum, {dataIndex}) => {
            accum[dataIndex] = true;
            return accum;
        }, {});
    };

    selectRowUpdate = (type, value, dataObject) => {
        if (type === "head") {
            this.setState(
                prevState => {

                    if(this.options.selectableRows === false){
                        return prevState;
                    }

                    const {data} = prevState;
                    const selectedRowsLen = prevState.selectedRows.data.length;
                    const isDeselect = selectedRowsLen === data.length || (selectedRowsLen < data.length && selectedRowsLen > 0);

                    let selectedRows = Array(data.length)
                        .fill()
                        .map((d, i) => ({index: i, dataIndex: data[i].index}));

                    let newRows = [...prevState.selectedRows, ...selectedRows];
                    let selectedMap = this.buildSelectedMap(newRows);

                    if (isDeselect) {
                        newRows = prevState.selectedRows.data.filter(({index}) => !selectedMap[index]);
                        selectedMap = this.buildSelectedMap(newRows);
                    }

                    const selectedDataIndexes = newRows.map(row=> row.dataIndex);

                    return {
                        curSelectedRows: newRows,
                        selectedRows: {
                            data: newRows,
                            lookup: selectedMap,
                        },
                        rowsSelected: selectedDataIndexes
                    };
                },
                () => {
                    this.setTableAction("rowsSelect");
                    if (this.options.onRowsSelect) {
                        this.options.onRowsSelect(this.state.curSelectedRows, this.state.selectedRows.data);
                    }
                },
            );
        } else if (type === "cell") {
          if (!!dataObject._isEdit && dataObject._isEdit)
            return null;
  
            this.setState(
                prevState => {

                    if(this.options.selectableRows === false){
                        return prevState;
                    }

                    const {dataIndex} = value;
                    let selectedRows = [...prevState.selectedRows.data];
                    let rowPos = -1;

                    for (let cIndex = 0; cIndex < selectedRows.length; cIndex++) {
                        if (selectedRows[cIndex].dataIndex === dataIndex) {
                            rowPos = cIndex;
                            break;
                        }
                    }

                    if (this.options.onlyOneRowCanBeSelected) {
                        selectedRows = [];
                    }

                    if (rowPos >= 0) {
                        selectedRows.splice(rowPos, 1);
                    } else {
                        selectedRows.push(value);
                    }

                    const selectedDataIndexes = selectedRows.map(row=> row.dataIndex);

                    return {
                        selectedRows: {
                            lookup: this.buildSelectedMap(selectedRows),
                            data: selectedRows,
                        },
                        rowsSelected: selectedDataIndexes
                    };
                },
                () => {
                    this.setTableAction("rowsSelect");
                    if (this.options.onRowsSelect && this.options.selectableRows) {
                        this.options.onRowsSelect([value], this.state.selectedRows.data);
                    }

                    if (this.options.onRowClick) {
                        this.options.onRowClick(dataObject, value);
                    }
                },
            );
        }
    };

    sortCompare(order, column) {
        return (a, b) => {
            if (a.data === null)
                a.data = "";
            if (b.data === null)
                b.data = "";

            if (typeof column.customSortValue === "function") {
                a.data = column.customSortValue(a.dataObject);
                b.data = column.customSortValue(b.dataObject);
            }

            if (typeof a.data.localeCompare === "function") {
                return a.data.localeCompare(b.data) * (order === "desc" ? -1 : 1);
            } else {
                return (a.data - b.data) * (order === "desc" ? -1 : 1);
            }
        };
    }

    sortTable(data, col, order, notModifiedDisplayData, column) {
        let sortedData = notModifiedDisplayData.map((row, sIndex) => ({
            data: row.data[col],
            dataObject: row.dataObject,
            position: row.dataIndex,
            rowSelected: this.state.selectedRows.lookup[row.dataIndex] ? true : false,
        }));

        sortedData.sort(this.sortCompare(order, column));

        let tableData = [];
        let selectedRows = [];

        for (let i = 0; i < sortedData.length; i++) {
            const row = sortedData[i];
            const sortResultObject = {
                data: notModifiedDisplayData[row.position].dataObject,
                dataIndex: row.position,
                index: i,
            };
            //  data[row.position].dataIndex = i;
            tableData.push(sortResultObject);
            if (row.rowSelected) {
                selectedRows.push({index: i, dataIndex: row.position});
            }
        }

        return {
            data: tableData,
            selectedRows: {
                lookup: this.buildSelectedMap(selectedRows),
                data: selectedRows,
            },
        };
    }

    renderTableToolbar() {
        const {title, classes} = this.props;
        const {columns, filterData, filterList, selectedRows} = this.state;

        return this.options.showSelectedRowsToolbar && selectedRows.data.length ? (<div className={cx(classes.tableTopToolbarSection)}>
            <MaterialDatatableToolbarSelect
                options={this.options}
                selectedRows={selectedRows}
                onRowsDelete={this.selectRowDelete}
                className={cx(classes.tableTopToolbarSection)}
            />
            </div>
        ) : (
          <div className={cx(classes.tableTopToolbarSection)}>
            <MaterialDatatableToolbar
              columns={columns}
              data={this.state.displayData}
              filterData={filterData}
              filterList={filterList}
              filterUpdate={this.filterUpdate}
              options={this.options}
              searchText={this.state.searchText}
              resetFilters={this.resetFilters}
              searchTextUpdate={this.searchTextUpdate}
              tableRef={this.getTableContentRef}
              title={title}
              toggleViewColumn={this.toggleViewColumn}
            />
          </div>
        );
    }

    renderStickyTable = () => {
      const {classes, title, options: {hasStickyColumn, stickyColumns}} = this.props;

      if (
        !hasStickyColumn ||
        !stickyColumns ||
        (stickyColumns instanceof Array && stickyColumns.length === 0))
        return null;

      const { isBackgroundStickyStatus, activeColumn, data, displayData, columns, page, filterList, rowsPerPage, selectedRows, searchText} = this.state;
      const rowCount = this.options.count || displayData.length;

      const newStickyColumns = stickyColumns.map(fieldName => columns.filter( c => c.field === fieldName)[0]);

      if (!newStickyColumns) return null;

      const stickyData = this.getDisplayData(newStickyColumns, data, filterList, searchText);

      return (
        <div
          ref={this.tableContent}
          className={cx({
            'table-section-overlay': true,
            [classes.overlayStickyTableSection]: true,
          })
          }>
          {this.options.resizableColumns && (
              <MaterialDatatableResize key={rowCount} setResizeable={fn => (this.setHeadResizeable = fn)}/>
          )}
          <div className={cx({
            [classes.overlayStickyTableWrapper]: true,
            [classes.overlayStickyBackground]: isBackgroundStickyStatus,
            'overlay-table-wrapper': true,
          })}>
            <Table ref={el => (this.tableRef = el)} tabIndex={"0"} role={"grid"}>
                <caption className={classes.caption}>{title}</caption>
                <MaterialDatatableHead
                    activeColumn={activeColumn}
                    data={stickyData}
                    count={rowCount}
                    columns={newStickyColumns}
                    page={page}
                    rowsPerPage={rowsPerPage}
                    handleHeadUpdateRef={fn => (this.updateToolbarSelect = fn)}
                    selectedRows={selectedRows}
                    selectRowUpdate={this.selectRowUpdate}
                    toggleSort={(index) => this.toggleSortColumn(index)}
                    setCellRef={this.setHeadCellRef}
                    options={this.options}
                />
                <MaterialDatatableBody
                    data={stickyData}
                    count={rowCount}
                    columns={newStickyColumns}
                    page={page}
                    rowsPerPage={rowsPerPage}
                    selectedRows={selectedRows}
                    selectRowUpdate={this.selectRowUpdate}
                    options={this.options}
                    searchText={searchText}
                    filterList={filterList}
                />
            </Table>
          </div>
        </div>
      );
    }

    renderTable() {
        const {classes, title} = this.props;
        const { activeColumn, displayData, columns, page, filterList, rowsPerPage, selectedRows, searchText} = this.state;

        const rowCount = this.options.count || displayData.length;

        return (
          <React.Fragment>
            {this.renderStickyTable()}
            <div
                ref={this.tableContent}
                className={cx({
                  'table-section-default': true,
                  [classes.tableSection]: true,
                  [classes.responsiveScroll]: Boolean(this.options.responsive === "scroll")
                })}
              >
                {this.options.resizableColumns && (
                    <MaterialDatatableResize key={rowCount} setResizeable={fn => (this.setHeadResizeable = fn)}/>
                )}
                <Table ref={el => (this.tableRef = el)} tabIndex={"0"} role={"grid"}>
                    <caption className={classes.caption}>{title}</caption>
                    <MaterialDatatableHead
                        activeColumn={activeColumn}
                        data={displayData}
                        count={rowCount}
                        columns={columns}
                        page={page}
                        rowsPerPage={rowsPerPage}
                        handleHeadUpdateRef={fn => (this.updateToolbarSelect = fn)}
                        selectedRows={selectedRows}
                        selectRowUpdate={this.selectRowUpdate}
                        toggleSort={(index) => this.toggleSortColumn(index)}
                        setCellRef={this.setHeadCellRef}
                        options={this.options}
                    />
                    <MaterialDatatableBody
                        data={displayData}
                        count={rowCount}
                        columns={columns}
                        page={page}
                        rowsPerPage={rowsPerPage}
                        selectedRows={selectedRows}
                        selectRowUpdate={this.selectRowUpdate}
                        options={this.options}
                        searchText={searchText}
                        filterList={filterList}
                    />
                </Table>
            </div>
          </React.Fragment>
        );
    }

    renderFilterList() {
        const {filterList} = this.state;

        return (
            <MaterialDatatableFilterList
                options={this.options}
                filterList={filterList}
                filterUpdate={this.filterUpdate}/>
        );
    }

    renderPagination() {
        const {displayData, page, rowsPerPage} = this.state;

        const rowCount = this.options.count || displayData.length;

        return (
            <Table>
                {this.options.customFooter
                    ? this.options.customFooter(rowCount, page, rowsPerPage, this.changeRowsPerPage, this.changePage)
                    : this.options.pagination && (
                    <MaterialDatatablePagination
                        count={rowCount}
                        page={page}
                        rowsPerPage={rowsPerPage}
                        changeRowsPerPage={this.changeRowsPerPage}
                        changePage={this.changePage}
                        component={"div"}
                        options={this.options}
                    />
                )}
            </Table>
        );
    }

    renderLiveAnnounce() {
        const {classes} = this.props;
        const {announceText} = this.state;

        return (
            <div className={classes.liveAnnounce} aria-live={"polite"} ref={el => (this.announceRef = el)}>
                {announceText}
            </div>
        );
    }

    getTableContentRef = () => {
      return this.tableContent.current;
    };

    render() {
        const {classes} = this.props;

        return this.options.usePaperPlaceholder ? (
            <Paper elevation={4} className={classes.paper}>
                {this.renderTableToolbar()}
                {this.renderFilterList()}
                {this.renderTable()}
                {this.renderPagination()}
                {this.renderLiveAnnounce()}
            </Paper>
        ) : (
            <React.Fragment>
                {this.renderTableToolbar()}
                {this.renderFilterList()}
                {this.renderTable()}
                {this.renderPagination()}
                {this.renderLiveAnnounce()}
            </React.Fragment>
        );
    }
}

export default withStyles(defaultTableStyles, {name: "MaterialDatatable"})(MaterialDatatable);
