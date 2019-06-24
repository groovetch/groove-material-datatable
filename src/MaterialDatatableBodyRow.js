import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import TableRow from "@material-ui/core/TableRow";
import {withStyles} from "@material-ui/core/styles";

const defaultBodyRowStyles = {
    root: {},
    responsiveStacked: {
        "@media screen and (max-width: 960px)": {
            border: "solid 2px rgba(0, 0, 0, 0.15)",
        },
    },
    cursorHover: {
        '&:hover': {
            cursor: 'pointer'
        }
    }
};

class MaterialDatatableBodyRow extends React.Component {
    static propTypes = {
        /** Options used to describe table */
        options: PropTypes.object.isRequired,
        /** Callback to execute when row is clicked */
        onClick: PropTypes.func,
        /** Current row selected or not */
        rowSelected: PropTypes.bool,
        /** Extend the style applied to components */
        classes: PropTypes.object,
    };

    render() {
        const {classes, options, rowSelected, onClick} = this.props;

        return (
            <TableRow
                hover={options.rowHover}
                onClick={onClick}
                className={classNames({
                    [classes.root]: true,
                    [classes.cursorHover]: options.rowCursorHand,
                    [classes.responsiveStacked]: options.responsive === "stacked",
                })}
                selected={rowSelected}>
                {this.props.children}
            </TableRow>
        );
    }
}

export default withStyles(defaultBodyRowStyles, {name: "MaterialDatatableBodyRow"})(MaterialDatatableBodyRow);
