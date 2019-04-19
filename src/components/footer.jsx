import React from "react"
import styled from "styled-components"

const FooterBase = ({ className }) => (
    <footer className={`footer ${className}`}>
        <div className="content has-text-centered">
            <p>
                &copy; 2019 Julia Wirth, Queerdenken<br />
                <a href="mailto:mail@juliawirth.me">mail@juliawirth.me</a>
            </p>

            <p>
                site design by <a href="https://github.com/happenslol">h.wiegand</a><br />
                <a href="mailto:web@hwgnd.de">web@hwgnd.de</a>
            </p>
        </div>
    </footer>
)

export default styled(FooterBase)`
    margin-top: auto;
    width: 100vw;
`
