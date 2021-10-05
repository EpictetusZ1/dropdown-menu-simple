const Menu = ( ()=> {

    let id = false
    let elements = false

    const setId = (MenuID) => {
        if (typeof MenuID !== "string") throw new TypeError(`${MenuID} is not of type: String. Please enter a string.`)
        id = true
        return document.getElementById(`${MenuID}`)
    }

    const setElements = (menuElClass) => {
        if (typeof menuElClass !== "string") throw new TypeError(`${menuElClass} is not of type: String. Please enter a string.`)
        if (menuElClass.charAt(0) !== ".") throw new SyntaxError(`The first char in: ${menuElClass} is not a valid class selector, please prepend a PERIOD character.`)
        elements = true
        return document.querySelectorAll(`${menuElClass}`)
    }

    const buildMenu = (menuID, menuEls) => {
        let menu = setId(menuID)
        let menuChildren = setElements(menuEls)

        const setTarget = () => {
            if (id === true && elements === true) {
                let myText = document.createElement("p")
                myText.textContent = "Hello World"
                menu.appendChild(myText)
            }
        }
        setTarget()
    }

    return {
       buildMenu
    }

})()

export default Menu