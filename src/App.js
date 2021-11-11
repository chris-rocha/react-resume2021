import './scss/style.scss';

function App() {
  return (
    <div className="app-wrap" id="app">
        <header id="header" className="landing-max-width">
            <div className="container">
                <h1>Chris Rocha</h1>
                <ul className="menu">
                <li></li>
                </ul>
            </div>
        </header>

        <main id="content" role="main" className="landing-max-width">
            <div className="container">
            </div>
        </main>

        <footer id="footer" className="landing-max-width">
            <div className="container">
                <hr />
                <ul className="footer-menu clearfix">
                <li></li>
                </ul>
                <p className="legal">© currentYear chrisrocha.com</p>
            </div>
        </footer>
    </div>
    );
}

export default App;
