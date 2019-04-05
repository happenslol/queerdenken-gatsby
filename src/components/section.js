import React from "react"

export default props => (
    <section className="section container">
        <div className="columns is-centered">
            <div className="column is-10 content is-size-5">
                {props.children}
            </div>
        </div>
    </section>
)
