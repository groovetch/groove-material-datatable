'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var propTypes = _interopDefault(require('prop-types'));
var Paper = _interopDefault(require('@material-ui/core/Paper'));
var Table = _interopDefault(require('@material-ui/core/Table'));
var Typography = _interopDefault(require('@material-ui/core/Typography'));
var Toolbar = _interopDefault(require('@material-ui/core/Toolbar'));
var Tooltip = _interopDefault(require('@material-ui/core/Tooltip'));
var IconButton = _interopDefault(require('@material-ui/core/IconButton'));
var Popover = _interopDefault(require('@material-ui/core/Popover'));
var reactDom = require('react-dom');
var classNames = _interopDefault(require('classnames'));
var FormControl = _interopDefault(require('@material-ui/core/FormControl'));
var FormGroup = _interopDefault(require('@material-ui/core/FormGroup'));
var FormControlLabel = _interopDefault(require('@material-ui/core/FormControlLabel'));
var InputLabel = _interopDefault(require('@material-ui/core/InputLabel'));
var Input = _interopDefault(require('@material-ui/core/Input'));
var MenuItem = _interopDefault(require('@material-ui/core/MenuItem'));
var Select = _interopDefault(require('@material-ui/core/Select'));
var Checkbox = _interopDefault(require('@material-ui/core/Checkbox'));
var ListItemText = _interopDefault(require('@material-ui/core/ListItemText'));
var styles = require('@material-ui/core/styles');
var Grow = _interopDefault(require('@material-ui/core/Grow'));
var TextField = _interopDefault(require('@material-ui/core/TextField'));
var SearchIcon = _interopDefault(require('@material-ui/icons/Search'));
var ClearIcon = _interopDefault(require('@material-ui/icons/Clear'));
var DownloadIcon = _interopDefault(require('@material-ui/icons/CloudDownload'));
var PrintIcon = _interopDefault(require('@material-ui/icons/Print'));
var ViewColumnIcon = _interopDefault(require('@material-ui/icons/ViewColumn'));
var FilterIcon = _interopDefault(require('@material-ui/icons/FilterList'));
var ReactToPrint = _interopDefault(require('react-to-print'));
var merge = _interopDefault(require('lodash.merge'));
var DeleteIcon = _interopDefault(require('@material-ui/icons/Delete'));
var Chip = _interopDefault(require('@material-ui/core/Chip'));
var TableBody = _interopDefault(require('@material-ui/core/TableBody'));
var TableCell = _interopDefault(require('@material-ui/core/TableCell'));
var TableRow = _interopDefault(require('@material-ui/core/TableRow'));
var TableHead = _interopDefault(require('@material-ui/core/TableHead'));
var TableSortLabel = _interopDefault(require('@material-ui/core/TableSortLabel'));
var TableFooter = _interopDefault(require('@material-ui/core/TableFooter'));
var TablePagination = _interopDefault(require('@material-ui/core/TablePagination'));
var cloneDeep = _interopDefault(require('lodash.clonedeep'));

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};









var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};





var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();













var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var MaterialPopoverContent = function (_React$Component) {
  inherits(MaterialPopoverContent, _React$Component);

  function MaterialPopoverContent() {
    classCallCheck(this, MaterialPopoverContent);
    return possibleConstructorReturn(this, (MaterialPopoverContent.__proto__ || Object.getPrototypeOf(MaterialPopoverContent)).apply(this, arguments));
  }

  createClass(MaterialPopoverContent, [{
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);
  return MaterialPopoverContent;
}(React.Component);

var MaterialPopoverTarget = function (_React$Component) {
  inherits(MaterialPopoverTarget, _React$Component);

  function MaterialPopoverTarget() {
    classCallCheck(this, MaterialPopoverTarget);
    return possibleConstructorReturn(this, (MaterialPopoverTarget.__proto__ || Object.getPrototypeOf(MaterialPopoverTarget)).apply(this, arguments));
  }

  createClass(MaterialPopoverTarget, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var targetContent = React.Children.map(this.props.children, function (child, index) {
        return React.cloneElement(child, {
          key: index,
          ref: _this2.props.targetRef,
          onClick: _this2.props.onClick
        });
      });

      return targetContent;
    }
  }]);
  return MaterialPopoverTarget;
}(React.Component);

var MaterialPopover = function (_React$Component) {
  inherits(MaterialPopover, _React$Component);

  function MaterialPopover() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, MaterialPopover);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = MaterialPopover.__proto__ || Object.getPrototypeOf(MaterialPopover)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      open: false
    }, _this.handleClick = function () {
      _this.anchorEl = reactDom.findDOMNode(_this.anchorEl);
      _this.setState({ open: true });
    }, _this.handleRequestClose = function (cb) {
      _this.setState({ open: false }, cb && typeof cb === "function" ? cb() : function () {});
    }, _this.handleOnExit = function () {
      if (_this.props.refExit) {
        _this.props.refExit();
      }
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(MaterialPopover, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.anchorEl = null;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      /*
       * expose close method to the parent
       */
      if (this.props.refClose) {
        this.props.refClose(this.handleRequestClose);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      /*  
       * Update Popover position if a filter removes data from the table because
       * it affects the window height which would cause the Popover to in the wrong place
       */
      if (this.state.open === true) {
        this.anchorEl = reactDom.findDOMNode(this.anchorEl);
        this.popoverActions.updatePosition();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var popoverRender = [];

      var _props = this.props,
          className = _props.className,
          placement = _props.placement,
          refClose = _props.refClose,
          refExit = _props.refExit,
          children = _props.children,
          providedProps = objectWithoutProperties(_props, ["className", "placement", "refClose", "refExit", "children"]);


      React.Children.map(children, function (child, index) {
        if (child.type === MaterialPopoverContent || child.type === React.createElement(MaterialPopoverContent, null).type) {
          var transformOriginSpecs = {
            vertical: "top",
            horizontal: "center"
          };

          var anchorOriginSpecs = {
            vertical: "bottom",
            horizontal: "center"
          };

          var popoverContent = React.createElement(
            Popover,
            _extends({
              action: function action(actions) {
                return _this2.popoverActions = actions;
              },
              key: index,
              elevation: 2,
              open: _this2.state.open,
              onClose: _this2.handleRequestClose,
              onExited: _this2.handleOnExit,
              anchorEl: _this2.anchorEl,
              ref: function ref(el) {
                return _this2.popoverEl;
              },
              anchorOrigin: anchorOriginSpecs,
              transformOrigin: transformOriginSpecs
            }, providedProps),
            child
          );

          popoverRender.push(popoverContent);
        } else if (child.type === MaterialPopoverTarget || child.type === React.createElement(MaterialPopoverTarget, null).type) {
          var targetContent = React.cloneElement(child, {
            key: index,
            targetRef: function targetRef(el) {
              return _this2.anchorEl = el;
            },
            onClick: _this2.handleClick
          });

          popoverRender.push(targetContent);
        }
      });

      return popoverRender;
    }
  }]);
  return MaterialPopover;
}(React.Component);

var defaultFilterStyles = {
    root: {
        padding: "16px 24px 16px 24px",
        fontFamily: "Roboto"
    },
    header: {
        flex: "0 0 auto",
        marginBottom: "16px",
        width: "100%",
        display: "flex",
        justifyContent: "space-between"
    },
    title: {
        display: "inline-block",
        marginLeft: "7px",
        color: "#424242",
        fontSize: "14px",
        fontWeight: 500
    },
    noMargin: {
        marginLeft: "0px"
    },
    reset: {
        alignSelf: "left"
    },
    resetLink: {
        color: "#027cb5",
        backgroundColor: "#FFF",
        display: "inline-block",
        marginLeft: "24px",
        fontSize: "12px",
        cursor: "pointer",
        border: "none",
        "&:hover": {
            color: "#FF0000"
        }
    },
    filtersSelected: {
        alignSelf: "right"
    },
    /* checkbox */
    checkboxList: {
        flex: "1 1 100%",
        display: "inline-flex",
        marginRight: "24px"
    },
    checkboxListTitle: {
        marginLeft: "7px",
        marginBottom: "8px",
        fontSize: "14px",
        color: "#424242",
        textAlign: "left",
        fontWeight: 500
    },
    checkboxFormGroup: {
        marginTop: "8px"
    },
    checkboxFormControl: {
        margin: "0px"
    },
    checkboxFormControlLabel: {
        fontSize: "15px",
        marginLeft: "8px",
        color: "#4a4a4a"
    },
    checkboxIcon: {
        //color: "#027cb5",
        width: "32px",
        height: "32px"
    },
    checkbox: {
        "&$checked": {
            color: "#027cB5"
        }
    },
    checked: {},
    /* selects */
    selectRoot: {
        display: "flex",
        marginTop: "16px",
        flexDirection: "row",
        flexWrap: "wrap",
        width: "100%",
        height: "80%",
        justifyContent: "space-between"
    },
    selectFormControl: {
        flex: "1 1 calc(50% - 24px)",
        marginRight: "24px",
        marginBottom: "24px",
        minWidth: 70
    }
};

var MaterialDatatableFilter = function (_React$Component) {
    inherits(MaterialDatatableFilter, _React$Component);

    function MaterialDatatableFilter() {
        var _ref;

        var _temp, _this, _ret;

        classCallCheck(this, MaterialDatatableFilter);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = MaterialDatatableFilter.__proto__ || Object.getPrototypeOf(MaterialDatatableFilter)).call.apply(_ref, [this].concat(args))), _this), _this.handleCheckboxChange = function (index, column) {
            _this.props.onFilterUpdate(index, column, "checkbox");
        }, _this.handleDropdownChange = function (event, index) {
            var value = event.target.value === "All" ? "" : event.target.value;
            _this.props.onFilterUpdate(index, value, "dropdown");
        }, _this.handleMultiselectChange = function (index, column) {
            _this.props.onFilterUpdate(index, column, "multiselect");
        }, _temp), possibleConstructorReturn(_this, _ret);
    }

    createClass(MaterialDatatableFilter, [{
        key: "renderCheckbox",
        value: function renderCheckbox(columns) {
            var _this2 = this;

            var _props = this.props,
                classes = _props.classes,
                filterData = _props.filterData,
                filterList = _props.filterList;


            return columns.map(function (column, index) {
                return column.filter ? React.createElement(
                    "div",
                    { className: classes.checkboxList, key: index },
                    React.createElement(
                        FormGroup,
                        null,
                        React.createElement(
                            Typography,
                            { variant: "caption", className: classes.checkboxListTitle },
                            column.name
                        ),
                        filterData[index].map(function (filterColumn, filterIndex) {
                            return React.createElement(FormControlLabel, {
                                key: filterIndex,
                                classes: {
                                    root: classes.checkboxFormControl,
                                    label: classes.checkboxFormControlLabel
                                },
                                control: React.createElement(Checkbox, {
                                    className: classes.checkboxIcon,
                                    onChange: _this2.handleCheckboxChange.bind(null, index, filterColumn),
                                    checked: filterList[index].indexOf(filterColumn) >= 0 ? true : false,
                                    classes: {
                                        root: classes.checkbox,
                                        checked: classes.checked
                                    },
                                    value: filterColumn !== null ? filterColumn.toString() : ""
                                }),
                                label: filterColumn
                            });
                        })
                    )
                ) : false;
            });
        }
    }, {
        key: "renderSelect",
        value: function renderSelect(columns) {
            var _this3 = this;

            var _props2 = this.props,
                classes = _props2.classes,
                filterData = _props2.filterData,
                filterList = _props2.filterList,
                options = _props2.options;

            var textLabels = options.textLabels.filter;

            return React.createElement(
                "div",
                { className: classes.selectRoot },
                columns.map(function (column, index) {
                    return column.filter ? React.createElement(
                        FormControl,
                        { className: classes.selectFormControl, key: index },
                        React.createElement(
                            InputLabel,
                            { htmlFor: column.name },
                            column.name
                        ),
                        React.createElement(
                            Select,
                            {
                                value: filterList[index][0] || textLabels.all,
                                name: column.name,
                                onChange: function onChange(event) {
                                    return _this3.handleDropdownChange(event, index);
                                },
                                input: React.createElement(Input, { name: column.name, id: column.name }) },
                            React.createElement(
                                MenuItem,
                                { value: textLabels.all, key: 0 },
                                textLabels.all
                            ),
                            filterData[index].map(function (filterColumn, filterIndex) {
                                return React.createElement(
                                    MenuItem,
                                    { value: filterColumn, key: filterIndex + 1 },
                                    filterColumn !== null ? filterColumn.toString() : ""
                                );
                            })
                        )
                    ) : false;
                })
            );
        }
    }, {
        key: "renderMultiselect",
        value: function renderMultiselect(columns) {
            var _this4 = this;

            var _props3 = this.props,
                classes = _props3.classes,
                filterData = _props3.filterData,
                filterList = _props3.filterList,
                options = _props3.options;


            return React.createElement(
                "div",
                { className: classes.selectRoot },
                columns.map(function (column, index) {
                    return column.filter ? React.createElement(
                        FormControl,
                        { className: classes.selectFormControl, key: index },
                        React.createElement(
                            InputLabel,
                            { htmlFor: column.name },
                            column.name
                        ),
                        React.createElement(
                            Select,
                            {
                                multiple: true,
                                value: filterList[index] || [],
                                renderValue: function renderValue(selected) {
                                    return selected.join(", ");
                                },
                                name: column.name,
                                onChange: function onChange(event) {
                                    return _this4.handleMultiselectChange(index, event.target.value);
                                },
                                input: React.createElement(Input, { name: column.name, id: column.name }) },
                            filterData[index].map(function (filterColumn, filterIndex) {
                                return filterColumn !== null && filterColumn !== undefined && React.createElement(
                                    MenuItem,
                                    { value: filterColumn, key: filterIndex + 1 },
                                    React.createElement(Checkbox, {
                                        checked: filterList[index].indexOf(filterColumn) >= 0 ? true : false,
                                        value: filterColumn.toString(),
                                        className: classes.checkboxIcon,
                                        classes: {
                                            root: classes.checkbox,
                                            checked: classes.checked
                                        }
                                    }),
                                    React.createElement(ListItemText, { primary: filterColumn })
                                );
                            })
                        )
                    ) : false;
                })
            );
        }
    }, {
        key: "render",
        value: function render() {
            var _classNames;

            var _props4 = this.props,
                classes = _props4.classes,
                columns = _props4.columns,
                options = _props4.options,
                onFilterReset = _props4.onFilterReset;

            var textLabels = options.textLabels.filter;

            return React.createElement(
                "div",
                { className: classes.root },
                React.createElement(
                    "div",
                    { className: classes.header },
                    React.createElement(
                        "div",
                        { className: classes.reset },
                        React.createElement(
                            Typography,
                            {
                                variant: "caption",
                                className: classNames((_classNames = {}, defineProperty(_classNames, classes.title, true), defineProperty(_classNames, classes.noMargin, options.filterType !== "checkbox" ? true : false), _classNames)) },
                            textLabels.title
                        ),
                        React.createElement(
                            "button",
                            { className: classes.resetLink, tabIndex: 0, "aria-label": textLabels.reset,
                                onClick: onFilterReset },
                            textLabels.reset
                        )
                    ),
                    React.createElement("div", { className: classes.filtersSelected })
                ),
                options.filterType === "checkbox" ? this.renderCheckbox(columns) : options.filterType === "multiselect" ? this.renderMultiselect(columns) : this.renderSelect(columns)
            );
        }
    }]);
    return MaterialDatatableFilter;
}(React.Component);

var MaterialDatatableFilter$1 = styles.withStyles(defaultFilterStyles, { name: "MaterialDatatableFilter" })(MaterialDatatableFilter);

var defaultViewColStyles = {
    root: {
        padding: "16px 24px 16px 24px",
        fontFamily: "Roboto"
    },
    title: {
        marginLeft: "-7px",
        fontSize: "14px",
        color: "#424242",
        textAlign: "left",
        fontWeight: 500
    },
    formGroup: {
        marginTop: "8px"
    },
    formControl: {},
    checkbox: {
        width: "32px",
        height: "32px"
    },
    checkboxRoot: {
        "&$checked": {
            color: "#027cb5"
        }
    },
    checked: {},
    label: {
        fontSize: "15px",
        marginLeft: "8px",
        color: "#4a4a4a"
    }
};

var MaterialDatatableViewCol = function (_React$Component) {
    inherits(MaterialDatatableViewCol, _React$Component);

    function MaterialDatatableViewCol() {
        var _ref;

        var _temp, _this, _ret;

        classCallCheck(this, MaterialDatatableViewCol);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = MaterialDatatableViewCol.__proto__ || Object.getPrototypeOf(MaterialDatatableViewCol)).call.apply(_ref, [this].concat(args))), _this), _this.handleColChange = function (index) {
            _this.props.onColumnUpdate(index);
        }, _temp), possibleConstructorReturn(_this, _ret);
    }

    createClass(MaterialDatatableViewCol, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                classes = _props.classes,
                columns = _props.columns,
                options = _props.options;

            var textLabels = options.textLabels.viewColumns;

            return React.createElement(
                FormControl,
                { component: "fieldset", className: classes.root, "aria-label": textLabels.titleAria },
                React.createElement(
                    Typography,
                    { variant: "caption", className: classes.title },
                    textLabels.title
                ),
                React.createElement(
                    FormGroup,
                    { className: classes.formGroup },
                    columns.map(function (column, index) {
                        return column.display !== "excluded" && !column.noViewCol && React.createElement(FormControlLabel, {
                            key: index,
                            classes: {
                                root: classes.formControl,
                                label: classes.label
                            },
                            control: React.createElement(Checkbox, {
                                className: classes.checkbox,
                                classes: {
                                    root: classes.checkboxRoot,
                                    checked: classes.checked
                                },
                                onChange: _this2.handleColChange.bind(null, index),
                                checked: column.display === "true",
                                value: column.name
                            }),
                            label: column.name
                        });
                    })
                )
            );
        }
    }]);
    return MaterialDatatableViewCol;
}(React.Component);

var MaterialDatatableViewCol$1 = styles.withStyles(defaultViewColStyles, { name: "MaterialDatatableViewCol" })(MaterialDatatableViewCol);

var defaultSearchStyles = {
    main: {
        display: "flex",
        flex: "1 0 auto"
    },
    searchIcon: {
        marginTop: "10px",
        marginRight: "8px"
    },
    searchText: {
        flex: "0.8 0"
    },
    clearIcon: {
        "&:hover": {
            color: "#FF0000"
        }
    }
};

var MaterialDatatableSearch = function (_React$Component) {
    inherits(MaterialDatatableSearch, _React$Component);

    function MaterialDatatableSearch() {
        var _ref;

        var _temp, _this, _ret;

        classCallCheck(this, MaterialDatatableSearch);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = MaterialDatatableSearch.__proto__ || Object.getPrototypeOf(MaterialDatatableSearch)).call.apply(_ref, [this].concat(args))), _this), _this.handleTextChange = function (event) {
            var onSearchChange = _this.props.options.onSearchChange;


            if (onSearchChange) {
                onSearchChange(event.target.value);
            }

            _this.props.onSearch(event.target.value);
        }, _this.onKeyDown = function (event) {
            if (event.keyCode === 27) {
                _this.props.onHide();
            }
        }, _temp), possibleConstructorReturn(_this, _ret);
    }

    createClass(MaterialDatatableSearch, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            document.addEventListener("keydown", this.onKeyDown, false);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            document.removeEventListener("keydown", this.onKeyDown, false);
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                classes = _props.classes,
                options = _props.options,
                onHide = _props.onHide;


            return React.createElement(
                Grow,
                { appear: true, "in": true, timeout: 300 },
                React.createElement(
                    "div",
                    { className: classes.main, ref: function ref(el) {
                            return _this2.rootRef = el;
                        } },
                    React.createElement(SearchIcon, { className: classes.searchIcon }),
                    React.createElement(TextField, {
                        className: classes.searchText,
                        value: this.props.searchText !== null && this.props.searchText !== null ? this.props.searchText : "",
                        autoFocus: true,
                        InputProps: {
                            "aria-label": options.textLabels.toolbar.search
                        },
                        onChange: this.handleTextChange,
                        fullWidth: true,
                        inputRef: function inputRef(el) {
                            return _this2.searchField = el;
                        }
                    }),
                    React.createElement(
                        IconButton,
                        { className: classes.clearIcon, onClick: onHide },
                        React.createElement(ClearIcon, null)
                    )
                )
            );
        }
    }]);
    return MaterialDatatableSearch;
}(React.Component);

var MaterialDatatableSearch$1 = styles.withStyles(defaultSearchStyles, { name: "MaterialDatatableSearch" })(MaterialDatatableSearch);

/*
 *  Material-UI does not yet support ability to grab props within style()
 *  https://github.com/mui-org/material-ui/issues/7633
 *
 *  This is a workaround provided from the thread
 */

var styles$1 = function styles$$1(theme, props, style) {
    return typeof style === "function" ? style(theme, props) : style;
};

var StyledComponent = function (_React$Component) {
    inherits(StyledComponent, _React$Component);

    function StyledComponent() {
        classCallCheck(this, StyledComponent);
        return possibleConstructorReturn(this, (StyledComponent.__proto__ || Object.getPrototypeOf(StyledComponent)).apply(this, arguments));
    }

    createClass(StyledComponent, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                classes = _props.classes,
                _props$className = _props.className,
                className = _props$className === undefined ? "" : _props$className,
                WrappedComponent = _props.WrappedComponent,
                passThroughProps = objectWithoutProperties(_props, ["classes", "className", "WrappedComponent"]);


            return React.createElement(WrappedComponent, _extends({ classes: classes, className: className }, passThroughProps));
        }
    }]);
    return StyledComponent;
}(React.Component);

var styled = function styled(WrappedComponent) {
    var customProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return function (style) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var HOCProps = function HOCProps(WrappedComponent) {
            return function (_React$Component2) {
                inherits(_HOCProps, _React$Component2);

                function _HOCProps(props) {
                    classCallCheck(this, _HOCProps);

                    var _this2 = possibleConstructorReturn(this, (_HOCProps.__proto__ || Object.getPrototypeOf(_HOCProps)).call(this, props));

                    _this2.FinalComponent = styles.withStyles(function (theme) {
                        var defaultStyles = styles$1(theme, props, style);
                        return merge(defaultStyles, props.styles ? props.styles : {});
                    }, options)(StyledComponent);
                    return _this2;
                }

                createClass(_HOCProps, [{
                    key: "render",
                    value: function render() {
                        var _props2 = this.props,
                            styles$$1 = _props2.styles,
                            otherProps = objectWithoutProperties(_props2, ["styles"]);

                        return React.createElement(this.FinalComponent, _extends({}, customProps, otherProps, { WrappedComponent: WrappedComponent }));
                    }
                }]);
                return _HOCProps;
            }(React.Component);
        };
        return HOCProps(WrappedComponent);
    };
};

var defaultToolbarStyles = function defaultToolbarStyles(theme, props) {
    return _extends({
        root: {},
        left: {
            flex: "1 1 55%"
        },
        actions: {
            flex: "0 0 45%",
            textAlign: "right"
        },
        titleRoot: {},
        titleText: {},
        icon: {
            "&:hover": {
                color: "#307BB0"
            }
        },
        iconActive: {
            color: "#307BB0"
        },
        searchIcon: {
            display: "inline-flex",
            marginTop: "10px",
            marginRight: "8px"
        }
    }, props.options.responsive ? _extends({}, responsiveToolbarStyles) : {});
};

var responsiveToolbarStyles = {
    "@media screen and (max-width: 960px)": {
        titleRoot: {},
        titleText: {
            fontSize: "16px"
        },
        spacer: {
            display: "none"
        },
        left: {
            // flex: "1 1 40%",
            padding: "8px 0px"
        },
        actions: {
            // flex: "1 1 60%",
            textAlign: "right"
        }
    },
    "@media screen and (max-width: 600px)": {
        root: {
            display: "block"
        },
        left: {
            padding: "8px 0px 0px 0px"
        },
        titleText: {
            textAlign: "center"
        },
        actions: {
            textAlign: "center"
        }
    },
    "@media screen and (max-width: 480px)": {}
};

var MaterialDatatableToolbar = function (_React$Component) {
    inherits(MaterialDatatableToolbar, _React$Component);

    function MaterialDatatableToolbar() {
        var _ref;

        var _temp, _this, _ret;

        classCallCheck(this, MaterialDatatableToolbar);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = MaterialDatatableToolbar.__proto__ || Object.getPrototypeOf(MaterialDatatableToolbar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            iconActive: null,
            showSearch: false
        }, _this.handleCSVDownload = function () {
            var _this$props = _this.props,
                data = _this$props.data,
                columns = _this$props.columns,
                options = _this$props.options;


            var CSVHead = columns.reduce(function (accumulator, column) {
                return column.download ? accumulator + "\"" + column.name + "\"" + options.downloadOptions.separator : accumulator;
            }, "").slice(0, -1) + "\r\n";

            var CSVBody = data.reduce(function (accumulator, row) {
                return accumulator + '"' + row.data.filter(function (field, index) {
                    return columns[index].download;
                }).join('"' + options.downloadOptions.separator + '"') + '"\r\n';
            }, []).trim();

            /* taken from react-csv */
            var csv = "" + CSVHead + CSVBody;
            var blob = new Blob([csv], { type: "text/csv" });
            var dataURI = "data:text/csv;charset=utf-8," + csv;

            var URL = window.URL || window.webkitURL;
            var downloadURI = typeof URL.createObjectURL === "undefined" ? dataURI : URL.createObjectURL(blob);

            var link = document.createElement("a");
            link.setAttribute("href", downloadURI);
            link.setAttribute("download", options.downloadOptions.filename);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }, _this.setActiveIcon = function (iconName) {
            _this.setState(function () {
                return {
                    iconActive: iconName,
                    showSearch: iconName === "search" ? true : false
                };
            });
        }, _this.getActiveIcon = function (styles$$1, iconName) {
            return _this.state.iconActive !== iconName ? styles$$1.icon : styles$$1.iconActive;
        }, _this.hideSearch = function () {
            var onSearchClose = _this.props.options.onSearchClose;


            if (onSearchClose) onSearchClose();
            _this.props.searchTextUpdate(null);

            _this.setState(function () {
                return {
                    iconActive: null,
                    showSearch: false
                };
            });

            _this.searchButton.focus();
        }, _temp), possibleConstructorReturn(_this, _ret);
    }

    createClass(MaterialDatatableToolbar, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                data = _props.data,
                options = _props.options,
                classes = _props.classes,
                columns = _props.columns,
                filterData = _props.filterData,
                filterList = _props.filterList,
                filterUpdate = _props.filterUpdate,
                resetFilters = _props.resetFilters,
                searchTextUpdate = _props.searchTextUpdate,
                toggleViewColumn = _props.toggleViewColumn,
                title = _props.title,
                tableRef = _props.tableRef,
                searchText = _props.searchText;
            var _options$textLabels$t = options.textLabels.toolbar,
                search = _options$textLabels$t.search,
                downloadCsv = _options$textLabels$t.downloadCsv,
                print = _options$textLabels$t.print,
                viewColumns = _options$textLabels$t.viewColumns,
                filterTable = _options$textLabels$t.filterTable;
            var showSearch = this.state.showSearch;


            return React.createElement(
                Toolbar,
                { className: classes.root, role: "toolbar", "aria-label": "Table Toolbar" },
                React.createElement(
                    "div",
                    { className: classes.left },
                    showSearch === true || searchText !== undefined && searchText !== null ? React.createElement(MaterialDatatableSearch$1, {
                        searchText: searchText,
                        onSearch: searchTextUpdate,
                        onHide: this.hideSearch,
                        options: options }) : React.createElement(
                        "div",
                        { className: classes.titleRoot, "aria-hidden": "true" },
                        React.createElement(
                            Typography,
                            { variant: "h6", className: classes.titleText },
                            title
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: classes.actions },
                    options.search ? React.createElement(
                        Tooltip,
                        { title: search },
                        React.createElement(
                            IconButton,
                            {
                                "aria-label": search,
                                buttonRef: function buttonRef(el) {
                                    return _this2.searchButton = el;
                                },
                                classes: { root: this.getActiveIcon(classes, "search") },
                                onClick: this.setActiveIcon.bind(null, "search") },
                            React.createElement(SearchIcon, null)
                        )
                    ) : false,
                    options.download ? React.createElement(
                        Tooltip,
                        { title: downloadCsv },
                        React.createElement(
                            IconButton,
                            { "aria-label": downloadCsv, classes: { root: classes.icon },
                                onClick: this.handleCSVDownload },
                            React.createElement(DownloadIcon, null)
                        )
                    ) : false,
                    options.print ? React.createElement(
                        Tooltip,
                        { title: print },
                        React.createElement(
                            "span",
                            null,
                            React.createElement(ReactToPrint, {
                                trigger: function trigger() {
                                    return React.createElement(
                                        IconButton,
                                        { "aria-label": print, classes: { root: classes.icon } },
                                        React.createElement(PrintIcon, null)
                                    );
                                },
                                content: function content() {
                                    return _this2.props.tableRef();
                                }
                            })
                        )
                    ) : false,
                    options.viewColumns ? React.createElement(
                        MaterialPopover,
                        { refExit: this.setActiveIcon.bind(null), container: tableRef },
                        React.createElement(
                            MaterialPopoverTarget,
                            null,
                            React.createElement(
                                IconButton,
                                {
                                    "aria-label": viewColumns,
                                    classes: { root: this.getActiveIcon(classes, "viewcolumns") },
                                    onClick: this.setActiveIcon.bind(null, "viewcolumns") },
                                React.createElement(
                                    Tooltip,
                                    { title: viewColumns },
                                    React.createElement(ViewColumnIcon, null)
                                )
                            )
                        ),
                        React.createElement(
                            MaterialPopoverContent,
                            null,
                            React.createElement(MaterialDatatableViewCol$1, {
                                data: data,
                                columns: columns,
                                options: options,
                                onColumnUpdate: toggleViewColumn
                            })
                        )
                    ) : false,
                    options.filter ? React.createElement(
                        MaterialPopover,
                        { refExit: this.setActiveIcon.bind(null), container: tableRef },
                        React.createElement(
                            MaterialPopoverTarget,
                            null,
                            React.createElement(
                                IconButton,
                                {
                                    "aria-label": filterTable,
                                    classes: { root: this.getActiveIcon(classes, "filter") },
                                    onClick: this.setActiveIcon.bind(null, "filter") },
                                React.createElement(
                                    Tooltip,
                                    { title: filterTable },
                                    React.createElement(FilterIcon, null)
                                )
                            )
                        ),
                        React.createElement(
                            MaterialPopoverContent,
                            null,
                            React.createElement(MaterialDatatableFilter$1, {
                                columns: columns,
                                options: options,
                                filterList: filterList,
                                filterData: filterData,
                                onFilterUpdate: filterUpdate,
                                onFilterReset: resetFilters
                            })
                        )
                    ) : false,
                    options.customToolbar ? options.customToolbar() : false
                )
            );
        }
    }]);
    return MaterialDatatableToolbar;
}(React.Component);

var MaterialDatatableToolbar$1 = styled(MaterialDatatableToolbar)(defaultToolbarStyles, { name: "MaterialDatatableToolbar" });

var defaultToolbarSelectStyles = {
    root: {
        backgroundColor: "#f7f7f7",
        flex: "1 1 100%",
        display: "flex",
        height: "64px",
        justifyContent: "space-between"
    },
    title: {
        paddingLeft: "26px",
        top: "50%",
        position: "relative",
        transform: "translateY(-50%)"
    },
    iconButton: {
        marginRight: "24px",
        top: "50%",
        display: "block",
        position: "relative",
        transform: "translateY(-50%)"
    },
    deleteIcon: {
        color: "#000"
    }
};

var MaterialDatatableToolbarSelect = function (_React$Component) {
    inherits(MaterialDatatableToolbarSelect, _React$Component);

    function MaterialDatatableToolbarSelect() {
        classCallCheck(this, MaterialDatatableToolbarSelect);
        return possibleConstructorReturn(this, (MaterialDatatableToolbarSelect.__proto__ || Object.getPrototypeOf(MaterialDatatableToolbarSelect)).apply(this, arguments));
    }

    createClass(MaterialDatatableToolbarSelect, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                classes = _props.classes,
                onRowsDelete = _props.onRowsDelete,
                selectedRows = _props.selectedRows,
                options = _props.options;

            var textLabels = options.textLabels.selectedRows;

            return React.createElement(
                Paper,
                { className: classes.root },
                React.createElement(
                    "div",
                    null,
                    React.createElement(
                        Typography,
                        { variant: "subtitle1", className: classes.title },
                        selectedRows.data.length,
                        " ",
                        textLabels.text
                    )
                ),
                options.customToolbarSelect ? options.customToolbarSelect(selectedRows) : React.createElement(
                    Tooltip,
                    { title: textLabels.delete },
                    React.createElement(
                        IconButton,
                        { className: classes.iconButton, onClick: onRowsDelete,
                            "aria-label": textLabels.deleteAria },
                        React.createElement(DeleteIcon, { className: classes.deleteIcon })
                    )
                )
            );
        }
    }]);
    return MaterialDatatableToolbarSelect;
}(React.Component);

var MaterialDatatableToolbarSelect$1 = styles.withStyles(defaultToolbarSelectStyles, { name: "MaterialDatatableToolbarSelect" })(MaterialDatatableToolbarSelect);

var defaultFilterListStyles = {
    root: {
        display: "flex",
        justifyContent: "left",
        flexWrap: "wrap",
        margin: "0px 16px 0px 16px"
    },
    chip: {
        margin: "8px 8px 0px 0px"
    }
};

var MaterialDatatableFilterList = function (_React$Component) {
    inherits(MaterialDatatableFilterList, _React$Component);

    function MaterialDatatableFilterList() {
        classCallCheck(this, MaterialDatatableFilterList);
        return possibleConstructorReturn(this, (MaterialDatatableFilterList.__proto__ || Object.getPrototypeOf(MaterialDatatableFilterList)).apply(this, arguments));
    }

    createClass(MaterialDatatableFilterList, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                classes = _props.classes,
                filterList = _props.filterList,
                filterUpdate = _props.filterUpdate;


            return React.createElement(
                "div",
                { className: classes.root },
                filterList.map(function (item, index) {
                    return item.map(function (data, colIndex) {
                        return React.createElement(Chip, {
                            label: data,
                            key: colIndex,
                            onDelete: filterUpdate.bind(null, index, data, "checkbox"),
                            className: classes.chip
                        });
                    });
                })
            );
        }
    }]);
    return MaterialDatatableFilterList;
}(React.Component);

var MaterialDatatableFilterList$1 = styles.withStyles(defaultFilterListStyles, { name: "MaterialDatatableFilterList" })(MaterialDatatableFilterList);

var defaultBodyCellStyles = {
    root: {
        padding: "4px 8px 4px 8px"
    },
    cellHide: {
        display: "none"
    },
    cellStacked: {
        "@media screen and (max-width: 960px)": {
            display: "inline-block",
            backgroundColor: "#FFF",
            fontSize: "16px",
            height: "24px",
            width: "calc(50% - 80px)",
            whiteSpace: "nowrap"
        }
    },
    responsiveStacked: {
        "@media screen and (max-width: 960px)": {
            display: "inline-block",
            fontSize: "16px",
            width: "calc(50% - 80px)",
            whiteSpace: "nowrap",
            height: "24px"
        }
    }
};

var MaterialDatatableBodyCell = function (_React$Component) {
    inherits(MaterialDatatableBodyCell, _React$Component);

    function MaterialDatatableBodyCell() {
        var _ref;

        var _temp, _this, _ret;

        classCallCheck(this, MaterialDatatableBodyCell);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = MaterialDatatableBodyCell.__proto__ || Object.getPrototypeOf(MaterialDatatableBodyCell)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function () {
            var _this$props = _this.props,
                colIndex = _this$props.colIndex,
                options = _this$props.options,
                children = _this$props.children,
                dataIndex = _this$props.dataIndex,
                rowIndex = _this$props.rowIndex;

            if (options.onCellClick) {
                options.onCellClick(children, { colIndex: colIndex, rowIndex: rowIndex });
            }
        }, _temp), possibleConstructorReturn(_this, _ret);
    }

    createClass(MaterialDatatableBodyCell, [{
        key: "render",
        value: function render() {
            var _classNames, _classNames2;

            var _props = this.props,
                children = _props.children,
                classes = _props.classes,
                colIndex = _props.colIndex,
                columnHeader = _props.columnHeader,
                options = _props.options,
                dataIndex = _props.dataIndex,
                rowIndex = _props.rowIndex,
                bodyStyles = _props.bodyStyles,
                otherProps = objectWithoutProperties(_props, ["children", "classes", "colIndex", "columnHeader", "options", "dataIndex", "rowIndex", "bodyStyles"]);


            return [React.createElement(
                TableCell,
                {
                    key: 1,
                    className: classNames((_classNames = {}, defineProperty(_classNames, classes.root, true), defineProperty(_classNames, classes.cellHide, true), defineProperty(_classNames, classes.cellStacked, options.responsive === "stacked"), _classNames)) },
                columnHeader
            ), React.createElement(
                TableCell,
                _extends({
                    key: 2,
                    onClick: this.handleClick,
                    style: _extends({}, bodyStyles),
                    className: classNames((_classNames2 = {}, defineProperty(_classNames2, classes.root, true), defineProperty(_classNames2, classes.responsiveStacked, options.responsive === "stacked"), _classNames2))
                }, otherProps),
                children
            )];
        }
    }]);
    return MaterialDatatableBodyCell;
}(React.Component);

var MaterialDatatableBodyCell$1 = styles.withStyles(defaultBodyCellStyles, { name: "MaterialDatatableBodyCell" })(MaterialDatatableBodyCell);

var defaultBodyRowStyles = {
    root: {},
    responsiveStacked: {
        "@media screen and (max-width: 960px)": {
            border: "solid 2px rgba(0, 0, 0, 0.15)"
        }
    },
    cursorHover: {
        '&:hover': {
            cursor: 'pointer'
        }
    }
};

var MaterialDatatableBodyRow = function (_React$Component) {
    inherits(MaterialDatatableBodyRow, _React$Component);

    function MaterialDatatableBodyRow() {
        classCallCheck(this, MaterialDatatableBodyRow);
        return possibleConstructorReturn(this, (MaterialDatatableBodyRow.__proto__ || Object.getPrototypeOf(MaterialDatatableBodyRow)).apply(this, arguments));
    }

    createClass(MaterialDatatableBodyRow, [{
        key: "render",
        value: function render() {
            var _classNames;

            var _props = this.props,
                classes = _props.classes,
                options = _props.options,
                rowSelected = _props.rowSelected,
                onClick = _props.onClick;


            return React.createElement(
                TableRow,
                {
                    hover: options.rowHover,
                    onClick: onClick,
                    className: classNames((_classNames = {}, defineProperty(_classNames, classes.root, true), defineProperty(_classNames, classes.cursorHover, options.rowCursorHand), defineProperty(_classNames, classes.responsiveStacked, options.responsive === "stacked"), _classNames)),
                    selected: rowSelected },
                this.props.children
            );
        }
    }]);
    return MaterialDatatableBodyRow;
}(React.Component);

var MaterialDatatableBodyRow$1 = styles.withStyles(defaultBodyRowStyles, { name: "MaterialDatatableBodyRow" })(MaterialDatatableBodyRow);

var defaultSelectCellStyles = {
    root: {
        "@media screen and (max-width: 960px)": {
            display: "none"
        },
        width: 70
    },
    checkboxRoot: {
        "&$checked": {
            color: "#027cb5"
        }
    },
    checked: {},
    disabled: {}
};

var MaterialDatatableSelectCell = function (_React$Component) {
    inherits(MaterialDatatableSelectCell, _React$Component);

    function MaterialDatatableSelectCell() {
        classCallCheck(this, MaterialDatatableSelectCell);
        return possibleConstructorReturn(this, (MaterialDatatableSelectCell.__proto__ || Object.getPrototypeOf(MaterialDatatableSelectCell)).apply(this, arguments));
    }

    createClass(MaterialDatatableSelectCell, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                classes = _props.classes,
                otherProps = objectWithoutProperties(_props, ["classes"]);


            return React.createElement(
                TableCell,
                { className: classes.root, padding: "checkbox" },
                React.createElement(Checkbox, _extends({
                    classes: {
                        root: classes.checkboxRoot,
                        checked: classes.checked,
                        disabled: classes.disabled
                    }
                }, otherProps))
            );
        }
    }]);
    return MaterialDatatableSelectCell;
}(React.Component);

var MaterialDatatableSelectCell$1 = styles.withStyles(defaultSelectCellStyles, { name: "MaterialDatatableSelectCell" })(MaterialDatatableSelectCell);

var defaultBodyStyles = {
    root: {},
    emptyTitle: {
        textAlign: "center"
    }
};

var MaterialDatatableBody = function (_React$Component) {
    inherits(MaterialDatatableBody, _React$Component);

    function MaterialDatatableBody() {
        var _ref;

        var _temp, _this, _ret;

        classCallCheck(this, MaterialDatatableBody);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = MaterialDatatableBody.__proto__ || Object.getPrototypeOf(MaterialDatatableBody)).call.apply(_ref, [this].concat(args))), _this), _this.handleRowSelect = function (dataIndexObject) {
            _this.props.selectRowUpdate("cell", dataIndexObject, null);
        }, _temp), possibleConstructorReturn(_this, _ret);
    }

    createClass(MaterialDatatableBody, [{
        key: "buildRows",
        value: function buildRows() {
            var _props = this.props,
                data = _props.data,
                page = _props.page,
                rowsPerPage = _props.rowsPerPage,
                count = _props.count;


            if (this.props.options.serverSide) return data;

            var rows = [];
            var totalPages = Math.floor(count / rowsPerPage);
            var fromIndex = page === 0 ? 0 : page * rowsPerPage;
            var toIndex = Math.min(count, (page + 1) * rowsPerPage);

            if (page > totalPages && totalPages !== 0) {
                throw new Error("Provided options.page of `" + page + "` is greater than the total available page length of `" + totalPages + "`");
            }

            for (var rowIndex = fromIndex; rowIndex < count && rowIndex < toIndex; rowIndex++) {
                if (data[rowIndex] !== undefined) rows.push(data[rowIndex]);
            }

            return rows.length ? rows : null;
        }
    }, {
        key: "getRowIndex",
        value: function getRowIndex(index) {
            var _props2 = this.props,
                page = _props2.page,
                rowsPerPage = _props2.rowsPerPage,
                options = _props2.options;


            if (options.serverSide) {
                return index;
            }

            var startIndex = page === 0 ? 0 : page * rowsPerPage;

            return startIndex + index;
        }
    }, {
        key: "isRowSelected",
        value: function isRowSelected(dataIndex) {
            var _props3 = this.props,
                selectedRows = _props3.selectedRows,
                options = _props3.options;


            if (selectedRows === undefined || selectedRows === null || !options.selectableRows) return false;

            return selectedRows.lookup && selectedRows.lookup[dataIndex] ? true : false;
        }
    }, {
        key: "onRowClick",
        value: function onRowClick(dataObject, dataIndexObject) {
            this.props.selectRowUpdate("cell", dataIndexObject, dataObject);
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props4 = this.props,
                classes = _props4.classes,
                columns = _props4.columns,
                options = _props4.options;

            var tableRows = this.buildRows();

            return React.createElement(
                TableBody,
                null,
                tableRows instanceof Array && tableRows.length > 0 ? tableRows.map(function (_ref2, rowIndex) {
                    var row = _ref2.data,
                        dataIndex = _ref2.dataIndex,
                        dataObject = _ref2.dataObject;
                    return React.createElement(
                        MaterialDatatableBodyRow$1,
                        {
                            options: options,
                            rowSelected: _this2.isRowSelected(dataIndex),
                            onClick: function onClick() {
                                return _this2.onRowClick(dataObject, { rowIndex: rowIndex, dataIndex: dataIndex });
                            },
                            id: "MaterialDatatableBodyRow-" + dataIndex,
                            key: rowIndex },
                        (options.selectableRows || options.onlyOneRowCanBeSelected) && React.createElement(MaterialDatatableSelectCell$1, { checked: _this2.isRowSelected(dataIndex) }),
                        row.map(function (column, index) {
                            return columns[index].display === "true" && React.createElement(
                                MaterialDatatableBodyCell$1,
                                {
                                    dataIndex: dataIndex,
                                    rowIndex: rowIndex,
                                    colIndex: index,
                                    columnHeader: columns[index].name,
                                    bodyStyles: columns[index].bodyStyles,
                                    options: options,
                                    key: index },
                                column
                            );
                        })
                    );
                }) : React.createElement(
                    MaterialDatatableBodyRow$1,
                    { options: options },
                    React.createElement(
                        MaterialDatatableBodyCell$1,
                        {
                            colSpan: options.selectableRows ? columns.length + 1 : columns.length,
                            options: options,
                            colIndex: 0,
                            rowIndex: 0 },
                        React.createElement(
                            Typography,
                            { variant: "subtitle1", className: classes.emptyTitle },
                            options.noDataIndicator || options.textLabels.body.noMatch
                        )
                    )
                )
            );
        }
    }]);
    return MaterialDatatableBody;
}(React.Component);

var MaterialDatatableBody$1 = styles.withStyles(defaultBodyStyles, { name: "MaterialDatatableBody" })(MaterialDatatableBody);

var defaultResizeStyles = {
    root: {
        position: "absolute"
    },
    resizer: {
        position: "absolute",
        width: "1px",
        height: "100%",
        left: "100px",
        cursor: "ew-resize",
        border: "0.1px solid rgba(224, 224, 224, 1)"
    }
};

var MaterialDatatableResize = function (_React$Component) {
    inherits(MaterialDatatableResize, _React$Component);

    function MaterialDatatableResize() {
        var _ref;

        var _temp, _this, _ret;

        classCallCheck(this, MaterialDatatableResize);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = MaterialDatatableResize.__proto__ || Object.getPrototypeOf(MaterialDatatableResize)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            resizeCoords: {},
            startPosition: 0,
            tableWidth: "100%",
            tableHeight: "100%"
        }, _this.handleReize = function () {
            if (window.innerWidth !== _this.windowWidth) {
                _this.windowWidth = window.innerWidth;
                _this.setDividers();
            }
        }, _this.setCellRefs = function (cellsRef, tableRef) {
            _this.cellsRef = cellsRef;
            _this.tableRef = tableRef;
            _this.setDividers();
        }, _this.setDividers = function () {
            var tableEl = reactDom.findDOMNode(_this.tableRef);

            var _tableEl$getBoundingC = tableEl.getBoundingClientRect(),
                tableWidth = _tableEl$getBoundingC.width,
                tableHeight = _tableEl$getBoundingC.height;

            var resizeCoords = {};
            var finalCells = Object.entries(_this.cellsRef);

            finalCells.forEach(function (_ref2) {
                var _ref3 = slicedToArray(_ref2, 2),
                    key = _ref3[0],
                    item = _ref3[1];

                var elRect = item.getBoundingClientRect();
                var elStyle = window.getComputedStyle(item, null);

                resizeCoords[key] = {
                    left: elRect.left + item.offsetWidth - parseInt(elStyle.paddingLeft) / 2
                };
            });

            _this.setState({ tableWidth: tableWidth, tableHeight: tableHeight, resizeCoords: resizeCoords }, _this.updateWidths());
        }, _this.updateWidths = function () {
            var lastPosition = 0;
            var _this$state = _this.state,
                resizeCoords = _this$state.resizeCoords,
                tableWidth = _this$state.tableWidth,
                tableHeight = _this$state.tableHeight;


            Object.entries(resizeCoords).forEach(function (_ref4) {
                var _ref5 = slicedToArray(_ref4, 2),
                    key = _ref5[0],
                    item = _ref5[1];

                var newWidth = Number((item.left - lastPosition) / tableWidth * 100).toFixed(2);
                item.percent = newWidth;
                lastPosition = item.left;

                var thCell = _this.cellsRef[key];
                thCell.style.width = newWidth + "%";
            });
        }, _this.onResizeStart = function (id, e) {
            _this.setState({ isResize: true, id: id, startPosition: e.clientX });
        }, _this.onResizeMove = function (id, e) {
            var _this$state2 = _this.state,
                startPosition = _this$state2.startPosition,
                isResize = _this$state2.isResize,
                resizeCoords = _this$state2.resizeCoords;


            if (isResize) {
                var leftPos = startPosition - (startPosition - e.clientX);

                var curCoord = _extends({}, resizeCoords[id], { left: leftPos });
                var newResizeCoords = _extends({}, resizeCoords, defineProperty({}, id, curCoord));

                _this.setState({ resizeCoords: newResizeCoords }, _this.updateWidths());
            }
        }, _this.onResizeEnd = function (id, e) {
            _this.setState({ isResize: false, id: null });
        }, _temp), possibleConstructorReturn(_this, _ret);
    }

    createClass(MaterialDatatableResize, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.windowWidth = null;
            this.props.setResizeable(this.setCellRefs);
            window.addEventListener("resize", this.handleReize, false);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            window.removeEventListener("resize", this.handleReize, false);
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                classes = _props.classes,
                options = _props.options,
                rowSelected = _props.rowSelected;
            var _state = this.state,
                id = _state.id,
                isResize = _state.isResize,
                resizeCoords = _state.resizeCoords,
                tableWidth = _state.tableWidth,
                tableHeight = _state.tableHeight;


            return React.createElement(
                "div",
                { className: classes.root, style: { width: tableWidth } },
                Object.entries(resizeCoords).map(function (_ref6) {
                    var _ref7 = slicedToArray(_ref6, 2),
                        key = _ref7[0],
                        val = _ref7[1];

                    return React.createElement(
                        "div",
                        {
                            "aria-hidden": "true",
                            key: key,
                            onMouseMove: _this2.onResizeMove.bind(null, key),
                            onMouseUp: _this2.onResizeEnd.bind(null, key),
                            style: {
                                width: isResize && id == key ? tableWidth : "auto",
                                position: "absolute",
                                height: tableHeight,
                                zIndex: 1000
                            } },
                        React.createElement("div", {
                            "aria-hidden": "true",
                            onMouseDown: _this2.onResizeStart.bind(null, key),
                            className: classes.resizer,
                            style: { left: val.left }
                        })
                    );
                })
            );
        }
    }]);
    return MaterialDatatableResize;
}(React.Component);

var MaterialDatatableResize$1 = styles.withStyles(defaultResizeStyles, { name: "MaterialDatatableResize" })(MaterialDatatableResize);

var defaultHeadRowStyles = {
    root: {}
};

var MaterialDatatableHeadRow = function (_React$Component) {
    inherits(MaterialDatatableHeadRow, _React$Component);

    function MaterialDatatableHeadRow() {
        classCallCheck(this, MaterialDatatableHeadRow);
        return possibleConstructorReturn(this, (MaterialDatatableHeadRow.__proto__ || Object.getPrototypeOf(MaterialDatatableHeadRow)).apply(this, arguments));
    }

    createClass(MaterialDatatableHeadRow, [{
        key: "render",
        value: function render() {
            var classes = this.props.classes;


            return React.createElement(
                TableRow,
                {
                    className: classNames(defineProperty({}, classes.root, true)) },
                this.props.children
            );
        }
    }]);
    return MaterialDatatableHeadRow;
}(React.Component);

var MaterialDatatableHeadRow$1 = styles.withStyles(defaultHeadRowStyles, { name: "MaterialDatatableHeadRow" })(MaterialDatatableHeadRow);

var defaultHeadCellStyles = {
    root: {
        padding: "4px 8px 4px 8px"
    },
    tooltip: {
        cursor: "pointer"
    },
    mypopper: {
        "&[data-x-out-of-boundaries]": {
            display: "none"
        }
    },
    data: {
        display: "inline-block"
    },
    sortAction: {
        display: "inline-block",
        verticalAlign: "top",
        cursor: "pointer",
        paddingLeft: "4px",
        height: "10px"
    },
    sortActive: {
        color: "rgba(0, 0, 0, 0.87)"
    },
    toolButton: {
        height: "10px",
        outline: "none",
        cursor: "pointer"
    }
};

var MaterialDatatableHeadCell = function (_React$Component) {
    inherits(MaterialDatatableHeadCell, _React$Component);

    function MaterialDatatableHeadCell() {
        var _ref;

        var _temp, _this, _ret;

        classCallCheck(this, MaterialDatatableHeadCell);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = MaterialDatatableHeadCell.__proto__ || Object.getPrototypeOf(MaterialDatatableHeadCell)).call.apply(_ref, [this].concat(args))), _this), _this.handleSortClick = function () {
            _this.props.toggleSort(_this.props.index);
        }, _temp), possibleConstructorReturn(_this, _ret);
    }

    createClass(MaterialDatatableHeadCell, [{
        key: "render",
        value: function render() {
            var _classNames;

            var _props = this.props,
                children = _props.children,
                classes = _props.classes,
                options = _props.options,
                sortDirection = _props.sortDirection,
                sort = _props.sort,
                headStyles = _props.headStyles;

            var sortActive = sortDirection !== null && sortDirection !== undefined ? true : false;
            var sortLabelProps = _extends({
                active: sortActive
            }, sortDirection ? { direction: sortDirection } : {});

            return React.createElement(
                TableCell,
                {
                    className: classes.root,
                    scope: "col",
                    style: _extends({}, headStyles),
                    sortDirection: sortDirection },
                options.sort && sort ? React.createElement(
                    Tooltip,
                    {
                        title: options.textLabels.body.toolTip,
                        placement: "bottom-end",
                        enterDelay: 300,
                        classes: { popper: classes.mypopper, tooltip: classes.tooltip } },
                    React.createElement(
                        "span",
                        {
                            role: "button",
                            onKeyUp: function onKeyUp() {},
                            onClick: this.handleSortClick,
                            className: classes.toolButton,
                            tabIndex: 0 },
                        React.createElement(
                            "div",
                            {
                                className: classNames((_classNames = {}, defineProperty(_classNames, classes.data, true), defineProperty(_classNames, classes.sortActive, sortActive), _classNames)) },
                            children
                        ),
                        React.createElement(
                            "div",
                            { className: classes.sortAction },
                            options.customSortLabelRender ? options.customSortLabelRender(sortLabelProps) : React.createElement(TableSortLabel, sortLabelProps)
                        )
                    )
                ) : children
            );
        }
    }]);
    return MaterialDatatableHeadCell;
}(React.Component);

var MaterialDatatableHeadCell$1 = styles.withStyles(defaultHeadCellStyles, { name: "MaterialDatatableHeadCell" })(MaterialDatatableHeadCell);

var defaultHeadStyles = {
    main: {},
    responsiveStacked: {
        "@media screen and (max-width: 960px)": {
            display: "none"
        }
    }
};

var MaterialDatatableHead = function (_React$Component) {
    inherits(MaterialDatatableHead, _React$Component);

    function MaterialDatatableHead() {
        var _ref;

        var _temp, _this, _ret;

        classCallCheck(this, MaterialDatatableHead);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = MaterialDatatableHead.__proto__ || Object.getPrototypeOf(MaterialDatatableHead)).call.apply(_ref, [this].concat(args))), _this), _this.handleToggleColumn = function (index) {
            _this.props.toggleSort(index);
        }, _this.handleRowSelect = function () {
            _this.props.selectRowUpdate("head", null, null);
        }, _temp), possibleConstructorReturn(_this, _ret);
    }

    createClass(MaterialDatatableHead, [{
        key: "render",
        value: function render() {
            var _classNames,
                _this2 = this;

            var _props = this.props,
                classes = _props.classes,
                columns = _props.columns,
                count = _props.count,
                options = _props.options,
                setCellRef = _props.setCellRef,
                selectedRows = _props.selectedRows;


            var numSelected = selectedRows && selectedRows.data.length || 0;
            var isDeterminate = numSelected > 0 && numSelected < count;
            var isChecked = numSelected === count;

            return React.createElement(
                TableHead,
                {
                    className: classNames((_classNames = {}, defineProperty(_classNames, classes.responsiveStacked, options.responsive === "stacked"), defineProperty(_classNames, classes.main, true), _classNames)) },
                React.createElement(
                    MaterialDatatableHeadRow$1,
                    null,
                    options.selectableRows && options.onlyOneRowCanBeSelected === false && React.createElement(MaterialDatatableSelectCell$1, {
                        ref: function ref(el) {
                            return setCellRef(0, reactDom.findDOMNode(el));
                        },
                        onChange: function onChange() {
                            return _this2.handleRowSelect(null);
                        },
                        indeterminate: isDeterminate,
                        checked: isChecked
                    }),
                    options.selectableRows && options.onlyOneRowCanBeSelected === true && React.createElement(TableCell, { style: { width: 70 }, padding: "checkbox" }),
                    columns.map(function (column, index) {
                        return column.display === "true" && (column.customHeadRender ? column.customHeadRender(_extends({ index: index }, column), _this2.handleToggleColumn) : React.createElement(
                            MaterialDatatableHeadCell$1,
                            {
                                key: index,
                                index: index,
                                type: "cell",
                                ref: function ref(el) {
                                    return setCellRef(index + 1, reactDom.findDOMNode(el));
                                },
                                sort: column.sort,
                                headStyles: column.headStyles,
                                sortDirection: column.sortDirection,
                                toggleSort: _this2.handleToggleColumn,
                                options: options },
                            column.name
                        ));
                    })
                )
            );
        }
    }]);
    return MaterialDatatableHead;
}(React.Component);

var MaterialDatatableHead$1 = styles.withStyles(defaultHeadStyles, { name: "MaterialDatatableHead" })(MaterialDatatableHead);

var defaultPaginationStyles = {
    root: {
        "&:last-child": {
            padding: "0px 24px 0px 24px"
        }
    },
    toolbar: {},
    selectRoot: {},
    "@media screen and (max-width: 400px)": {
        toolbar: {
            "& span:nth-child(2)": {
                display: "none"
            }
        },
        selectRoot: {
            marginRight: "8px"
        }
    }
};

var MaterialDatatablePagination = function (_React$Component) {
    inherits(MaterialDatatablePagination, _React$Component);

    function MaterialDatatablePagination() {
        var _ref;

        var _temp, _this, _ret;

        classCallCheck(this, MaterialDatatablePagination);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = MaterialDatatablePagination.__proto__ || Object.getPrototypeOf(MaterialDatatablePagination)).call.apply(_ref, [this].concat(args))), _this), _this.handleRowChange = function (event) {
            _this.props.changeRowsPerPage(event.target.value);
        }, _this.handlePageChange = function (_, page) {
            var options = _this.props.options;

            _this.props.changePage(page);
        }, _temp), possibleConstructorReturn(_this, _ret);
    }

    createClass(MaterialDatatablePagination, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                count = _props.count,
                classes = _props.classes,
                options = _props.options,
                rowsPerPage = _props.rowsPerPage,
                page = _props.page;

            var textLabels = options.textLabels.pagination;

            return React.createElement(
                TableFooter,
                null,
                React.createElement(
                    TableRow,
                    null,
                    React.createElement(TablePagination, {
                        className: classes.root,
                        classes: {
                            caption: classes.caption,
                            toolbar: classes.toolbar,
                            selectRoot: classes.selectRoot
                        },
                        count: count,
                        rowsPerPage: rowsPerPage,
                        page: page,
                        labelRowsPerPage: textLabels.rowsPerPage,
                        labelDisplayedRows: function labelDisplayedRows(_ref2) {
                            var from = _ref2.from,
                                to = _ref2.to,
                                count = _ref2.count;
                            return from + "-" + to + " " + textLabels.displayRows + " " + count;
                        },
                        backIconButtonProps: {
                            "aria-label": textLabels.previous
                        },
                        nextIconButtonProps: {
                            "aria-label": textLabels.next
                        },
                        rowsPerPageOptions: options.rowsPerPageOptions,
                        onChangePage: this.handlePageChange,
                        onChangeRowsPerPage: this.handleRowChange
                    })
                )
            );
        }
    }]);
    return MaterialDatatablePagination;
}(React.Component);

var MaterialDatatablePagination$1 = styles.withStyles(defaultPaginationStyles, { name: "MaterialDatatablePagination" })(MaterialDatatablePagination);

/*
 * Default text labels.
 */
var textLabels = {
    body: {
        noMatch: "Sorry, no matching records found",
        toolTip: "Sort"
    },
    pagination: {
        next: "Next Page",
        previous: "Previous Page",
        rowsPerPage: "Rows per page:",
        displayRows: "of"
    },
    toolbar: {
        search: "Search",
        downloadCsv: "Download CSV",
        print: "Print",
        viewColumns: "View Columns",
        filterTable: "Filter Table"
    },
    filter: {
        all: "All",
        title: "FILTERS",
        reset: "RESET"
    },
    viewColumns: {
        title: "Show Columns",
        titleAria: "Show/Hide Table Columns"
    },
    selectedRows: {
        text: "rows(s) selected",
        delete: "Delete",
        deleteAria: "Delete Selected Rows"
    }
};

var defaultTableStyles = {
    root: {},
    responsiveScroll: {
        overflowX: "auto"
    },
    caption: {
        position: "absolute",
        left: "-1000px"
    },
    liveAnnounce: {
        border: "0",
        clip: "rect(0 0 0 0)",
        height: "1px",
        margin: "-1px",
        overflow: "hidden",
        padding: "0",
        position: "absolute",
        width: "1px"
    }
};

var TABLE_LOAD = {
    INITIAL: 1,
    UPDATE: 2
};

var MaterialDatatable$1 = function (_React$Component) {
    inherits(MaterialDatatable, _React$Component);

    function MaterialDatatable(props) {
        classCallCheck(this, MaterialDatatable);

        var _this = possibleConstructorReturn(this, (MaterialDatatable.__proto__ || Object.getPrototypeOf(MaterialDatatable)).call(this, props));

        _this.state = {
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
                lookup: {}
            },
            rowsSelected: [],
            sortColumnIndex: null,
            sortColumnDirection: null,
            showResponsive: false,
            searchText: null
        };

        _this.setTableAction = function (action) {
            if (typeof _this.options.onTableChange === "function") {
                _this.options.onTableChange(action, _this.state);
            }
        };

        _this.setHeadCellRef = function (index, el) {
            _this.headCellRefs[index] = el;
        };

        _this.updateDataCol = function (row, index, value) {
            _this.setState(function (prevState) {
                var changedData = cloneDeep(prevState.data);
                var filterData = cloneDeep(prevState.filterData);
                var filterValue = prevState["data"][row][index];

                var tableMeta = _this.getTableMeta(row, index, row, prevState.columns[index], prevState.data, prevState);
                var customBodyRenderResult = prevState.columns[index].customBodyRender(value, tableMeta);

                if (React.isValidElement(customBodyRenderResult) && customBodyRenderResult.props.value) {
                    filterValue = customBodyRenderResult.props.value;
                } else if (typeof prevState.columns[index].customValue === "function") {
                    filterValue = prevState.columns[index].customValue(value);
                }
                if (filterValue === null || filterValue === undefined) {
                    filterValue = "";
                }

                var prevFilterIndex = filterData[index].indexOf(filterValue);
                filterData[index].splice(prevFilterIndex, 1, filterValue);

                changedData[row].data[index] = value;

                if (_this.options.sortFilterList) {
                    var collator = new Intl.Collator(undefined, { numeric: true, sensitivity: "base" });
                    filterData[index].sort(collator.compare);
                }

                return {
                    data: changedData,
                    filterData: filterData,
                    displayData: _this.getDisplayData(prevState.columns, changedData, prevState.filterList, prevState.searchText)
                };
            });
        };

        _this.getTableMeta = function (rowIndex, colIndex, rowData, columnData, tableData, curState) {
            var columns = curState.columns,
                data = curState.data,
                displayData = curState.displayData,
                filterData = curState.filterData,
                tableState = objectWithoutProperties(curState, ["columns", "data", "displayData", "filterData"]);


            return {
                rowIndex: rowIndex,
                columnIndex: colIndex,
                columnData: columnData,
                rowData: rowData,
                tableData: tableData,
                tableState: tableState
            };
        };

        _this.toggleViewColumn = function (index) {
            _this.setState(function (prevState) {
                var columns = cloneDeep(prevState.columns);
                columns[index].display = columns[index].display === "true" ? "false" : "true";
                return {
                    columns: columns
                };
            }, function () {
                _this.setTableAction("columnViewChange");
                if (_this.options.onColumnViewChange) {
                    _this.options.onColumnViewChange(_this.state.columns[index].name, _this.state.columns[index].display === "true" ? "add" : "remove");
                }
            });
        };

        _this.changeRowsPerPage = function (rows) {
            var rowCount = _this.options.count || _this.state.displayData.length;
            var lastPage = Math.max(0, Math.ceil(rowCount / rows) - 1);

            _this.setState(function () {
                return {
                    page: Math.min(_this.state.page, lastPage),
                    rowsPerPage: rows
                };
            }, function () {
                _this.setTableAction("changeRowsPerPage");
                if (_this.options.onChangeRowsPerPage) {
                    _this.options.onChangeRowsPerPage(_this.state.rowsPerPage);
                }
            });
        };

        _this.changePage = function (page) {
            _this.setState(function () {
                return {
                    page: page
                };
            }, function () {
                _this.setTableAction("changePage");
                if (_this.options.onChangePage) {
                    _this.options.onChangePage(_this.state.page);
                }
            });
        };

        _this.searchTextUpdate = function (text) {
            _this.setState(function (prevState) {
                return {
                    searchText: text && text.length ? text : null,
                    displayData: _this.options.serverSide ? prevState.displayData : _this.getDisplayData(prevState.columns, prevState.data, prevState.filterList, text)
                };
            }, function () {
                _this.setTableAction("search");
            });
        };

        _this.resetFilters = function () {
            _this.setState(function (prevState) {
                var filterList = prevState.columns.map(function (column, index) {
                    return [];
                });

                return {
                    filterList: filterList,
                    displayData: _this.options.serverSide ? prevState.displayData : _this.getDisplayData(prevState.columns, prevState.data, filterList, prevState.searchText)
                };
            }, function () {
                _this.setTableAction("resetFilters");
                if (_this.options.onFilterChange) {
                    _this.options.onFilterChange(null, _this.state.filterList);
                }
            });
        };

        _this.filterUpdate = function (index, column, type) {
            _this.setState(function (prevState) {
                var filterList = cloneDeep(prevState.filterList);
                var filterPos = filterList[index].indexOf(column);

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
                    displayData: _this.options.serverSide ? prevState.displayData : _this.getDisplayData(prevState.columns, prevState.data, filterList, prevState.searchText)
                };
            }, function () {
                _this.setTableAction("filterChange");
                if (_this.options.onFilterChange) {
                    _this.options.onFilterChange(column, _this.state.filterList);
                }
            });
        };

        _this.selectRowDelete = function () {
            var _this$state = _this.state,
                selectedRows = _this$state.selectedRows,
                data = _this$state.data,
                filterList = _this$state.filterList;


            var selectedMap = _this.buildSelectedMap(selectedRows.data);
            var cleanRows = data.filter(function (_, index) {
                return !selectedMap[index];
            });

            if (_this.options.onRowsDelete) {
                _this.options.onRowsDelete(selectedRows);
            }

            _this.setTableData({
                columns: _this.props.columns,
                data: cleanRows,
                options: {
                    filterList: filterList
                }
            }, TABLE_LOAD.UPDATE, function () {
                _this.setTableAction("rowDelete");
            });
        };

        _this.buildSelectedMap = function (rows) {
            return rows.reduce(function (accum, _ref) {
                var dataIndex = _ref.dataIndex;

                accum[dataIndex] = true;
                return accum;
            }, {});
        };

        _this.selectRowUpdate = function (type, value, dataObject) {
            if (type === "head") {
                _this.setState(function (prevState) {

                    if (_this.options.selectableRows === false) {
                        return prevState;
                    }

                    var data = prevState.data;

                    var selectedRowsLen = prevState.selectedRows.data.length;
                    var isDeselect = selectedRowsLen === data.length || selectedRowsLen < data.length && selectedRowsLen > 0;

                    var selectedRows = Array(data.length).fill().map(function (d, i) {
                        return { index: i, dataIndex: data[i].index };
                    });

                    var newRows = [].concat(toConsumableArray(prevState.selectedRows), toConsumableArray(selectedRows));
                    var selectedMap = _this.buildSelectedMap(newRows);

                    if (isDeselect) {
                        newRows = prevState.selectedRows.data.filter(function (_ref2) {
                            var index = _ref2.index;
                            return !selectedMap[index];
                        });
                        selectedMap = _this.buildSelectedMap(newRows);
                    }

                    var selectedDataIndexes = newRows.map(function (row) {
                        return row.dataIndex;
                    });

                    return {
                        curSelectedRows: newRows,
                        selectedRows: {
                            data: newRows,
                            lookup: selectedMap
                        },
                        rowsSelected: selectedDataIndexes
                    };
                }, function () {
                    _this.setTableAction("rowsSelect");
                    if (_this.options.onRowsSelect) {
                        _this.options.onRowsSelect(_this.state.curSelectedRows, _this.state.selectedRows.data);
                    }
                });
            } else if (type === "cell") {
                _this.setState(function (prevState) {

                    if (_this.options.selectableRows === false) {
                        return prevState;
                    }

                    var dataIndex = value.dataIndex;

                    var selectedRows = [].concat(toConsumableArray(prevState.selectedRows.data));
                    var rowPos = -1;

                    for (var cIndex = 0; cIndex < selectedRows.length; cIndex++) {
                        if (selectedRows[cIndex].dataIndex === dataIndex) {
                            rowPos = cIndex;
                            break;
                        }
                    }

                    if (_this.options.onlyOneRowCanBeSelected) {
                        selectedRows = [];
                    }

                    if (rowPos >= 0) {
                        selectedRows.splice(rowPos, 1);
                    } else {
                        selectedRows.push(value);
                    }

                    var selectedDataIndexes = selectedRows.map(function (row) {
                        return row.dataIndex;
                    });

                    return {
                        selectedRows: {
                            lookup: _this.buildSelectedMap(selectedRows),
                            data: selectedRows
                        },
                        rowsSelected: selectedDataIndexes
                    };
                }, function () {
                    _this.setTableAction("rowsSelect");
                    if (_this.options.onRowsSelect && _this.options.selectableRows) {
                        _this.options.onRowsSelect([value], _this.state.selectedRows.data);
                    }

                    if (_this.options.onRowClick) {
                        _this.options.onRowClick(dataObject, value);
                    }
                });
            }
        };

        _this.getTableContentRef = function () {
            return _this.tableContent.current;
        };

        _this.tableRef = false;
        _this.tableContent = React.createRef();
        _this.headCellRefs = {};
        _this.setHeadResizeable = function () {};
        return _this;
    }

    createClass(MaterialDatatable, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            this.initializeTable(this.props);
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this.setHeadResizeable(this.headCellRefs, this.tableRef);
            this.setInitialSort(this.props);
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.data !== nextProps.data || this.props.columns !== nextProps.columns) {
                if (this.props.options === undefined || this.props.options.componentWillReceiveProps === undefined || this.props.options.componentWillReceiveProps === true) {
                    this.initializeTable(nextProps);
                    this.setInitialSort(nextProps);
                }
            } else {
                /* Force reinit the table when `hasStickyColumn` is enabled */
                if (this.props.options.hasStickyColumn === true && this.props.options.stickyColumns.length > 0) {
                    this.initializeTable(nextProps);
                    this.setInitialSort(nextProps);
                }
            }
        }
    }, {
        key: "initializeTable",
        value: function initializeTable(props) {
            this.getDefaultOptions(props);
            this.setTableOptions(props);
            this.setTableData(props, TABLE_LOAD.INITIAL);
        }
    }, {
        key: "setInitialSort",
        value: function setInitialSort(props) {
            if (props.options.sortColumnIndex !== null && props.options.sortColumnIndex !== undefined && props.options.sortColumnDirection !== null && props.options.sortColumnDirection !== undefined) {
                if (props.options.sortColumnIndex >= 0 && props.options.sortColumnIndex < props.columns.length && (props.options.sortColumnDirection === "asc" || props.options.sortColumnDirection === "desc")) {
                    this.sortTableData(props.options.sortColumnIndex, props.options.sortColumnDirection, false);
                }
            }
        }

        //React currently does not support deep merge for defaultProps. Objects are overwritten

    }, {
        key: "getDefaultOptions",
        value: function getDefaultOptions(props) {
            var defaultOptions = {
                responsive: "stacked",
                filterType: "checkbox",
                usePaperPlaceholder: true,
                pagination: true,
                textLabels: textLabels,
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
                    separator: ","
                }
            };

            this.options = merge(defaultOptions, props.options);
        }
    }, {
        key: "validateOptions",
        value: function validateOptions(options) {
            if (options.serverSide && options.onTableChange === undefined) {
                throw Error("onTableChange callback must be provided when using serverSide option");
            }
        }
    }, {
        key: "setTableOptions",
        value: function setTableOptions(props) {
            var newState = _extends({}, this.state, props.options);

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

    }, {
        key: "setTableData",


        // Build the source table data
        value: function setTableData(props, status) {
            var _this2 = this;

            var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
            var data = props.data,
                columns = props.columns,
                options = props.options;

            var stateColumns = this.state.columns;

            var columnData = [],
                filterData = [],
                filterList = [],
                emptyFilterList = [],
                tableData = [];

            columns.forEach(function (column, colIndex) {
                var columnOptions = {
                    display: "true",
                    filter: true,
                    sort: true,
                    download: true,
                    sortDirection: null,
                    width: null,
                    headerNoWrap: null
                };

                if ((typeof column === "undefined" ? "undefined" : _typeof(column)) === "object") {
                    if (column.options && column.options.display !== undefined) {
                        column.options.display = column.options.display.toString();
                    } else if (stateColumns !== undefined && stateColumns.length === columns.length && stateColumns[colIndex].name === column.name) {
                        columnOptions.display = stateColumns[colIndex].display.toString();
                    }

                    if (column.options && column.options.sortDirection !== undefined) {
                        column.options.sortDirection = column.options.sortDirection.toString();
                    } else if (stateColumns !== undefined && stateColumns.length === columns.length && stateColumns[colIndex].name === column.name && stateColumns[colIndex].sortDirection !== null) {
                        columnOptions.sortDirection = stateColumns[colIndex].sortDirection;
                    }

                    columnOptions = _extends({
                        name: column.name,
                        field: column.field
                    }, columnOptions, column.options ? column.options : {});
                } else {
                    columnOptions = _extends({}, columnOptions, { name: column });
                }

                columnData.push(columnOptions);

                filterData[colIndex] = [];
                filterList[colIndex] = [];
                emptyFilterList[colIndex] = [];

                for (var rowIndex = 0; rowIndex < data.length; rowIndex++) {
                    var rowData = status === TABLE_LOAD.INITIAL ? data[rowIndex] : data[rowIndex].data;
                    var value = rowData[columns[colIndex].field];

                    if (typeof tableData[rowIndex] === "undefined") {
                        tableData.push({
                            index: status === TABLE_LOAD.INITIAL ? rowIndex : data[rowIndex].index,
                            data: status === TABLE_LOAD.INITIAL ? data[rowIndex] : data[rowIndex].data
                        });
                    }

                    //Call customBodyRender function we try to take filter value
                    if (typeof columnOptions.customBodyRender === "function") {
                        var tableMeta = _this2.getTableMeta(rowIndex, colIndex, rowData, [], columnData, _this2.state);
                        var funcResult = columnOptions.customBodyRender(rowData, tableMeta);

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

                if (_this2.options.sortFilterList) {
                    var collator = new Intl.Collator(undefined, { numeric: true, sensitivity: "base" });
                    filterData[colIndex].sort(collator.compare);
                }
            });

            if (options.filterList) filterList = options.filterList;

            if (filterList.length !== columns.length) {
                throw new Error("Provided options.filterList does not match the column length");
            }

            var selectedRowsData = {
                data: [],
                lookup: {}
            };

            if (TABLE_LOAD.INITIAL) {
                if (options.rowsSelected && options.rowsSelected.length) {
                    options.rowsSelected.forEach(function (row) {
                        selectedRowsData.data.push({ index: row, dataIndex: row });
                        selectedRowsData.lookup[row] = true;
                    });
                }
            }

            /* set source data and display Data set source set */
            this.setState(function (prevState) {
                return {
                    columns: columnData,
                    filterData: filterData,
                    filterList: filterList,
                    selectedRows: selectedRowsData,
                    data: tableData,
                    displayData: _this2.getDisplayData(columnData, tableData, filterList, prevState.searchText),
                    notModifiedDisplayData: _this2.getDisplayData(columnData, tableData, emptyFilterList, "")
                };
            }, callback);
        }
    }, {
        key: "computeDisplayRow",
        value: function computeDisplayRow(columns, rowObjectData, rowIndex, filterList, searchText) {
            var isFiltered = false;
            var isSearchFound = false;
            var displayRow = [];

            // go through all record columns -> need to change to go thru column definition
            for (var index = 0; index < columns.length; index++) {
                var columnDisplay = '';
                var columnValue = '';

                if (columns[index].customBodyRender) {
                    var tableMeta = this.getTableMeta(rowIndex, index, rowObjectData, columns[index], this.state.data, _extends({}, this.state, {
                        filterList: filterList,
                        searchText: searchText
                    }));

                    var funcResult = columns[index].customBodyRender(rowObjectData, tableMeta, this.updateDataCol.bind(null, rowIndex, index));
                    columnDisplay = funcResult;
                    columnValue = funcResult;

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
                        var display = "Wrong column name " + columns[index].field;
                        columnDisplay = display;
                        columnValue = display;
                    }
                }

                displayRow.push(columnDisplay);

                if (filterList[index].length && filterList[index].indexOf(columnValue) < 0) {
                    isFiltered = true;
                }

                var columnVal = columnValue === null ? "" : columnValue.toString();

                if (searchText) {
                    var searchNeedle = searchText.toString();
                    var searchStack = columnVal.toString();

                    if (!this.options.caseSensitive) {
                        searchNeedle = searchNeedle.toLowerCase();
                        searchStack = searchStack.toLowerCase();
                    }

                    if (searchStack.indexOf(searchNeedle) >= 0) {
                        isSearchFound = true;
                    }
                }
            }

            if (isFiltered || searchText && !isSearchFound) {
                return null;
            }

            return displayRow;
        }
    }, {
        key: "getDisplayData",
        value: function getDisplayData(columns, records, filterList, searchText) {
            var newRows = [];

            for (var index = 0; index < records.length; index++) {
                var value = records[index].data;
                var displayRow = this.computeDisplayRow(columns, value, index, filterList, searchText);

                if (displayRow) {
                    newRows.push({
                        data: displayRow,
                        dataObject: value,
                        dataIndex: records[index].dataIndex !== undefined ? records[index].dataIndex : index
                    });
                }
            }

            return newRows;
        }
    }, {
        key: "getSortDirection",
        value: function getSortDirection(column) {
            return column.sortDirection === "asc" ? "ascending" : "descending";
        }
    }, {
        key: "sortTableData",
        value: function sortTableData(index, order, throwNotification) {
            var _this3 = this;

            this.setState(function (prevState) {
                var columns = cloneDeep(prevState.columns);
                var data = prevState.data;
                var notModifiedDisplayData = prevState.notModifiedDisplayData;

                for (var pos = 0; pos < columns.length; pos++) {
                    if (index !== pos) {
                        columns[pos].sortDirection = null;
                    } else {
                        columns[pos].sortDirection = order;
                    }
                }

                var orderLabel = _this3.getSortDirection(columns[index]);
                var announceText = "Table now sorted by " + columns[index].name + " : " + orderLabel;

                var newState = {
                    columns: columns,
                    announceText: announceText,
                    activeColumn: index,
                    sortColumnIndex: index,
                    sortColumnDirection: order
                };

                if (_this3.options.serverSide) {
                    newState = _extends({}, newState, {
                        data: prevState.data,
                        displayData: prevState.displayData,
                        selectedRows: prevState.selectedRows
                    });
                } else {
                    var sortedData = _this3.sortTable(data, index, order, notModifiedDisplayData, columns[index]);

                    newState = _extends({}, newState, {
                        data: sortedData.data,
                        displayData: _this3.getDisplayData(columns, sortedData.data, prevState.filterList, prevState.searchText),
                        selectedRows: sortedData.selectedRows
                    });
                }

                return newState;
            }, function () {
                if (throwNotification) {
                    _this3.setTableAction("sort");
                    if (_this3.options.onColumnSortChange) {
                        _this3.options.onColumnSortChange(_this3.state.columns[index].name, _this3.getSortDirection(_this3.state.columns[index]));
                    }
                }
            });
        }
    }, {
        key: "toggleSortColumn",
        value: function toggleSortColumn(index) {
            var order = this.state.columns[index].sortDirection === null || this.state.columns[index].sortDirection === "desc" ? "asc" : "desc";

            this.sortTableData(index, order, true);
        }
    }, {
        key: "sortCompare",
        value: function sortCompare(order, column) {
            return function (a, b) {
                if (a.data === null) a.data = "";
                if (b.data === null) b.data = "";

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
    }, {
        key: "sortTable",
        value: function sortTable(data, col, order, notModifiedDisplayData, column) {
            var _this4 = this;

            var sortedData = notModifiedDisplayData.map(function (row, sIndex) {
                return {
                    data: row.data[col],
                    dataObject: row.dataObject,
                    position: row.dataIndex,
                    rowSelected: _this4.state.selectedRows.lookup[row.dataIndex] ? true : false
                };
            });

            sortedData.sort(this.sortCompare(order, column));

            var tableData = [];
            var selectedRows = [];

            for (var i = 0; i < sortedData.length; i++) {
                var row = sortedData[i];
                var sortResultObject = {
                    data: notModifiedDisplayData[row.position].dataObject,
                    dataIndex: row.position,
                    index: i
                };
                //  data[row.position].dataIndex = i;
                tableData.push(sortResultObject);
                if (row.rowSelected) {
                    selectedRows.push({ index: i, dataIndex: row.position });
                }
            }

            return {
                data: tableData,
                selectedRows: {
                    lookup: this.buildSelectedMap(selectedRows),
                    data: selectedRows
                }
            };
        }
    }, {
        key: "renderTableToolbar",
        value: function renderTableToolbar() {
            var title = this.props.title;
            var _state = this.state,
                columns = _state.columns,
                filterData = _state.filterData,
                filterList = _state.filterList,
                selectedRows = _state.selectedRows;


            return this.options.showSelectedRowsToolbar && selectedRows.data.length ? React.createElement(MaterialDatatableToolbarSelect$1, {
                options: this.options,
                selectedRows: selectedRows,
                onRowsDelete: this.selectRowDelete
            }) : React.createElement(MaterialDatatableToolbar$1, {
                columns: columns,
                data: this.state.displayData,
                filterData: filterData,
                filterList: filterList,
                filterUpdate: this.filterUpdate,
                options: this.options,
                searchText: this.state.searchText,
                resetFilters: this.resetFilters,
                searchTextUpdate: this.searchTextUpdate,
                tableRef: this.getTableContentRef,
                title: title,
                toggleViewColumn: this.toggleViewColumn
            });
        }
    }, {
        key: "renderTable",
        value: function renderTable() {
            var _this5 = this;

            var _props = this.props,
                classes = _props.classes,
                title = _props.title;
            var _state2 = this.state,
                activeColumn = _state2.activeColumn,
                displayData = _state2.displayData,
                columns = _state2.columns,
                page = _state2.page,
                filterList = _state2.filterList,
                rowsPerPage = _state2.rowsPerPage,
                selectedRows = _state2.selectedRows,
                searchText = _state2.searchText;


            var rowCount = this.options.count || displayData.length;

            return React.createElement(
                "div",
                {
                    ref: this.tableContent,
                    style: { position: "relative" },
                    className: this.options.responsive === "scroll" ? classes.responsiveScroll : null },
                this.options.resizableColumns && React.createElement(MaterialDatatableResize$1, { key: rowCount, setResizeable: function setResizeable(fn) {
                        return _this5.setHeadResizeable = fn;
                    } }),
                React.createElement(
                    Table,
                    { ref: function ref(el) {
                            return _this5.tableRef = el;
                        }, tabIndex: "0", role: "grid" },
                    React.createElement(
                        "caption",
                        { className: classes.caption },
                        title
                    ),
                    React.createElement(MaterialDatatableHead$1, {
                        activeColumn: activeColumn,
                        data: this.state.displayData,
                        count: rowCount,
                        columns: columns,
                        page: page,
                        rowsPerPage: rowsPerPage,
                        handleHeadUpdateRef: function handleHeadUpdateRef(fn) {
                            return _this5.updateToolbarSelect = fn;
                        },
                        selectedRows: selectedRows,
                        selectRowUpdate: this.selectRowUpdate,
                        toggleSort: function toggleSort(index) {
                            return _this5.toggleSortColumn(index);
                        },
                        setCellRef: this.setHeadCellRef,
                        options: this.options
                    }),
                    React.createElement(MaterialDatatableBody$1, {
                        data: this.state.displayData,
                        count: rowCount,
                        columns: columns,
                        page: page,
                        rowsPerPage: rowsPerPage,
                        selectedRows: selectedRows,
                        selectRowUpdate: this.selectRowUpdate,
                        options: this.options,
                        searchText: searchText,
                        filterList: filterList
                    })
                )
            );
        }
    }, {
        key: "renderFilterList",
        value: function renderFilterList() {
            var filterList = this.state.filterList;


            return React.createElement(MaterialDatatableFilterList$1, {
                options: this.options,
                filterList: filterList,
                filterUpdate: this.filterUpdate });
        }
    }, {
        key: "renderPagination",
        value: function renderPagination() {
            var _state3 = this.state,
                displayData = _state3.displayData,
                page = _state3.page,
                rowsPerPage = _state3.rowsPerPage;


            var rowCount = this.options.count || displayData.length;

            return React.createElement(
                Table,
                null,
                this.options.customFooter ? this.options.customFooter(rowCount, page, rowsPerPage, this.changeRowsPerPage, this.changePage) : this.options.pagination && React.createElement(MaterialDatatablePagination$1, {
                    count: rowCount,
                    page: page,
                    rowsPerPage: rowsPerPage,
                    changeRowsPerPage: this.changeRowsPerPage,
                    changePage: this.changePage,
                    component: "div",
                    options: this.options
                })
            );
        }
    }, {
        key: "renderLiveAnnounce",
        value: function renderLiveAnnounce() {
            var _this6 = this;

            var classes = this.props.classes;
            var announceText = this.state.announceText;


            return React.createElement(
                "div",
                { className: classes.liveAnnounce, "aria-live": "polite", ref: function ref(el) {
                        return _this6.announceRef = el;
                    } },
                announceText
            );
        }
    }, {
        key: "render",
        value: function render() {
            var classes = this.props.classes;


            return this.options.usePaperPlaceholder ? React.createElement(
                Paper,
                { elevation: 4, className: classes.paper },
                this.renderTableToolbar(),
                this.renderFilterList(),
                this.renderTable(),
                this.renderPagination(),
                this.renderLiveAnnounce()
            ) : React.createElement(
                React.Fragment,
                null,
                this.renderTableToolbar(),
                this.renderFilterList(),
                this.renderTable(),
                this.renderPagination(),
                this.renderLiveAnnounce()
            );
        }
    }]);
    return MaterialDatatable;
}(React.Component);

MaterialDatatable$1.defaultProps = {
    title: "",
    options: {},
    data: [],
    columns: []
};


var MaterialDatatable$2 = styles.withStyles(defaultTableStyles, { name: "MaterialDatatable" })(MaterialDatatable$1);

module.exports = MaterialDatatable$2;
//# sourceMappingURL=index.js.map
