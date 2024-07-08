
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
function Main(props) {
    return React.createElement("main", {}, React.createElement("h3", {}, props.title), React.createElement("ul", {}, React.createElement("li", {}, "The Matrix"), React.createElement("li", {}, "Man of Steel")));
}

var siteContent = React.createElement("div", {}, headingReactSectionElement, React.createElement(Main, { title: "Best movies" }));

var siteContentJSX = React.createElement(
    "div",
    null,
    headingReactSectionElement,
    React.createElement(Main, { title: "Best movies JSX style" })
);

//Render content
rootReactElement.render(siteContentJSX);