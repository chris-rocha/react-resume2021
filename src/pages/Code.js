import React, { Component } from "react"
import axios from "axios";
export default class Code extends Component {

    state = {
        code: [],
        loading: true,
        order: ['explore-branson', 'discover-puerto-rico', 'visit-savannah', 'bermuda', 'ecotours']
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
            return (<div className="inset loading"><span className="material-icons">autorenew</span></div>)
        } else {
            return (
                <div className="inset">
                    <ul className="two">
                        { this.state.code
                        .sort((a, b) => {
                            if (this.state.order.indexOf(a.slug) > this.state.order.indexOf(b.slug)) {
                                return 1;
                            } else {
                                return -1;
                            }
                        })
                        .map((code, index) =>
                            <li className="animate__animated animate__faster animate__zoomIn" style={{"animationDelay":`${index*100}ms`}} key={ code.slug }>
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
