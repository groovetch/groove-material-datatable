import React from "react";
import PropTypes from "prop-types";
import Popover from "@material-ui/core/Popover";
import MaterialPopoverContent from "./MaterialPopoverContent";
import MaterialPopoverTarget from "./MaterialPopoverTarget";
import { findDOMNode } from "react-dom";

class MaterialPopover extends React.Component {
  static propTypes = {
    /** Show indicating arrow. default: true */
    arrow: PropTypes.bool,
    /** Reference callback to handleRequestClose() to trigger manual close of MaterialPopover */
    refClose: PropTypes.func,
    /** Reference callback to onExited() to trigger manual close of MaterialPopover */
    refExit: PropTypes.func,
    /** MaterialPopoverTarget and MaterialPopoverContent are required children */
    children: (props, propName, componentName) => {
      let childMatch = true;
      const expectedComponents = [MaterialPopoverContent, MaterialPopoverTarget];

      React.Children.map(props.children, (child, index) => {
        if (expectedComponents.indexOf(child.type) === -1) childMatch = false;
      });

      if (!childMatch) {
        return new Error(
          "`" +
            componentName +
            "` " +
            "should only have children of the following types: `MaterialPopoverTarget`, `MaterialPopoverContent`.",
        );
      }
    },
  };

  state = {
    open: false,
  };

  componentWillMount() {
    this.anchorEl = null;
  }

  componentDidMount() {
    /*
     * expose close method to the parent
     */
    if (this.props.refClose) {
      this.props.refClose(this.handleRequestClose);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    /*  
     * Update Popover position if a filter removes data from the table because
     * it affects the window height which would cause the Popover to in the wrong place
     */
    if (this.state.open === true) {
      this.anchorEl = findDOMNode(this.anchorEl);
      this.popoverActions.updatePosition();
    }
  }

  handleClick = () => {
    this.anchorEl = findDOMNode(this.anchorEl);
    this.setState({ open: true });
  };

  handleRequestClose = cb => {
    this.setState({ open: false }, cb && typeof cb === "function" ? cb() : () => {});
  };

  handleOnExit = () => {
    if (this.props.refExit) {
      this.props.refExit();
    }
  };

  render() {
    let popoverRender = [];

    const { className, placement, refClose, refExit, children, ...providedProps } = this.props;

    React.Children.map(children, (child, index) => {
      if (child.type === MaterialPopoverContent || child.type === <MaterialPopoverContent />.type) {
        const transformOriginSpecs = {
          vertical: "top",
          horizontal: "center",
        };

        const anchorOriginSpecs = {
          vertical: "bottom",
          horizontal: "center",
        };

        const popoverContent = (
          <Popover
            action={actions => (this.popoverActions = actions)}
            key={index}
            elevation={2}
            open={this.state.open}
            onClose={this.handleRequestClose}
            onExited={this.handleOnExit}
            anchorEl={this.anchorEl}
            ref={el => this.popoverEl}
            anchorOrigin={anchorOriginSpecs}
            transformOrigin={transformOriginSpecs}
            {...providedProps}>
            {child}
          </Popover>
        );

        popoverRender.push(popoverContent);
      } else if (child.type === MaterialPopoverTarget || child.type === <MaterialPopoverTarget />.type) {
        const targetContent = React.cloneElement(child, {
          key: index,
          targetRef: el => (this.anchorEl = el),
          onClick: this.handleClick,
        });

        popoverRender.push(targetContent);
      }
    });

    return popoverRender;
  }
}

export default MaterialPopover;
