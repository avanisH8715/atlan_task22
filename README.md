1 => Functions of The App

Easily let you switch between the table

you can easily put multiline SQL Queries

The Page is fully responsive

Contains data of 8 csv file

can give the feature of sharing your data to other teams

allows you easily to export your data into excel form (For eg: only employee table for now)

Used Hooks for ease of access of data

Few Eample of SQL QUERIES You can put

Select \* from customer
Select employeeID, title , city, address from employe
Select orderID,customerID,employeeID from orders

2 => Calculate The Load Time of the Page

React Developer Tools is a Chrome extension that lets you inspect the props and state of your components, as well as inspect their performance.

In the React Developer Tools tab, there will be a tab called "Profiler". Click the record button to start recording performance data and, after using your app, click the "Stop" button.

The Profiler will display a flame chart of the components in your app and how long they had taken to render, represented by the length of the bar. A commit is when the determined changes to the DOM are applied by React.

Bars in grey represent components that did not render during the commit and bars in the blue-yellow color range represent components that rendered during the commit. Yellow indicates a longer own render time of the components, and blue-greens represent shorter times.

The right-hand pane shows timing information about the commit and when a component is selected, it will show the component's props and state. Clicking the blue chart icon at the top-right of the dialog will show a bar chart of the component's render times.

The Profiler tab gives us a convenient, visual way to inspect render times and navigate through commits while viewing the props and state of components, making it faster to investigate performance issues and impact.

3 => Steps to reduce the load time of the Page

Using Eslint-plugin-react

Making Data Immutable

Binding Functions Early
