function showImpressions(){
    document.getElementById('content').innerHTML = impressions;
    document.getElementsByTagName('title')[0].innerHTML = 'Impressions - DreamWorld';
}

const impressions = `
<div id="impressions-page">

        <!-- Header section -->
        <section>
            <div class="header-bg container-fluid">
                <!-- Festival logo -->
                <div class="row">
                    <div class="col-lg-6 col-md-4">
                        <img class="header-logo" src="./images/newest-logo.png" alt="festival-logo">
                    </div>
                    <!-- Ticket Button -->
                    <div class="col-lg-5 col-md-4">
                        <div class="header-cta">
                            <h3 class="lineup-text">Get your tickets now</h3>
                            <button onclick="showTickets()" class="btn btn-danger btn-lg btn-bold" type="button">Tickets</button>
                        </div>
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
                            <a onclick="showTickets()" class="nav-link align-middle" href="#">Tickets</a>
                        </li>
                        <li class="nav-item nav-link-item bg-red">
                            <a onclick="showAboutUs()" class="nav-link align-middle" href="#">About us</a>
                        </li>
                        <li class="nav-item nav-link-item bg-green">
                            <a onclick="showImpressions()" class="nav-link align-middle active" href="#">Impressions</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </section>

        <div class="container container-white">
            <h2 class="about-us-title impressions-title">Leave a good impression.</h2>
            <div class="photos-text">
                <p>Welcome to our Impressions page, where you can browse many hundreds of <span
                        class="highlight">DreamWorld Festival</span> photos <br> uploaded by people who've been to the
                    Festival throughout its history.</p>
            </div>

            <!-- Carousels -->
            <div>
                <h5 class="impressions-year">2019</h5>
                <div id="carousel-image-one" class="carousel slide carousel-fade" data-ride="false">
                    <div class="carousel-inner carousel-resize">
                        <div class="carousel-item active">
                            <img src="./images/festival-img-4.jpg" class="d-block w-100" alt="crowd-at-night">
                        </div>
                        <div class="carousel-item carousel-content">
                            <img src="./images/festival-img-22.jpg" class="d-block w-100" alt="band-performing">
                        </div>
                        <div class="carousel-item">
                            <img src="./images/festival-img-14.jpg" class="d-block w-100" alt="artis-performing-on-mainstage">
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carousel-image-one" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carousel-image-one" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>

                <h5 class="impressions-year">2018</h5>
                <div id="carousel-image-two" class="carousel slide carousel-fade" data-ride="false">
                    <div class="carousel-inner carousel-resize">
                        <div class="carousel-item active">
                            <img src="./images/new-header-bg.jpg" class="d-block w-100" alt="festival-crowd-dancing">
                        </div>
                        <div class="carousel-item">
                            <img src="./images/new-bg.jpg" class="d-block w-100" alt="festival-stage-at-night">
                        </div>
                        <div class="carousel-item">
                            <img src="./images/festival-img-26.jpg" class="d-block w-100" alt="festival-crowd-cheering">
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carousel-image-two" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carousel-image-two" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>

                <h5 class="impressions-year">2017</h5>
                <div id="carousel-image-three" class="carousel slide carousel-fade" data-ride="false">
                    <div class="carousel-inner carousel-resize">
                        <div class="carousel-item active">
                            <img src="./images/festival-img-13.jpg" class="d-block w-100" alt="artist-performing">
                        </div>
                        <div class="carousel-item ">
                            <img src="./images/festival-img-7.jpg" class="d-block w-100" alt="guest-dancing">
                        </div>
                        <div class="carousel-item">
                            <img src="./images/festival-img-6.jpg" class="d-block w-100" alt="crowd-dancing">
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carousel-image-three" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carousel-image-three" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>

            <!-- Call to Action -->
            <div class="text-center">
                <h4 class="lineup-text cta-text">Join our family photos.</h4>
            </div>

            <!-- Buttons -->
            <div class="text-center">
                <button onclick="showTickets()" type="button" class="btn btn-danger btn-lg impressions-btn btn-bold">Tickets</button>
                <button onclick="showHome()" type="button" class="btn btn-danger btn-lg impressions-btn btn-bold">Home</button>
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