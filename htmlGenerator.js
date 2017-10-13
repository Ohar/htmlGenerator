function htmlGenerator (elementArr) {
    const [tagName, ...childs] = elementArr

    if (childs.length) {
        const childElements = childs.map(
            child => typeof child === 'string'
                ? child
                    .replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;')
                : htmlGenerator(child)
        )

        return `<${tagName}>${childElements.join('')}</${tagName}>`
    } else {
        return `<${tagName}/>`
    }
}

module.exports = htmlGenerator
