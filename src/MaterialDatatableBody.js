import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import TableBody from "@material-ui/core/TableBody";
import MaterialDatatableBodyCell from "./MaterialDatatableBodyCell";
import MaterialDatatableBodyRow from "./MaterialDatatableBodyRow";
import MaterialDatatableSelectCell from "./MaterialDatatableSelectCell";
import {withStyles} from "@material-ui/core/styles";

const defaultBodyStyles = {
    root: {},
    emptyTitle: {
        textAlign: "center",
    },
};

class MaterialDatatableBody extends React.Component {
    static propTypes = {
        /** Data used to describe table */
        data: PropTypes.array.isRequired,
        /** Total number of data rows */
        count: PropTypes.number.isRequired,
        /** Columns used to describe table */
        columns: PropTypes.array.isRequired,
        /** Options used to describe table */
        options: PropTypes.object.isRequired,
        /** Data used to filter table against */
        filterList: PropTypes.array,
        /** Callback to execute when row is clicked */
        onRowClick: PropTypes.func,
        /** Table rows selected */
        selectedRows: PropTypes.object,
        /** Callback to trigger table row select */
        selectRowUpdate: PropTypes.func,
        /** Data used to search table against */
        searchText: PropTypes.string,
        /** Extend the style applied to components */
        classes: PropTypes.object,
    };

    buildRows() {
        const {data, page, rowsPerPage, count} = this.props;

        if (this.props.options.serverSide) return data;

        let rows = [];
        const totalPages = Math.floor(count / rowsPerPage);
        const fromIndex = page === 0 ? 0 : page * rowsPerPage;
        const toIndex = Math.min(count, (page + 1) * rowsPerPage);

        if (page > totalPages && totalPages !== 0) {
            throw new Error(
                "Provided options.page of `" +
                page +
                "` is greater than the total available page length of `" +
                totalPages +
                "`",
            );
        }

        for (let rowIndex = fromIndex; rowIndex < count && rowIndex < toIndex; rowIndex++) {
            if (data[rowIndex] !== undefined) rows.push(data[rowIndex]);
        }

        return rows.length ? rows : null;
    }

    getRowIndex(index) {
        const {page, rowsPerPage, options} = this.props;

        if (options.serverSide) {
            return index;
        }

        const startIndex = page === 0 ? 0 : page * rowsPerPage;

        return startIndex + index;
    }

    isRowSelected(dataIndex) {
        const {selectedRows, options} = this.props;

        if (selectedRows === undefined || selectedRows === null || !options.selectableRows)
            return false;

        return selectedRows.lookup && selectedRows.lookup[dataIndex] ? true : false;
    }

    handleRowSelect = dataIndexObject => {
        this.props.selectRowUpdate("cell", dataIndexObject, null);
    };

    onRowClick(dataObject, dataIndexObject) {
        this.props.selectRowUpdate("cell", dataIndexObject, dataObject);
    }

    render() {
        const {classes, columns, options} = this.props;
        const tableRows = this.buildRows();

        return (
            <TableBody>
                {tableRows ? (
                    tableRows.map(({data: row, dataIndex, dataObject}, rowIndex) => (
                        <MaterialDatatableBodyRow
                            options={options}
                            rowSelected={this.isRowSelected(dataIndex)}
                            onClick={() => this.onRowClick(dataObject, {rowIndex, dataIndex})}
                            id={"MaterialDatatableBodyRow-" + dataIndex}
                            key={rowIndex}>
                            {
                                (options.selectableRows || options.onlyOneRowCanBeSelected) &&
                                <MaterialDatatableSelectCell checked={this.isRowSelected(dataIndex)}/>
                            }
                            {row.map(
                                (column, index) =>
                                    columns[index].display === "true" &&
                                    <MaterialDatatableBodyCell
                                        dataIndex={dataIndex}
                                        rowIndex={rowIndex}
                                        colIndex={index}
                                        columnHeader={columns[index].name}
                                        options={options}
                                        key={index}>
                                        {column}
                                    </MaterialDatatableBodyCell>
                            )}
                        </MaterialDatatableBodyRow>
                    ))
                ) : (
                    <MaterialDatatableBodyRow options={options}>
                        <MaterialDatatableBodyCell
                            colSpan={options.selectableRows ? columns.length + 1 : columns.length}
                            options={options}
                            colIndex={0}
                            rowIndex={0}>
                            <Typography variant="subtitle1" className={classes.emptyTitle}>
                                {options.textLabels.body.noMatch}
                            </Typography>
                        </MaterialDatatableBodyCell>
                    </MaterialDatatableBodyRow>
                )}
            </TableBody>
        );
    }
}

export default withStyles(defaultBodyStyles, {name: "MaterialDatatableBody"})(MaterialDatatableBody);
