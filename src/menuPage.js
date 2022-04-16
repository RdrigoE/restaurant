const loadMenuPage = () => {
    let page = document.getElementById("content")
    let newHtml = document.createDocumentFragment();

    let gridContainer = document.createElement("div")
    gridContainer.className = "gridContainer"


    let empty1 = document.createElement("div")
    empty1.className = "empty 1"

    gridContainer.appendChild(empty1)

    let mainContent = document.createElement("div")
    mainContent.className = "mainContent"

    let header = document.createElement("div");
    header.className = "header";
    let h1 = document.createElement("h1")
    h1.className = "title"
    h1.textContent = "Menu"

    header.appendChild(h1)

    mainContent.appendChild(header);

    let mCh1 = document.createElement("h1")
    mCh1.textContent = "Delicious Food"

    let mCp = document.createElement("p")
    mCp.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam diam ligula, ullamcorper vitae malesuada et, ultrices vitae nisi. In imperdiet, velit a tincidunt luctus, nisi augue fringilla urna, eu pellentesque velit lacus et erat. Nunc eleifend vel enim ac mattis. Praesent consequat dolor lectus, eu ullamcorper sem malesuada vitae. Aenean scelerisque ultricies nulla id tincidunt. Aliquam non velit lacus. Proin ex ex, ornare eget lacinia sit amet, tempor ut nunc. Nulla efficitur sem venenatis scelerisque bibendum.Donec turpis sapien, mollis nec condimentum sed, sollicitudin in nunc. Integer nec mi id purus varius consectetur et nec enim"

    mainContent.appendChild(mCh1)
    mainContent.appendChild(mCp)

    gridContainer.appendChild(mainContent)

    let empty2 = document.createElement("div")
    empty2.className = "empty 2"

    gridContainer.appendChild(empty2)

    newHtml.appendChild(gridContainer)

    page.appendChild(newHtml)
}

export default loadMenuPage