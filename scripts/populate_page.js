function populateHomepage()
{
    let html = `

                <!--Header for dashboard-->
                <header>
                    <h1>Timeless Frame</h1>
                </header>
                <!--Option buttons-->
                <div class="dashboard-container">
                    <div class="button-container">
                        <div class="dashboard-button">
                            <a onclick="sendCheer()">
                                <p class="emoji-Icon">🎉</p>
                                <span>Cheer For Karla</span>
                            </a>
                        </div>
                        <div class="dashboard-button">
                            <a onclick="populateMessage()">
                                <p class="emoji-Icon">📩</p>
                                <span>Send Message to Karla</span>
                            </a>
                        </div>
                    </div>
                </div>
                `;

    document.getElementById("main-content").innerHTML = html;
}

function populateLogin()
{
    let html = `
                <!--Login page-->
                <div class="login-body">
                <div class="login-container ">
                    <img src="./images/timeless_frame_logo.png" alt="Logo" class="logo">
                    <div class="login-form">
                        <!--Form input fields and labels-->
                        <label for="username">Username: </label><br>
                        <input type="text" placeholder="Username" id="username" required><br><br>
                        <label for="userPassword">Password: </label><br>
                        <input type="password" placeholder="Password" id="userPassword"required>
                        <button type="submit" onclick="logUserIn()">Login</button>
                    </div>
                </div>
                </div>
                `;

    document.getElementById("main-content").innerHTML = html;
}

function populateMessage()
{
    let html = `
                <header>
                    <h1>Send Message To Karla</h1>
                </header>
                <a href="./index.html"><i class="fa fa-arrow-circle-left" style="font-size:30px;color: black; margin-left: 40px; margin-top: 50px;"></i></a>

                <div class="message-container">
                    <div class="message-form">
                        <center><p class="form-header">Motivate Karla!</p></center>
                        <label for="name">Name: </label><br>
                        <input type="text" placeholder="Your Name" id="name" required>
                        <label for="message">Message: </label><br>
                        <textarea placeholder="Your Message" rows="10" id="message" required></textarea>
                        <button type="submit" onclick="sendMessage()">Send Message</button>
                    </div>
                </div>
                `;

    document.getElementById("main-content").innerHTML = html;

}

function populateSuccess()
{
    let html = `
                <div class="success-header">
                    <h1>Sent!</h1>
                </div>

                <div class="success-container">
                    <div class="success-message">
                        <h2>Success!</h2>
                        <p>Your action has been sent!</p>
                        <div class="back-to-home">
                            <a onclick="populateHomepage()">Back to Home</a>
                        </div>
                    </div>
                </div>
                `;

    document.getElementById("main-content").innerHTML = html;
}

function checkUserLogin()
{
    let isUserLoggedin = localStorage.getItem("TF_LOGGEDIN");

    if(! isUserLoggedin)
    {
        populateLogin();
    }else
    {
        populateHomepage();
    }


}