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
      '&:hover .overlay-content-wrapper:not(.is-hidden)': {
        display: 'block',
        visibility: 'visible'
      }
    },
    overlayContentWrapper: {
      display: 'none',
      visibility: 'hidden',
      position: 'relative',
      zIndex: 1,
    },
    overlayContent: {
      position: 'absolute',
      right: 0,
      top: 0,
      zIndex: 10,
      transform: 'translateY(-50%)',
    },
    noPadding: {
      '&.MuiTableCell-root': {
        padding: 0,
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
        const rowOptions = dataObject.rowOptions || {};

        return (
            <React.Fragment>

                <TableRow
                    hover={options.rowHover}
                    onClick={onClick}
                    className={classNames({
                        [classes.root]: true,
                        [classes.cursorHover]: options.rowCursorHand,
                        [classes.responsiveStacked]: options.responsive === "stacked",
                        [classes.info]: rowOptions.variant === 'info',
                        [classes.warn]: rowOptions.variant === 'warn',
                        [classes.error]: rowOptions.variant === 'error',
                        [classes.primary]: rowOptions.variant === 'primary',
                        [classes.secondary]: rowOptions.variant === 'secondary',
                        [classes.disable]: rowOptions.variant === 'disable',
                        [classes.rowDefault]: true,
                    })}
                    selected={rowSelected}>
                        {this.props.children}
                    {
                        options.useOnRowHoverOverlay && (
                            <td className={classNames({
                              [classes.noPadding]: true,
                              'MuiTableCell-root': true,
                            })}>
                                <div className={classNames({
                                    [classes.overlayContentWrapper]: true,
                                    'overlay-content-wrapper': true,
                                    'is-hidden': true
                                })}>
                                    <div className={classNames({
                                        [classes.overlayContent]: true,
                                        'overlay-content': true,
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
