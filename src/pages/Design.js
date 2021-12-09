import React, { Component } from "react"
import axios from "axios";

export default class Design extends Component {
    state = {
        design: [],
        loading: true,
    }
    componentDidMount() {
        axios.get(`https://7plqc6kmkd.execute-api.us-east-2.amazonaws.com/prod/design-examples`)
          .then(res => {
            const design = res.data.body;
            this.setState({ design });
            this.setState({loading: false});
          })
    }
    render() {
        if (this.state.loading === true) {
            return (<div className="inset loading"><span className="material-icons">autorenew</span></div>)
        } else {
            return(
                <div className="inset">
                    <ul tag="ul" className="two gd" >
                        {this.state.design
                        .map((value) => ({value, sort: Math.random()}))
                        .sort((a,b) => a.sort - b.sort)
                        .map(({value}) => value)
                        .map((design, index) =>
                            <li key={design.id} className="animate__animated animate__faster animate__zoomIn" style={{"animationDelay":`${design.id*20}ms`}}>
                                <img loading="lazy" width="174" height="140" className="scale-with-grid" src={ design.file } alt={ design.type } />
                                <div className="caption">
                                <h2 className="heading4">{ design.type }</h2>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
            )
        }
    }
}
