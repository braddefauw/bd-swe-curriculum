import './App.css';

function Contact(){
    return (
        <div className="App">
            <h2>Our Team</h2>
            <div className="row">
                <div className="column">
                    <div className="card">
                        <img className="prof-pic" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="Jane" />
                        <div className="container">
                            <h2>Jane Doe</h2>
                            <p className="title">CEO & Founder</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>jane@example.com</p>
                            <p><button className="button">Contact</button></p>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <img className="prof-pic" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="Mike" />
                        <div className="container">
                            <h2>Mike Ross</h2>
                            <p className="title">Head Botanist</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>mike@example.com</p>
                            <p><button className="button">Contact</button></p>
                        </div>
                    </div>
                </div>
                
                <div className="column">
                    <div className="card">
                        <img className="prof-pic" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="John" />
                        <div className="container">
                            <h2>John Doe</h2>
                            <p className="title">Head Barista</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>john@example.com</p>
                            <p><button className="button">Contact</button></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;