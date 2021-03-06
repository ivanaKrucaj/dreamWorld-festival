function showTickets(){
    document.getElementById('content').innerHTML = tickets;
    document.getElementsByTagName('title')[0].innerHTML = 'Tickets - DreamWorld Festival';
}

const tickets = `
<div id='ticket-page'>

        <!-- Header section -->
        <section>
            <div class="header-bg container-fluid">
                <!-- Festival logo -->
                <div class="row">
                    <div class="col-lg-6 col-md-4">
                        <img class="header-logo" src="./images/newest-logo.png" alt="festival-logo">
                    </div>
                </div>
            </div>
        </section>

        <!-- Navigation Bar -->
        <section>
            <nav class="navbar sticky-top navbar-expand-lg navbar-light">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse navbar-center" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item nav-link-item bg-red">
                            <a onclick="showHome()" class="nav-link align-middle" href="#">Home</a>
                        </li>
                        <li class="nav-item nav-link-item bg-green">
                            <a onclick="showLineup()" class="nav-link align-middle" href="#">Lineup</a>
                        </li>
                        <li class="nav-item nav-link-item bg-blue">
                            <a onclick="showTickets()" class="nav-link align-middle active" href="#">Tickets</a>
                        </li>
                        <li class="nav-item nav-link-item bg-red">
                            <a onclick="showAboutUs()" class="nav-link align-middle" href="#">About us</a>
                        </li>
                        <li class="nav-item nav-link-item bg-green">
                            <a onclick="showImpressions()" class="nav-link align-middle" href="#">Impressions</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </section>

        <!-- Ticket cards section -->
        <div id="ticket-cards" class="container container-white">
            <h4 class="about-us-title">Get your tickets.</h4>
            <div class="card-deck">
                <div class="col-lg-4 col-md-6">
                    <div class="card card-ticket">
                        <img src="./images/festival-img-12.jpg" class="card-img-top" alt="dancing-crowd">
                        <div class="card-body">
                            <h5 class="card-title lineup-text">DreamDay Pass</h5>
                            <p class="card-text">Valid for one day</p>
                            <p class="card-text">General access</p>
                            <p class="card-text">Access only to Day-DreamZone</p>
                            <button type="button" class="btn btn-block purchase-btn">Buy</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="card card-ticket">
                        <img src="./images/festival-img-20.jpg" class="card-img-top" alt="festival-site">
                        <div class="card-body">
                            <h5 class="card-title lineup-text">DreamWeekend Pass</h5>
                            <p class="card-text">Valid for all days</p>
                            <p class="card-text">Access to all DreamZones</p>
                            <p class="card-text">Parking included</p>
                            <p class="card-text"></p>
                            <button type="button" class="btn btn-block purchase-btn">Buy</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card card-ticket">
                        <img src="./images/festival-img-25.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title lineup-text">DreamVille Package</h5>
                            <p class="card-text">Valid for all days</p>
                            <p class="card-text">Access to all DreamZones</p>
                            <p class="card-text">Camping and parking included</p>
                            <button type="button" class="btn btn-block purchase-btn">Buy</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center text-position">
                <small>You will receive your ticket in PDF soon after purchase and transaction validation. Fields with
                    names
                    of of the ticket holder(s) are required. Please print the ticket and bring the hard copy to the
                    entrance
                    to ensure efficient and unobstructed entrance. If you did not receive your ticket, please check your
                    spam/junk folder. If you can not find your ticket, please contact us immediately.</small> <br>
                <small>Please note that festival rules and important notices apply to all ticket holders.</small>
            </div>

            <!-- Home button -->
            <div class="text-center btn-position">
                <button onclick="showHome()" type="button" class="btn btn-danger btn-lg btn-bold">Home</button>
            </div>

        </div>
    </div>

    <!-- Footer -->
    <div id="footer" class="container-fluid">
        <div class="footer-content">
            <div class="social-icons">
                <a href="https://www.facebook.com" target="_blank"><i class="fab fa-facebook-square fa-lg"></i></i></a>
                <a href="https://twitter.com/explore" target="_blank"><i class="fab fa-twitter fa-lg"></i></a>
                <a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram fa-lg"></i></a>
                <a href="https://www.youtube.com/" target="_blank"><i class="fab fa-youtube fa-lg"></i></a>
                <a href="https://open.spotify.com/" target="_blank"><i class="fab fa-spotify fa-lg"></i></a>
                <a href="https://soundcloud.com/discover" target="_blank"><i class="fab fa-soundcloud fa-lg"></i></a>
                <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank"><i
                        class="fas fa-envelope fa-lg"></i></a>
            </div>
            <small class="copyright">&copy; 2020 DreamWorld Team. All rights reserved.</small>
        </div>
    </div>
`