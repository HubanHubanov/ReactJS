
//Get root html element
const rootHtmlElement = document.getElementById("root");

//Initialize root react element
const rootReactElement = ReactDOM.createRoot(rootHtmlElement);

//Create basic react component

const headingReactSectionElement = (
 <  header className="navigation" id="site-header">
        <h1>Hello JSX from React</h1>
        <h2>JSX is awesome</h2>
        <p>Have to decide what project to do for the final exam</p>
        <p>Maybe a gallery for books?</p>
    </header>
    );
    function Main(props) {
        return React.createElement(
        "main",
        {},
        React.createElement("h3", {}, props.title),
        React.createElement(
            "ul",
            {},
            React.createElement(
                "li",
                {},
                "The Matrix"
            ),
            React.createElement(
                "li",
                {},
                "Man of Steel"
            )
            
        )
        );
    }

  const siteContent = React.createElement(
    "div",
    {},
    headingReactSectionElement,
    React.createElement(
        Main,
        {title: "Best movies"}
    )
  );

  const siteContentJSX = (
    <div>
        {headingReactSectionElement}
        <Main title="Best movies JSX style"/>
    </div>
  )


//Render content
rootReactElement.render(siteContentJSX);


