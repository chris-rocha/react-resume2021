import React, { Component } from "react"

export default class Design extends Component {
    render() {
        return(
            <div className="inset">
                {/* <div v-if="loading" className="loading"><span className="material-icons">autorenew</span></div> */}
                <ul tag="ul" className="two gd" name="bounce">
                    <li>
                        <img loading="lazy" width="174" height="140" className="scale-with-grid" src="" alt="" />
                        <div className="caption">
                        <h4>Type</h4>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}
