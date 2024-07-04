

//Get root html element
var rootHtmlElement = document.getElementById("root");

//Initialize root react element
var rootReactElement = ReactDOM.createRoot(rootHtmlElement);

//Create basic react component

var headingReactSectionElement = React.createElement(
    "header",
    { className: "navigation", id: "site-header" },
    React.createElement(
        "h1",
        null,
        "Hello JSX from React"
    ),
    React.createElement(
        "h2",
        null,
        "JSX is awesome"
    ),
    React.createElement(
        "p",
        null,
        "Have to decide what project to do for the final exam"
    ),
    React.createElement(
        "p",
        null,
        "Maybe a gallery for books?"
    )
);

//Render content
rootReactElement.render(headingReactSectionElement);