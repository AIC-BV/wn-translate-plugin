function updateTextareaLayout($element) {

    // get elements
    const $parent = $element.parentElement
    const $btn = $parent.querySelector('.ml-btn[data-active-locale]')
    const $dropdown = $parent.querySelector('.ml-dropdown-menu[data-locale-dropdown]')

    // set ML button position
    const elementHeight = $element.offsetHeight
    const scrollHeight = $element.scrollHeight
    const hasScrollbar = (scrollHeight - elementHeight) > 0 ? true : false

    if (hasScrollbar) {
        const scrollbarWidth = $element.offsetWidth - $element.clientWidth
        $element.style.paddingRight = `${scrollbarWidth + 23}px`
        $btn.style.right = `${scrollbarWidth -1}px`
        $dropdown.style.right = `${scrollbarWidth -2}px`
    } else {
        $element.style.paddingRight = ''
        $btn.style.right = ''
        $dropdown.style.right = ''
    }

}
