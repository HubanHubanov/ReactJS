

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


    


//Render content
rootReactElement.render(headingReactSectionElement);


