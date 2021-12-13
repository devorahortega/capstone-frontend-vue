<template>
  <div id="app">
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />

    <title>Promptly</title>
    <meta content="" name="description" />
    <meta content="" name="keywords" />
    <header id="header" class="fixed-top d-flex align-items-cente">
      <div class="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
        <h1 class="logo me-auto me-lg-0"><a href="/">Promptly</a></h1>
        <nav id="navbar" class="navbar order-last order-lg-0">
          <ul>
            <li><a class="nav-link scrollto active" href="/">Home</a></li>
            <li><a class="nav-link scrollto" href="/about">About</a></li>
            <li><a class="nav-link scrollto" href="/prompts">Prompts</a></li>
            <li><a class="nav-link scrollto" href="/specials">Create</a></li>
            <li class="dropdown">
              <a href="#">
                <span>Account</span>
                <i class="bi bi-chevron-down"></i>
              </a>
              <ul>
                <li><a href="/signup">Signup</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/logout">Logout</a></li>
              </ul>
            </li>
            <li><a class="nav-link scrollto" href="/contact">Contact</a></li>
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>
        <!-- .navbar -->
        <a href="/prompts" class="book-a-table-btn scrollto d-none d-lg-flex">Prompts</a>
      </div>
    </header>
    <router-view />
    <footer id="footer" class="midnight-blue"></footer>
    <!-- ======= Footer ======= -->
    <footer id="footer">
      <div class="footer-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="footer-info">
                <h3>Promptly</h3>
                <p>
                  A108 Adam Street
                  <br />
                  NY 535022, USA
                  <br />
                  <br />
                  <strong>Phone:</strong>
                  +1 5589 55488 55
                  <br />
                  <strong>Email:</strong>
                  info@example.com
                  <br />
                </p>
              </div>
            </div>

            <div class="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#">Home</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#">About us</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#">Services</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#">Terms of service</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#">Privacy policy</a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#">Web Design</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#">Web Development</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#">Product Management</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#">Marketing</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#">Graphic Design</a>
                </li>
              </ul>
            </div>

            <div class="col-lg-4 col-md-6 footer-newsletter">
              <h4>Our Newsletter</h4>
              <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
              <form action="" method="post">
                <input type="email" name="email" />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="copyright">
          &copy; Copyright
          <strong><span>Promptly</span></strong>
          . All Rights Reserved
        </div>
        <div class="credits">
          <!-- All the links in the footer should remain intact. -->
          <!-- You can delete the links only if you purchased the pro version. -->
          <!-- Licensing information: https://bootstrapmade.com/license/ -->
          <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/restaurantly-restaurant-template/ -->
          Designed by
          <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    </footer>
  </div>
</template>
