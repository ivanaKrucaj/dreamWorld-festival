function showAboutUs(){
    document.getElementById('content').innerHTML = aboutUs;
    document.getElementsByTagName('title')[0].innerHTML = 'About us - DreamWorld Festival'
}

const aboutUs = `
<div id="about-us-page">

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
                            <a onclick="showAboutUs()" class="nav-link align-middle active" href="#">About us</a>
                        </li>
                        <li class="nav-item nav-link-item bg-green">
                            <a onclick="showImpressions()" class="nav-link align-middle" href="#">Impressions</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </section>


        <div class="container container-white">
            <h4 class="about-us-title about-us-heading">This is us.</h4>
            <div class="row about-us-row">
                <div class="col-lg-6 col-md-6">
                    <p>It goes without saying that <span class="highlight">DreamWorld Festival</span> has played host to
                        some of the greatest musicians
                        of all time, however it is the weird and wonderful anomalous acts that have performed throughout
                        the years that pricked out attention. In 1984, Eavis was condemned for billing The Smiths as the
                        weekends headliners, with critics claiming they weren’t ‘mainstream’ enough. And then there was
                        that time in 2008 when Jay Z was booked, the first year in <span
                            class="highlight">DreamWorld</span> history that the festival
                        didn’t sell out, and un-coincidentally the first year a rapper had been billed to headline the
                        event.</p>
                </div>
                <div class="col-lg-6 col-md-2 about-us-text">
                    <img class="about-us-img" src="./images/festival-img-2.jpg" alt="">
                </div>
            </div>
            <div class="row about-us-row">
                <div class="col-lg-6 col-md-2 about-us-text">
                    <img class="about-us-img" src="./images/festival-img-11.jpg" alt="">
                </div>
                <div class="col-lg-6 col-md-6">
                    <p>As the status and of the festival grew, so did its capacity to donate its proceeds to various
                        charities. By 2004, charities Greenpeace, Oxfam and Water Aid were benefiting from donations in
                        excess of £1 million thanks to Eavis and co. Along with the spiritual undertones of the
                        festival, partly due to its location, there was a growing sense that it needed a greater purpose
                        than to just play host to good music; by the late ’90s the festival for Contemporary and
                        Performing Arts showcased theatre, poetry, art and more with a village aptly named Lost
                        Vagueness in 2002 providing silver service dining and ballroom dancing.</p>
                </div>
            </div>

            <!-- Ticket button -->
            <div class="au-ticket-btn">
                <button onclick="showTickets()" type="button" class="btn btn-danger btn-lg btn-bold">Tickets</button>
            </div>


            <!-- FAQ collapsible section -->
            <div>
                <h4 class="about-us-title faq-title">FAQs.</h4>
                <section class="wrp-faq">
                    <div class="container">
                        <div class="accordion" id="accordionExample">
                            <!-- Individual card section -->
                            <div class="card faq-card">
                                <div class="card-header faq-card-header" id="headingOne">
                                    <h5>
                                        <button class="faq-btn" type="button" class="collapsed" data-toggle="collapse"
                                            data-target="#collapseOne">Camping and Parking<i
                                                class="fa fa-angle-up fa-toggle"></i></button>
                                    </h5>
                                </div>
                                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
                                    data-parent="#accordionExample">
                                    <div class="card-body">
                                        <p>Arrival possible starting Thursday, 1:00 p.m.
                                            Departure until the following Monday, 1:00 p.m.
                                            Camping is included in the ticket price.
                                            No vehicles, trailers or caravans are allowed on the campgrounds. Vehicles
                                            have to be parked in the designated parking areas outside the premises.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card faq-card">
                                <div class="card-header faq-card-header" id="headingTwo">
                                    <h5>
                                        <button class="faq-btn" type="button" data-toggle="collapse"
                                            data-target="#collapseTwo">Access to the festival grounds / car parks<i
                                                class="fa fa-angle-down fa-toggle"></i></button>
                                    </h5>
                                </div>
                                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo"
                                    data-parent="#accordionExample">
                                    <div class="card-body">
                                        <p>Parking on the entire festival site is at your own risk; this is especially
                                            true of designated parking in the fields, as it might damage the underside
                                            of the vehicle. Any such liability is expressly excluded. The organizer is
                                            not liable for damage or theft.
                                            Electric generators are prohibited in all camping areas!
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="card faq-card">
                                <div class="card-header faq-card-header" id="headingThree">
                                    <h5>
                                        <button class="faq-btn" type="button" data-toggle="collapse"
                                            data-target="#collapseThree">Showers / sanitary facilities<i
                                                class="fa fa-angle-down fa-toggle"></i></button>
                                    </h5>
                                </div>
                                <div id="collapseThree" class="collapse" aria-labelledby="headingThree"
                                    data-parent="#accordionExample">
                                    <div class="card-body">
                                        <p>Our shower stations are open non-stop from around 1:00 p.m. Thursday to about
                                            12 noon Monday.
                                            Shower and use the toilets as often as you want without paying more with the
                                            Shower flat rate. All information to follow soon.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
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
                    <a href="https://www.facebook.com" target="_blank"><i
                            class="fab fa-facebook-square fa-lg"></i></i></a>
                    <a href="https://twitter.com/explore" target="_blank"><i class="fab fa-twitter fa-lg"></i></a>
                    <a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram fa-lg"></i></a>
                    <a href="https://www.youtube.com/" target="_blank"><i class="fab fa-youtube fa-lg"></i></a>
                    <a href="https://open.spotify.com/" target="_blank"><i class="fab fa-spotify fa-lg"></i></a>
                    <a href="https://soundcloud.com/discover" target="_blank"><i
                            class="fab fa-soundcloud fa-lg"></i></a>
                    <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank"><i
                            class="fas fa-envelope fa-lg"></i></a>
                </div>
                <small class="copyright">&copy; 2020 DreamWorld Team. All rights reserved.</small>
            </div>
        </div>
    </div>
`