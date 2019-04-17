import React from "react"

export default class ScrollDetector extends React.Component {
    constructor(props) {
        super(props)
        this.state = { scrolled: window.scrollY }
    }

    onScroll = () => {
        if (window.scrollY > 0 && !this.state.scrolled)
            this.setState({ scrolled: true })
        else if (window.scrollY === 0 && this.state.scrolled)
            this.setState({ scrolled: false })
    }

    componentDidMount() { window.addEventListener("scroll", this.onScroll) }
    componentWillUnmount() { window.removeEventListener("scroll", this.onScroll) }
    render() { return this.props.render(this.state.scrolled) }
}
