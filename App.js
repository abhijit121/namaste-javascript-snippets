const heading1 = React.createElement("h1",{
    id:"heading1"
},"Testing Reach API H1");

const heading2 = React.createElement("h2",{
    id:"heading2"
},"Testing Reach API H2");

const contianer = React.createElement("div",{
    id:"contianer"
},[heading1,heading2]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(contianer);