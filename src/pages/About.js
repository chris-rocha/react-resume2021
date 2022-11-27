import React, { Component } from "react"

export default class About extends Component {
    render() {
        return(
            <div className="inset animate__animated animate__fadeIn">
                <div className="bio-header">
                <div>
                        <div>
                            <picture>
                                    <source srcSet="/images/chris.webp" type="image/webp" />
                                    <img loading="lazy" height="100" width="100" src="/images/chris.jpg" alt="Chris Rocha" title="Chris Rocha" className="pic scale-with-grid" />
                            </picture>
                            <h2 className="heading5">Contact</h2>
                            <p className="remove-bottom"><a className="contact" href="tel:813-545-1429"><span className="material-icons">phone_iphone</span>
                            813-545-1429</a></p>
                            <p><a className="contact email" href="mailto:chris@chrisrocha.com"><span className="material-icons">email</span> chris@chrisrocha.com</a></p>
                        </div>
                </div>

                <div>
                <p>I am a Tampa native and a graduate of the University of South Florida with a B.A. in Fine Art. It may sound strange but I'm a fine art graduate turned computer programmer. This combination makes me a valuable contributor on any project where creative and technology meet. I have extensive experience in print production, graphic design, web design and development. My background includes both corporate advertising departments and agency environments providing me a unique perspective on client needs and expectations.</p>
                </div>
                </div>
                <div className="flex-row smaller add-top">
                        <div className="cell">
                            <h2>Education</h2>
                            <p>B.A Fine Art<br />
                            University of South Florida</p>
                        </div>

                        <div className="cell">
                            <h2>Skills</h2>
                            <ul>
                            <li>HTML, CSS, XML and JSON</li>
                            <li>JavaScript, PHP, Apache and Database Programming</li>
                            <li>Content Management and JavaScript Frameworks</li>
                            <li>Art Direction and Design</li>
                            </ul>
                        </div>

                        <div className="cell">
                            <h2>Software</h2>
                            <ul>
                            <li>Adobe Creative Cloud</li>
                            <li>Microsoft Office</li>
                            <li>VS Code, Sublime, Vim, etc.</li>
                            <li>Macintosh, Windows and Linux operating systems</li>
                            </ul>
                        </div>
                </div>
            </div>
        )
    }
}
