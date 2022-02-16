import './App.css';

function Contact(){
    return (
        <div className="App">
            <h2>Our Team</h2>
            <div class="row">
                <div class="column">
                    <div class="card">
                        <img class="prof-pic" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="Jane" />
                        <div class="container">
                            <h2>Jane Doe</h2>
                            <p class="title">CEO & Founder</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>jane@example.com</p>
                            <p><button class="button">Contact</button></p>
                        </div>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <img class="prof-pic" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="Mike" />
                        <div class="container">
                            <h2>Mike Ross</h2>
                            <p class="title">Head Botanist</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>mike@example.com</p>
                            <p><button class="button">Contact</button></p>
                        </div>
                    </div>
                </div>
                
                <div class="column">
                    <div class="card">
                        <img class="prof-pic" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="John" />
                        <div class="container">
                            <h2>John Doe</h2>
                            <p class="title">Head Barista</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>john@example.com</p>
                            <p><button class="button">Contact</button></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;