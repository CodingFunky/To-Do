export const removeAllChildrenDOM = function (parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
    }