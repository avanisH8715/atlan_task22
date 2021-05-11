import React from "react";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import { customer } from "../Data/CustomerData";
import { category } from "../Data/CategoryData";
import { employee } from "../Data/EmployeeData";
import { orders } from "../Data/OrderData";
import { products } from "../Data/ProductData";
import { regions } from "../Data/RegionData";
import { supplier } from "../Data/SupplierData";
import { territory } from "../Data/TerritoryData";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import MailOutlineRoundedIcon from "@material-ui/icons/MailOutlineRounded";
import ReactExport from "react-data-export";

const drawerWidth = 240;

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const csvTable = [
  "employee",
  "category",
  "orders",
  "regions",
  "products",
  "supplier",
  "customer",
  "territory",
];

const columns0 = [
  {
    id: "employeeID",
    label: "employeeID",
    minWidth: 20,
  },
  { id: "firstName", label: "firstName", minWidth: 30 },
  {
    id: "lastName",
    label: "lastName",
    minWidth: 90,

    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "title",
    label: "title",
    minWidth: 170,

    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "birthDate",
    label: "birthDate",
    minWidth: 170,
    // align: 'right',
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "address",
    label: "address",
    minWidth: 170,
    // align: 'right',
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "city",
    label: "city",
    minWidth: 100,
    //align: 'right',
    format: (value) => value.toLocaleString("en-US"),
  },

  {
    id: "country",
    label: "country",
    minWidth: 100,
    // align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: "postalCode",
    label: "postalCode",
    minWidth: 100,
    // align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: "homePhone",
    label: "homePhone",
    minWidth: 170,
    // align: 'right',
    format: (value) => value.toFixed(2),
  },
];
const columns1 = [
  {
    id: "categoryID",
    label: "ID",
    minWidth: 80,
    //  align: 'right',
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "categoryName",
    label: "Name",
    minWidth: 100,
    //  align: 'right',
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "description",
    label: "Description",
    minWidth: 120,
    //  align: 'right',
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "picture",
    label: "image",
    minWidth: 100,
    //  align: 'right',
    format: "image",
  },
];
const columns2 = [
  {
    id: "orderID",
    label: "Order Id",
    minWidth: 80,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "employeeID",
    label: "Order Id",
    minWidth: 80,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "customerID",
    label: "Order Id",
    minWidth: 80,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "orderDate",
    label: "Order Date",
    minWidth: 150,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "shippedDate",
    label: "Shipping Date",
    minWidth: 150,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "shipName",
    label: "Shipping Name",
    minWidth: 150,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "shipAddress",
    label: "Shipping Address",
    minWidth: 150,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "shipCity",
    label: "Shipping City",
    minWidth: 150,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "shipPostalCode",
    label: "Postal Code",
    minWidth: 150,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "shipCountry",
    label: "Country",
    minWidth: 150,
    format: (value) => value.toLocaleString("en-US"),
  },
];
const columns3 = [
  { id: "regionID", label: "ID", minWidth: 120 },
  { id: "regionDescription", label: "Description", minWidth: 100 },
];
const columns4 = [
  {
    id: "productID",
    label: "Product Id",
    minWidth: 80,
  },
  {
    id: "productName",
    label: "Product Name",
    minWidth: 150,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "supplierID",
    label: "Supplier Id",
    minWidth: 60,
  },
  {
    id: "categoryID",
    label: "Category Id",
    minWidth: 60,
  },
  {
    id: "quantityPerUnit",
    label: "Units",
    minWidth: 60,
  },
  {
    id: "unitPrice",
    label: "Price",
    minWidth: 60,
  },
  {
    id: "unitsInStock",
    label: "Stock Unit",
    minWidth: 60,
  },
  {
    id: "reorderLevel",
    label: "Reorder Level",
    minWidth: 120,
  },
  {
    id: "unitsOnOrder",
    label: "Order Unit",
    minWidth: 60,
  },
];
const columns5 = [
  {
    id: "supplierID",
    label: "Supplier ID",
    minWidth: 120,

    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "companyName",
    label: "Company Name",
    minWidth: 100,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "contactName",
    label: "Contact Name",
    minWidth: 100,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "contactTitle",
    label: "Contact Title",
    minWidth: 100,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "address",
    label: "Contact Address",
    minWidth: 150,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "city",
    label: "City",
    minWidth: 120,
    //align: 'right',
    format: (value) => value.toLocaleString("en-US"),
  },

  {
    id: "country",
    label: "Country",
    minWidth: 120,
    // align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: "phone",
    label: "Phone Number",
    minWidth: 150,
    format: (value) => value.toFixed(2),
  },
];
const columns6 = [
  { id: "customerID", label: "ID", minWidth: 120 },
  { id: "companyName", label: "Company", minWidth: 100 },
  {
    id: "contactName",
    label: "Name",
    minWidth: 170,
    //  align: 'right',
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "contactTitle",
    label: "Position",
    minWidth: 170,
    // align: 'right',
    format: (value) => value.toLocaleString("en-US"),
  },

  {
    id: "address",
    label: "Address",
    minWidth: 170,
    // align: 'right',
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "city",
    label: "City",
    minWidth: 150,
    //align: 'right',
    format: (value) => value.toLocaleString("en-US"),
  },

  {
    id: "country",
    label: "Country",
    minWidth: 150,
    // align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: "phone",
    label: "Phone Number",
    minWidth: 170,
    format: (value) => value.toFixed(2),
  },
];
const columns7 = [
  { id: "territoryID", label: "Territory ID", minWidth: 120 },
  { id: "territoryDescription", label: "Territory Description", minWidth: 100 },
  { id: "regionID", label: "Region ID", minWidth: 120 },
];

const getColumnFromTableName = (tableName) => {
  switch (tableName) {
    case "employee":
      return columns0;
    case "category":
      return columns1;
    case "orders":
      return columns2;
    case "regions":
      return columns3;
    case "products":
      return columns4;
    case "supplier":
      return columns5;
    case "customer":
      return columns6;
    case "territory":
      return columns7;
    default:
      return [];
  }
};

const getDataFromTableName = (tableName) => {
  switch (tableName) {
    case "employee":
      return employee;
    case "category":
      return category;
    case "orders":
      return orders;
    case "regions":
      return regions;
    case "products":
      return products;
    case "supplier":
      return supplier;
    case "customer":
      return customer;
    case "territory":
      return territory;
    default:
      return [];
  }
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  root1: {
    "& > *": {
      margin: theme.spacing(1),
      borderColor: "#f50057",
      width: "100ch",
    },
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    // padding: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1),
  },
  roottable: {
    width: "100%",
  },
  containertable: {
    maxHeight: 440,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [view, setView] = React.useState(0);
  const [query, setQuery] = React.useState("");
  const [queryArray, setQuerArray] = React.useState([]);
  const [columns, setColumns] = React.useState(columns0);
  const [tableData, setTableData] = React.useState(employee);
  console.log(view);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleQuery = (event) => {
    setQuery(event.target.value);
  };
  const passQuery = () => {
    console.log(`${query}`);
    var modQuery = query.replace(/\n/g, " ");
    modQuery = modQuery.replace(/,/g, " ");
    modQuery = modQuery.replace(/ +/g, " ");
    const queryArray = modQuery.split(" ");
    const tableName = queryArray[queryArray.length - 1];
    const columnArray = getColumnFromTableName(tableName);
    let newColumnArray = [];
    queryArray.pop();
    queryArray.pop();
    queryArray.shift();
    columnArray.map((column) => {
      if (
        queryArray.includes(column.id) ||
        (queryArray.length == 1 && queryArray[0] == "*")
      ) {
        newColumnArray.push(column);
      }
    });
    setColumns(newColumnArray);
    console.log(newColumnArray);
    const dataArray = getDataFromTableName(tableName);
    let newDataArray = [];
    dataArray.map((data) => {
      // console.log(data);
      let newData = {};
      for (const prop in data) {
        newColumnArray.map((col) => {
          // console.log(col.id === prop);
          if (col.id === prop) {
            newData[prop] = data[prop];
          }
        });
      }
      newDataArray.push(newData);
    });
    setTableData(newDataArray);
    console.log(newDataArray);
    setView(8);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const drawer = (
    <div>
      <div className={classes.toolbar}>
        <div
          class="title1"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <h2>
            <span style={{ marginLeft: "15px" }}>Atlan SQL</span>
            <br />
            <br />
            <span style={{ marginLeft: "30px" }}>Editor</span>
          </h2>
        </div>
      </div>
      <Divider />
      <List>
        {csvTable.map((text, index) => (
          <div
            class="Side_buttons"
            style={{
              margin: "15px 5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              variant={view === index ? "contained" : "outlined"}
              color="secondary"
              style={{ width: "60%", height: "60px" }}
              onClick={() => {
                setView(` ${index} `);
                setColumns(getColumnFromTableName(text));
                console.log(columns);
                setTableData(getDataFromTableName(text));
                console.log(tableData);
                setQuery("");
              }}
            >
              {text}
            </Button>
          </div>
        ))}
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}></AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        {/* APP BAR CODE STARTS FROME HERE */}
        <div
          className={classes.toolbar}
          style={{ background: "#f50057", padding: "0px" }}
        >
          <button class="btn success" style={{ margin: "8px" }}>
            <i class="fa fa-sign-out" aria-hidden="true"></i> Sign Out
          </button>
          <button class="btn success" style={{ margin: "8px" }}>
            <i class="fa fa-home" /> My Profile
          </button>
        </div>

        {/* APP BAR CODE END HERE */}

        <div className="main_componenet">
          {/* SEARCH BAR , RUN AND DIALOG CODE STARTS HERE*/}

          <div
            className="search_componnent"
            style={{
              width: "100%",
              height: "20%",
              margin: "20px",
              //display: "flex",
              justifyContent: "left",
            }}
          >
            <form className={classes.root1} noValidate autoComplete="off">
              <TextField
                id="outlined-textarea"
                label="Search..."
                placeholder="Enter Your SQL Query Here"
                multiline
                variant="outlined"
                value={query}
                onChange={handleQuery}
              />
            </form>
            <div style={{ display: "flex" }}>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                endIcon={<SendIcon />}
                style={{ width: "120px" }}
                onClick={passQuery}
              >
                Run
              </Button>

              <Button
                variant="outlined"
                color="secondary"
                className={classes.button}
                onClick={handleClickOpen}
                startIcon={<MailOutlineRoundedIcon />}
              >
                Share
              </Button>
              <ExcelFile
                element={
                  <Button
                    variant="outlined"
                    color="secondary"
                    className={classes.button}
                  >
                    Export
                  </Button>
                }
              >
                <ExcelSheet data={employee} name="Employees">
                  {
                    columns0.map((data) => (
                      <ExcelColumn label={data.id} value={data.id} />
                    ))}
                </ExcelSheet>
              </ExcelFile>
            </div>
            <Dialog
              open={open}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleClose}
              aria-labelledby="alert-dialog-slide-title"
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogTitle id="alert-dialog-slide-title">
                {"Sharing Data Through Mail"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                  This function will help you to share this data with Business
                  analytics team directly into their account.
                </DialogContentText>
              </DialogContent>
              <DialogActions></DialogActions>
            </Dialog>
          </div>

          {/* SEARCH BAR ,RUN AND DIALOG CODE ENDS HERE */}

          {/* CONDITIONAL RENDRING OF TABLE STARTS FROM HERE */}

          {
            // EMPLOYEE TABLE :
            // CATEGORY TABLE:
            // ORDERS TABLE :
            // REGION TABLE :
            // PRODUCT TABEL:
            // SUPPLIER TABLE:
            // CUSTOMER TABLE:
            // TERRITORY  TABLE :

            view == 0 ? (
              <div className="stock-container">
                <Paper className={classes.roottable}>
                  <TableContainer className={classes.containertable}>
                    <Table stickyHeader aria-label="sticky table">
                      <TableHead>
                        <TableRow>
                          {columns0.map((column) => (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              style={{ minWidth: column.minWidth }}
                            >
                              {column.id}
                            </TableCell>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {employee
                          .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                          )
                          .map((row) => {
                            return (
                              <TableRow
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                key={row.code}
                              >
                                {columns0.map((column) => {
                                  const value = row[column.id];
                                  return (
                                    <TableCell
                                      key={column.id}
                                      align={column.align}
                                    >
                                      {column.format &&
                                        typeof value === "number"
                                        ? column.format(value)
                                        : value}
                                    </TableCell>
                                  );
                                })}
                              </TableRow>
                            );
                          })}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <TablePagination
                    rowsPerPageOptions={[5, 10, 25, 100]}
                    component="div"
                    count={employee.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                  />
                </Paper>
              </div>
            ) : view == 1 ? (
              <div className="stock-container">
                <Paper className={classes.roottable}>
                  <TableContainer className={classes.containertable}>
                    <Table stickyHeader aria-label="sticky table">
                      <TableHead>
                        <TableRow>
                          {columns1.map((column) => (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              style={{ minWidth: column.minWidth }}
                            >
                              {column.id}
                            </TableCell>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {category
                          .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                          )
                          .map((row) => {
                            return (
                              <TableRow
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                key={row.code}
                              >
                                {columns1.map((column) => {
                                  const value = row[column.id];
                                  // column === selcted column
                                  return (
                                    <TableCell
                                      key={column.id}
                                      align={column.align}
                                    >
                                      {column.format &&
                                        typeof value === "number"
                                        ? column.format(value)
                                        : value}
                                    </TableCell>
                                  );
                                  // null
                                })}
                              </TableRow>
                            );
                          })}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <TablePagination
                    rowsPerPageOptions={[5, 10, 25, 100]}
                    component="div"
                    count={employee.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                  />
                </Paper>
              </div>
            ) : view == 2 ? (
              <div className="stock-container">
                <Paper className={classes.roottable}>
                  <TableContainer className={classes.containertable}>
                    <Table stickyHeader aria-label="sticky table">
                      <TableHead>
                        <TableRow>
                          {columns2.map((column) => (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              style={{ minWidth: column.minWidth }}
                            >
                              {column.id}
                            </TableCell>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {orders
                          .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                          )
                          .map((row) => {
                            return (
                              <TableRow
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                key={row.code}
                              >
                                {columns2.map((column) => {
                                  const value = row[column.id];
                                  return (
                                    <TableCell
                                      key={column.id}
                                      align={column.align}
                                    >
                                      {column.format &&
                                        typeof value === "number"
                                        ? column.format(value)
                                        : value}
                                    </TableCell>
                                  );
                                })}
                              </TableRow>
                            );
                          })}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <TablePagination
                    rowsPerPageOptions={[5, 10, 25, 100]}
                    component="div"
                    count={orders.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                  />
                </Paper>
              </div>
            ) : view == 3 ? (
              <div className="stock-container">
                <Paper className={classes.roottable}>
                  <TableContainer className={classes.containertable}>
                    <Table stickyHeader aria-label="sticky table">
                      <TableHead>
                        <TableRow>
                          {columns3.map((column) => (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              style={{ minWidth: column.minWidth }}
                            >
                              {column.id}
                            </TableCell>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {regions
                          .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                          )
                          .map((row) => {
                            return (
                              <TableRow
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                key={row.code}
                              >
                                {columns3.map((column) => {
                                  const value = row[column.id];
                                  return (
                                    <TableCell
                                      key={column.id}
                                      align={column.align}
                                    >
                                      {column.format &&
                                        typeof value === "number"
                                        ? column.format(value)
                                        : value}
                                    </TableCell>
                                  );
                                })}
                              </TableRow>
                            );
                          })}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <TablePagination
                    rowsPerPageOptions={[5, 10, 25, 100]}
                    component="div"
                    count={regions.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                  />
                </Paper>
              </div>
            ) : view == 4 ? (
              <div className="stock-container">
                <Paper className={classes.roottable}>
                  <TableContainer className={classes.containertable}>
                    <Table stickyHeader aria-label="sticky table">
                      <TableHead>
                        <TableRow>
                          {columns4.map((column) => (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              style={{ minWidth: column.minWidth }}
                            >
                              {column.id}
                            </TableCell>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {products
                          .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                          )
                          .map((row) => {
                            return (
                              <TableRow
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                key={row.code}
                              >
                                {columns4.map((column) => {
                                  const value = row[column.id];
                                  return (
                                    <TableCell
                                      key={column.id}
                                      align={column.align}
                                    >
                                      {column.format &&
                                        typeof value === "number"
                                        ? column.format(value)
                                        : value}
                                    </TableCell>
                                  );
                                })}
                              </TableRow>
                            );
                          })}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <TablePagination
                    rowsPerPageOptions={[5, 10, 25, 100]}
                    component="div"
                    count={products.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                  />
                </Paper>
              </div>
            ) : view == 5 ? (
              <div className="stock-container">
                <Paper className={classes.roottable}>
                  <TableContainer className={classes.containertable}>
                    <Table stickyHeader aria-label="sticky table">
                      <TableHead>
                        <TableRow>
                          {columns5.map((column) => (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              style={{ minWidth: column.minWidth }}
                            >
                              {column.id}
                            </TableCell>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {supplier
                          .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                          )
                          .map((row) => {
                            return (
                              <TableRow
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                key={row.code}
                              >
                                {columns5.map((column) => {
                                  const value = row[column.id];
                                  return (
                                    <TableCell
                                      key={column.id}
                                      align={column.align}
                                    >
                                      {column.format &&
                                        typeof value === "number"
                                        ? column.format(value)
                                        : value}
                                    </TableCell>
                                  );
                                })}
                              </TableRow>
                            );
                          })}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <TablePagination
                    rowsPerPageOptions={[5, 10, 25, 100]}
                    component="div"
                    count={supplier.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                  />
                </Paper>
              </div>
            ) : view == 6 ? (
              <div className="stock-container">
                <Paper className={classes.roottable}>
                  <TableContainer className={classes.containertable}>
                    <Table stickyHeader aria-label="sticky table">
                      <TableHead>
                        <TableRow>
                          {columns6.map((column) => (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              style={{ minWidth: column.minWidth }}
                            >
                              {column.id}
                            </TableCell>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {customer
                          .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                          )
                          .map((row) => {
                            return (
                              <TableRow
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                key={row.code}
                              >
                                {columns6.map((column) => {
                                  const value = row[column.id];
                                  return (
                                    <TableCell
                                      key={column.id}
                                      align={column.align}
                                    >
                                      {column.format &&
                                        typeof value === "number"
                                        ? column.format(value)
                                        : value}
                                    </TableCell>
                                  );
                                })}
                              </TableRow>
                            );
                          })}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <TablePagination
                    rowsPerPageOptions={[5, 10, 25, 100]}
                    component="div"
                    count={customer.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                  />
                </Paper>
              </div>
            ) : view == 7 ? (
              <div className="stock-container">
                <Paper className={classes.roottable}>
                  <TableContainer className={classes.containertable}>
                    <Table stickyHeader aria-label="sticky table">
                      <TableHead>
                        <TableRow>
                          {columns7.map((column) => (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              style={{ minWidth: column.minWidth }}
                            >
                              {column.id}
                            </TableCell>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {territory
                          .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                          )
                          .map((row) => {
                            return (
                              <TableRow
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                key={row.code}
                              >
                                {columns7.map((column) => {
                                  const value = row[column.id];
                                  return (
                                    <TableCell
                                      key={column.id}
                                      align={column.align}
                                    >
                                      {column.format &&
                                        typeof value === "number"
                                        ? column.format(value)
                                        : value}
                                    </TableCell>
                                  );
                                })}
                              </TableRow>
                            );
                          })}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <TablePagination
                    rowsPerPageOptions={[5, 10, 25, 100]}
                    component="div"
                    count={territory.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                  />
                </Paper>
              </div>
            ) : view === 8 ? (
              <div className="stock-container">
                <Paper className={classes.roottable}>
                  <TableContainer className={classes.containertable}>
                    <Table stickyHeader aria-label="sticky table">
                      <TableHead>
                        <TableRow>
                          {columns.map((column) => (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              style={{ minWidth: column.minWidth }}
                            >
                              {column.id}
                            </TableCell>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {tableData
                          .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                          )
                          .map((row) => {
                            return (
                              <TableRow
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                key={row.code}
                              >
                                {columns.map((column) => {
                                  const value = row[column.id];
                                  return (
                                    <TableCell
                                      key={column.id}
                                      align={column.align}
                                    >
                                      {column.format &&
                                        typeof value === "number"
                                        ? column.format(value)
                                        : value}
                                    </TableCell>
                                  );
                                })}
                              </TableRow>
                            );
                          })}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={tableData.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                  />
                </Paper>
              </div>
            ) : null
          }

          {/* CONDITIONAL RENDRING OF TABLE ENDS HERE */}
        </div>
      </main>
    </div>
  );
}
ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};
export default ResponsiveDrawer;
