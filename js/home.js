window.addEventListener('load', () => {
    document.getElementById('content').innerHTML = home;
    
    const homePage = document.getElementById('home-link')
    homePage.addEventListener('click', () => {
        console.log('clicked')
        document.getElementById('content').innerHTML = home;
    })
  });

const home = `
<div id="home-page">
        <!-- Header section -->
        <section>
            <div class="header-bg container-fluid">
                <!-- Festival logo -->
                <div class="row">
                    <div class="col-lg-6 col-md-4">
                        <img class="header-logo" src="images/newest-logo.png" alt="festival-logo">
                    </div>
                    <!-- Ticket Button -->
                    <div class="col-lg-5 col-md-4">
                        <div class="header-cta">
                            <h3 class="lineup-text">Get your tickets now</h3>
                            <button class="btn btn-danger btn-lg btn-bold" type="button">Tickets</button>
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
                            <a id='home-link' class="nav-link align-middle active" href="#home-page">Home</a>
                        </li>
                        <li class="nav-item nav-link-item bg-green">
                            <a id='lineup-link' class="nav-link align-middle" href="#lineup-page">Lineup</a>
                        </li>
                        <li class="nav-item nav-link-item bg-blue">
                            <a class="nav-link align-middle" href="#tickets-page">Tickets</a>
                        </li>
                        <li class="nav-item nav-link-item bg-red">
                            <a class="nav-link align-middle" href="#about-us-page">About us</a>
                        </li>
                        <li class="nav-item nav-link-item bg-green">
                            <a class="nav-link align-middle" href="#impressions-page">Impressions</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </section>

        <div class="container container-white">
            <!-- Main Section -->
            <section>
                <div class="main-content row">

                    <!-- Teaser Cards -->
                    <div class="col-lg-8 main-content-padding">
                        <div class="mb-3 card-bg">
                            <div class="row no-gutters">
                                <div class="col-md-4">
                                    <img src="images/festival-img-20.jpg" class="card-img" alt="crowd-img">
                                </div>
                                <div class="col-md-8 card-body-align">
                                    <div class="card-body card-body-align">
                                        <a class="main-section-link" href="#impressions-page">
                                           <h3 class="card-title card-title-link">DreamWorld 2019 Highlights</h3>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="mb-3 card-bg">
                            <div class="row no-gutters">
                                <div class="col-md-4">
                                    <img src="images/festival-img-22.jpg" class="card-img" alt="performer-img">
                                </div>
                                <div class="col-md-8 card-body-align">
                                    <div class="card-body card-body-align">
                                        <a class="main-section-link" href="https://open.spotify.com/" target="_blank">
                                            <h3 class="card-title card-title-link">Main Stages Playlists</h3>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="mb-3 card-bg">
                            <div class="row no-gutters">
                                <div class="col-md-4">
                                    <img src="images/festival-img-14.jpg" class="card-img" alt="festival-site-img">
                                </div>
                                <div class="col-md-8 card-body-align">
                                    <div class="card-body card-body-align">
                                        <a class="main-section-link" href="#tickets-page">
                                            <h3 class="card-title card-title-link">Get your tickets</h3>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <!-- Lineup -->
                    <div class="col-lg-4 artist-card-bg">
                        <h3 class="artist-card">The Cure</h3>
                        <h2 class="artist-card">The Strokes</h2>
                        <h2 class="artist-card">Deftones</h2>
                        <h3 class="artist-card">The XX</h3>
                        <h2 class="artist-card">Tame Impala</h2>
                        <h3 class="artist-card">The Killers</h3>
                        <h2 class="artist-card">Caribou</h2>
                        <h4 class="artist-card">Boards of Canada</h4>
                        <h4 class="artist-card">Mount Kimbie</h4>
                        <h4 class="artist-card">Death in Vegas</h4>
                        <h4 class="artist-card">Blood Orange</h4>
                        <h4 class="artist-card">Bonobo</h4> <br>
                        <h5 class="artist-card">&#43; and many more</h5>
                    </div>
                </div>
            </section>

            <!-- Testimonials -->
            <section class="testimonials">
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <h2>&quot;DreamWorld Festival had a tremendous impact on my artistic life.&quot;</h2>
                            <em>Iggy Pop</em>
                        </div>
                        <div class="carousel-item">
                            <h2>&quot;Europe's finest.&quot;</h2>
                            <em>NME Magazine</em>
                        </div>
                        <div class="carousel-item">
                            <h2>&quot;DreamWorld Festival has defined a generation.&quot;</h2>
                            <em>Rolling Stone Magazine</em>
                        </div>
                        <div class="carousel-item">
                            <h2>&quot;I was at DreamWorld Festival. In the mud.&quot;</h2>
                            <em>Beyonce</em>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Sponsors section -->
            <section>
                <div class="sponsors-section text-center">
                    <h3 class="">Our sponsors.</h3>
                    <div class="row sponsors-row">
                        <div class="col-lg-3 text-center">
                            <img src="/images/sponsors/coca-cola-logo.png" alt="coca-cola-logo">
                        </div>
                        <div class="col-lg-3 text-center">
                            <img src="/images/sponsors/spotify-logo.png" alt="spotify-logo">
                        </div>
                        <div class="col-lg-3 text-center">
                            <img src="/images/sponsors/universal-logo.png" alt="universal-logo">
                        </div>
                        <div class="col-lg-3 text-center">
                            <img src="/images/sponsors/rolling-stone-logo.png" alt="rolling-stone-logo">
                        </div>
                    </div>

                    <div class="row sponsors-row">
                        <div class="col-lg-3 text-center">
                            <img src="/images/sponsors/nme-logo.png" alt="nme-logo">
                        </div>
                        <div class="col-lg-3 text-center">
                            <img src="/images/sponsors/apple.png" alt="apple">
                        </div>
                        <div class="col-lg-3 text-center">
                            <img src="/images/sponsors/soundcloud-logo.png" alt="soundcloud-logo">
                        </div>
                    </div>
                </div>
            </section>

            <!-- Call to Action -->
            <section>
                <div class="cta-section">
                    <h3 class="text-center">Your adventure is one click away.</h3>
                    <div class="text-center">
                        <button type="button" class="btn btn-danger btn-lg cta-btn">Tickets</button>
                    </div>
                </div>
            </section>
        </div>

        <!-- Newsletter section -->
        <section>
            <div id="newsletter-section" class="container-fluid">
                <div class="row">
                    <div class="col-lg-6 newsletter-text">
                        <h3>DreamWorld Newsletter</h3>
                        <p>You want to be the first to get the latest information about DreamWorld Festival and want to
                            receive special offers? Prepare yourself to discover the unique family of DreamWorld!</p>
                    </div>

                    <div class="col-lg-6 text-center">
                        <form action="">
                            <input class="name-input" type="text" placeholder="First Name">
                            <input class="name-input" type="text" placeholder="Last Name"><br>
                            <input class="email-input" type="text" placeholder="Email"><br>
                            <div>
                                <button type="button"
                                    class="btn btn-outline-danger btn-lg btn-subscribe">Subscribe</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    </div>

    <!-- Footer -->
    <!----------not in page---------------------->
    <div id="footer" class="container-fluid">
        <div class="footer-content">
            <div id="social-icons">
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
    </div>`