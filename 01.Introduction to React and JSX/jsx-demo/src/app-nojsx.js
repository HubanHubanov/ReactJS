

//Get root html element
const rootHtmlElement = document.getElementById("root");

//Initialize root react element
const rootReactElement = ReactDOM.createRoot(rootHtmlElement);

//Create basic react component
const headingReactElement = React.createElement("h1", null, "Hello JSX from React");
const secondHeadingReactElement = React.createElement("h2", null, "JSX is awesome");
const headingReactSectionElement =React.createElement(
    "header",
     null, 
     headingReactElement,
    secondHeadingReactElement
); 

//Render content
rootReactElement.render(headingReactSectionElement);
