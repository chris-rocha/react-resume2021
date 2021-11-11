import React, { Component } from "react"
import axios from "axios";

export default class Code extends Component {
    state = {
        code: [],
        loading: true
    }
    componentDidMount() {
        axios.get(`https://z2t4tas4ok.execute-api.us-east-2.amazonaws.com/prod/code-examples`)
          .then(res => {
            const code = res.data.body;
            this.setState({ code });
            this.setState({loading: false});
          })
    }
    render() {
        if (this.state.loading === true) {
            return (<div className="loading"><span className="material-icons">autorenew</span></div>)
        } else {
            return (
                <div className="inset">
                    <ul className="two">
                        { this.state.code.map(code =>
                            <li key={ code.slug }>
                                <a href={ code.link } target="_blank" rel="noreferrer">
                                    <img loading="lazy" src={ code.thumb } width="300" height="240" className="scale-with-grid" alt="" />
                                    <div className="caption">
                                        <h4>{ code.title }</h4>
                                        <div className="details">{ code.details }</div>
                                    </div>
                                </a>
                            </li>
                        )}
                    </ul>
                </div>
            )
        }
    }
}
