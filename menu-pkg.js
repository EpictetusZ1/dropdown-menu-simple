const Menu = ( ()=> {

    let funCalled = false

    const setParent = (parentElement) => {
        if (parentElement.charAt(0) === "#") throw new SyntaxError(`${parentElement} requires '.querySelector()' style input`)
        funCalled = true
        return document.querySelector(`${parentElement}`)
    }

    const makeBtn = (menuID) => {
        let btn = document.createElement("div")
        btn.className = `${menuID}-btn`
        return btn
    }

    const setId = (menuID) => {
        if (typeof menuID !== "string") throw new TypeError(`${menuID} is not of type: String. Please enter a string.`)
        funCalled = true
        let menuEl = document.createElement("div")
        menuEl.id = `${menuID}`
        return menuEl
    }

    const makeLink = (i) => {
        let menuLink = document.createElement("a")
        menuLink.href = "#"
        menuLink.className = `link-${i}`
        return menuLink
    }

    const makeElement = (menuEls, i) => {
        let menuItem = document.createElement("div")
        menuItem.className = `${menuEls} item-${i}`
        return menuItem
    }

    const refChildEls = (menuElClass) => {
        if (typeof menuElClass !== "string") throw new TypeError(`${menuElClass} is not of type: String. Please enter a string.`)
        return document.querySelectorAll(`.${menuElClass}`)
    }

    const setNumItems = (numOfItems) => {
        if (typeof numOfItems !== "number") throw new TypeError(`Please pass an Integer value`)
        return Math.floor(numOfItems)
    }

    const setDropdown = (menuID) => {
        let dropDownContainer = document.createElement("div")
        dropDownContainer.className = `${menuID}-dropdown`
        return dropDownContainer
    }

    const alertMenuItems = (itemsLen, int) => {
        if (itemsLen !== int) console.warn("The items in textContentArr are not equal to the specified num of menu items")
    }

    const setListeners = (btn, menu, dropContent) => {
        btn.addEventListener("mouseenter", () => {
            dropContent.style.opacity = "1"
            dropContent.style.visibility = "visible"
        })

        menu.addEventListener("mouseleave", () => {
            dropContent.style.opacity = "0"
            dropContent.style.visibility = "hidden"
        })
    }

    const buildMenu = (parentEl, menuID, menuEls, numOfItems, textContentArr = 0) => {
        let parent = setParent(parentEl)
        let menu = setId(menuID)
        let dropContent = setDropdown(menuID)
        let btn = makeBtn(menuID)

        const setTarget = () => {
            if (funCalled === true) { // Only triggered true after function call
                let itemCount = setNumItems(numOfItems)

                alertMenuItems(itemCount, textContentArr.length - 1)

                setListeners(btn, menu, dropContent)

                btn.textContent = textContentArr[0]
                menu.appendChild(btn)

                for (let i = 0; i < itemCount; i++) {
                    let link = makeLink(i)
                    let menuChild = makeElement(menuEls, i)

                    link.textContent = `${textContentArr[i + 1]}`

                    menuChild.appendChild(link)
                    dropContent.appendChild(menuChild)
                }

                menu.appendChild(dropContent)
                parent.appendChild(menu)
                return funCalled = false
            }
        }
        setTarget()
    }

    return {
       buildMenu
    }

})()

export default Menu