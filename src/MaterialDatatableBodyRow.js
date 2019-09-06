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
    },
    rowDefault: {
        '&:hover .overlay-content-wrapper': {
            display: 'block'
        }
    },
    overlayContentWrapper: {
        display: 'none',
        position: 'relative',
        zIndex: 1,
    },
    overlayContent: {
        position: 'absolute',
        right: 0,
        top: 0,
        zIndex: 10,
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
        /** correspondind data */
        dataObject: PropTypes.object,
        /** list of data pass to table */
        data: PropTypes.object,
        /** row index */
        rowIndex: PropTypes.object,
    };
    constructor(props) {
        super(props);
        this.state = {
            isHover: false,
        }
    }

    render() {
        const {classes, options, rowSelected, onClick, dataObject, rowIndex, data} = this.props;

        return (
            <React.Fragment>

                <TableRow
                    hover={options.rowHover}
                    onClick={onClick}
                    className={classNames({
                        [classes.root]: true,
                        [classes.cursorHover]: options.rowCursorHand,
                        [classes.responsiveStacked]: options.responsive === "stacked",
                        [classes.rowDefault]: true,
                    })}
                    selected={rowSelected}>
                        {this.props.children}
                    {
                        options.useOnRowHoverOverlay && (
                            <td>
                                <div className={classNames({
                                    [classes.overlayContentWrapper]: true,
                                    'overlay-content-wrapper': true
                                })}>
                                    <div className={classNames({
                                        [classes.overlayContent]: true,
                                        'MuiTable-root': true,
                                    })}>
                                    {options.onRowHoverOverlayRender(dataObject, rowIndex, data)}
                                </div>
                                </div>
                            </td>
                        )
                    }
                </TableRow>
            </React.Fragment>
        );
    }
}

export default withStyles(defaultBodyRowStyles, {name: "MaterialDatatableBodyRow"})(MaterialDatatableBodyRow);
