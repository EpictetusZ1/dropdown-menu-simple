const Menu = ( ()=> {

    let id = false
    let elements = false

    let menuID
    let menuEls

    const setId = (string) => {
        if (typeof string !== "string") throw new TypeError(`${string} is not of type: String. Please enter a string.`)
        id = true
        return menuID = document.getElementById(`${string}`)
    }

    const setElements = (menuElClass) => {
        if (typeof menuElClass !== "string") throw new TypeError(`${menuElClass} is not of type: String. Please enter a string.`)
        if (menuElClass.charAt(0) !== ".") throw new SyntaxError(`The first char in: ${menuElClass} is not a valid class selector, please prepend a PERIOD character.`)
        elements = true
        return menuEls = document.querySelectorAll(`${menuElClass}`)
    }

    const makeMenu = () => {
        if (id === true && elements === true) {

        }
    }

    return {
        setId,
        setElements
    }

})()

module.exports = Menu