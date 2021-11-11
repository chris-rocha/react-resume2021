import React, { Component } from "react"

export default class Code extends Component {
    render() {
        return(
            <div className="inset">
            {/* <div v-if="loading" className="loading"><span className="material-icons">autorenew</span></div> */}
                <ul>
                    <li>
                        <a href="https://chrisrocha.com" target="_blank" rel="noreferrer">
                            <img loading="lazy" src="" width="300" height="240" className="scale-with-grid" alt="" />
                            <div className="caption">
                                <h4>Site</h4>
                                <div className="details">Details</div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}
