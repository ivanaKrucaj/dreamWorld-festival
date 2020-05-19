window.addEventListener('load', () => {
    // dohvati lineup link iz navigation bar i spremi u varijablu
    // na tu varijablu dodaj eventListener za click
    // funkcija: svaki put kada se klikne, napravi:
        // - dohvati element sa id content i spremi u varijablu
        // - stavi innerHTML i ubaci sadrzaj iz main section
        // document.getElementById('content').innerHTML = lineup;
    

        const lineupPage = document.getElementById('lineup-link');
        lineupPage.addEventListener('click', () => {
            document.getElementById('content').innerHTML = lineup;
        })
  });



  const lineup = `<div id="lineup-page">

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
      <nav class="navbar navbar-expand-lg navbar-light">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse navbar-center" id="navbarNav">
              <ul class="navbar-nav">
                  <li class="nav-item nav-link-item bg-red">
                      <a id='home-link' class="nav-link align-middle" href="#home-page">Home</a>
                  </li>
                  <li class="nav-item nav-link-item bg-green">
                      <a id='lineup-link' class="nav-link align-middle active" href="#lineup-page">Lineup</a>
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
      <h4 class="about-us-title">Our artists.</h4>
      <!-- Lineup row one -->
      <div class="row row-lineup">
          <div class="col-lg-4 col-md-4">
              <a class="img--box" href="https://open.spotify.com/artist/7bu3H8JO7d0UbMoVzbo70s" target="_blank">
                  <img class="lineup-img img-fluid" src="/images/artists/the-cure.jpeg" alt="">
              </a>
          </div>
          <div class="col-lg-4 col-md-4">
              <a href="https://open.spotify.com/artist/0epOFNiUfyON9EYx7Tpr6V" target="_blank"><img class="lineup-img img-fluid"
                      src="/images/artists/the-strokes.jpeg" alt=""></a>
          </div>

          <div class="col-lg-4 col-md-4">
              <a href="https://open.spotify.com/artist/6Ghvu1VvMGScGpOUJBAHNH" target="_blank"><img class="lineup-img img-fluid"
                      src="/images/artists/deftones.jpeg" alt=""></a>
          </div>
      </div>
      <!-- Lineup row two -->
      <div class="row row-lineup">
          <div class="col-lg-4 col-md-4">
              <a href="https://open.spotify.com/artist/3iOvXCl6edW5Um0fXEBRXy" target="_blank"><img
                      class="lineup-img" src="/images/artists/the-xx.jpeg" alt=""></a>
          </div>

          <div class="col-lg-4 col-md-4">
              <a href="https://open.spotify.com/artist/0C0XlULifJtAgn6ZNCW2eu" target="_blank"><img class="lineup-img"
                      src="/images/artists/the-killers.jpeg" alt=""></a>
          </div>

          <div class="col-lg-4 col-md-4">
              <a href="https://open.spotify.com/artist/5INjqkS1o8h1imAzPqGZBb" target="_blank"><img class="lineup-img"
                      src="/images/artists/tame-impala.jpeg" alt=""></a>
          </div>
      </div>
      <!-- Lineup row three -->
      <div class="row row-lineup">
          <div class="col-lg-4 col-md-4">
              <a href="https://open.spotify.com/artist/0cmWgDlu9CwTgxPhf403hb" target="_blank"><img
                      class="lineup-img" src="/images/artists/bonobo.jpeg" alt=""></a>
          </div>

          <div class="col-lg-4 col-md-4">
              <a href="https://open.spotify.com/artist/4aEnNH9PuU1HF3TsZTru54" target="_blank"><img class="lineup-img"
                      src="/images/artists/caribou.jpeg" alt=""></a>
          </div>

          <div class="col-lg-4 col-md-4">
              <a href="https://open.spotify.com/artist/2VAvhf61GgLYmC6C8anyX1" target="_blank"><img class="lineup-img"
                      src="/images/artists/boards-of-canada.jpeg" alt=""></a>
          </div>
      </div>
      <!-- Lineup row four -->
      <div class="row row-lineup">
          <div class="col-lg-4 col-md-4">
              <a href="https://open.spotify.com/artist/3iOvXCl6edW5Um0fXEBRXy" target="_blank"><img
                      class="lineup-img" src="/images/artists/death-in-vegas.jpeg" alt=""></a>
          </div>

          <div class="col-lg-4 col-md-4">
              <a href="https://open.spotify.com/artist/3NUtpWpGDoffm3RCGhSHtl" target="_blank"><img class="lineup-img"
                      src="/images/artists/mount-kimbie.jpg" alt=""></a>
          </div>

          <div class="col-lg-4 col-md-4">
              <a href="https://open.spotify.com/artist/6LEeAFiJF8OuPx747e1wxR" target="_blank"><img class="lineup-img"
                      src="/images/artists/blood-orange.jpg" alt=""></a>
          </div>
      </div>

      <div class="text-center">
          <h4 class="lineup-text">&#43; many more TBA.</h4>
      </div>

      <!-- Buttons -->
      <div class="text-center">
          <button type="button" class="btn btn-danger btn-lg lineup-btn btn-bold">Tickets</button>
          <button type="button" class="btn btn-danger btn-lg lineup-btn btn-bold">Home</button>
      </div>
  </div>

</div>
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