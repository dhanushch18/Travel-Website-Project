<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Travel Website</title>

    <link rel="stylesheet" href="style.css">

    <!-- Bootstrap Link -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <!-- Bootstrap Link -->


    <!-- Font Awesome Cdn -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">
    <!-- Font Awesome Cdn -->


    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet">
    <!-- Google Fonts -->
</head>
<style>
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    scroll-behavior: smooth;
    font-family: 'Lato', sans-serif;
}

/* Navbar Start */
#navbar{
    background: #857e7e;
}
#logo{
    font-size: 36px;
    font-weight: 550;
    color: black;
    text-shadow: 0px 1px 1px black;
    margin-bottom: 5px;
}
#logo span{
    color: #ffa500;
}
.navbar-toggler span{
    color: #ffa500;
}
.navbar-nav{
    margin-left: 20px;
}
.nav-item .nav-link{
    font-size: 16px;
    font-weight: 550;
    color: black;
    letter-spacing: 1px;
    border-radius: 3px;
    transition: 0.5s ease;
}
.nav-item .nav-link:hover{
    background: #ffa500;
    color: white;
}
#navbar form button{
    background: orange;
    color: white;
    border: none;
}
/* Navbar End */

/* Home Section Start */
.home{
    width: 100%;
    height: 90vh;
    background-image: linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.2)), url("t17.jpg");
    background-repeat: no-repeat;
    background-size: cover;
}
.home .content{
    text-align: center;
    padding-top: 200px;
}
.home .content h5{
    color: white;
    font-size: 38px;
    font-weight: 550;
    text-shadow: 0px 1px 1px black;
}
.home .content h1{
    color: white;
    font-size: 70px;
    font-weight: 550;
    text-shadow: 0px 1px 1px black;
    margin-top: 5px;
}
.changecontent::after{
    content: ' ';
    color: #ffa500;
    text-shadow: 0px 1px 1px black;
    animation: changetext 10s infinite linear;
}
@keyframes changetext{
    0%{content: "France";}
    10%{content: "Spain";}
    20%{content: "United States";}
    30%{content: "China";}
    40%{content: "India";}
    50%{content: "Pakistan";}
    60%{content: "Italy";}
    70%{content: "Turkey";}
    80%{content: "Mexico";}
    90%{content: "Germany";}
    100%{content: "United kingdom";}
} 
.home .content p{
    color: white;
    font-size: 15px;
    font-weight: 600;
    text-shadow: 0px 1px 1px black;
    margin-bottom: 30px;
    margin-top: 5px;
}
.home .content a{
    padding: 10px;
    background: white;
    color: black;
    letter-spacing: 2px;
    font-weight: 550;
    border-radius: 5px;
    text-decoration: none;
    transition: 0.5s;
}
.home .content a:hover{
    background: #ffa500;
    color: white;
}
@media (max-width:850px){
    .home{
        background-position: 50%;
    }
}
@media (max-width:450px){
    .home .content h5{
        font-size: 25px;
    }
    .home .content h1{
        font-size: 38px;
    }
    .home .content p{
        font-size: 13px;
    }
}
/* Home Section End */

/* Section Book Start */
.book{
    background: #f9f9f9;
    padding: 50px;
}
.main-text h1{
    text-align: center;
    text-shadow: 0px 1px 1px black;
    font-weight: 600;
}
.main-text h1 span{
    color: #ffa500;
}
.book .card{
    border-radius: 10px;
    box-shadow: 0px 5px 5px -6px black;
}
.book .row{
    margin-top: 30px;
}
.book form input{
    padding: 10px;
    color: black;
    border: none;
    outline: none;
    font-size: 15px;
    border-radius: 10px;
    box-shadow: 0px 5px 5px -6px black;
}
.book form textarea{
    border: none;
    border-radius: 10px;
    resize: none;
    box-shadow: 0px 5px 5px -6px black;
    height: 200px;
}
.book .submit{
    width: 160px;
    font-size: 16px;
    font-weight: 550;
    background: #ffa500;
    color: white;
    margin-top: 10px;
    transition: 0.5s;
}
.book .submit:hover{
    width: 170px;
}
@media (max-width:765px){
    .book{
        padding: 0;
    }
    .main-text h1{
        padding: 20px;
    }
}
/* Section Book End */





/* Section Packages Start */
.main-txt h1{
    text-align: center;
    margin-top: 30px;
    font-weight: 600;
    text-shadow: 0px 1px 1px black;
}
.main-txt h1 span{
    color: #ffa500;
}
.packages .card{
    border-radius: 5px;
    border: none;
    box-shadow: rgba(0,0,0,0.1) 0px 4px 12px;
}
.packages .card img{
    border-radius: 5px;
}
.packages .card .card-body{
    background: transparent;
}
.packages .card .card-body h3{
    font-size: 25px;
    font-weight: 600;
}
.packages .card .card-body p{
    font-size: 15px;
}
.checked{
    color: #ffa500;
}
.star i{
    font-size: 15px;
}
.packages .card .card-body h6{
    font-size: 20px;
}
.packages .card .card-body a{
    padding: 10px;
    text-decoration: none;
    background: #ffa500;
    color: white;
    border-radius: 5px;
}
/* Section Packages End */




/* Section Services Start */
.services{
    background: #f9f9f9;
    margin-top: 50px;
}
.services .card{
    box-shadow: rgba(0,0,0,0.1) 0px 4px 12px;
    border: none;
    cursor: pointer;
}
.services .card i{
    font-size: 80px;
    text-align: center;
    color: #ffa500;
    margin-top: 20px;
}
.services .card .card-body h3{
    font-weight: 600;
}
.services .card .card-body{
    text-align: center;
}
/* Section Services End */





/* Section Gallary Start */
.gallary{
    margin-top: 50px;
}
.gallary .card{
    border-radius: 10px;
    box-shadow: rgba(0,0,0,0.1) 0px 4px 12px;
    cursor: pointer;
}
.gallary .card img{
    border-radius: 10px;
    transition: 0.5s;
}
.gallary .card img:hover{
    transform: scale(1.1);
}
/* Section Gallary End */




/* About Start */
.about{
    padding: 50px;
    margin-top: 50px;
    background: #f9f9f9;
}
.about .card{
    border-radius: 10px;
}
.about .card img{
    border-radius: 10px;
}
.about h2{
    font-weight: 600;
    letter-spacing: 1px;
}
.about p{
    font-weight: 500;
}
#about-btn{
    width: 150px;
    height: 38px;
    border: none;
    border-radius: 5px;
    background: #ffa500;
    color: white;
    letter-spacing: 2px;
    font-weight: 550;
    transition: 0.5s ease;
    cursor: pointer;
}
#about-btn:hover{
    width: 170px;
}
@media (max-width:765px){
    .about{
        padding: 0;
    }
}
/* About End */




/* Footer Start */
#footer{
    width: 100%;
    margin-top: 150px;
    text-align: center;
    background: #f9f9f9;
}
#footer h1{
    font-weight: 600;
    padding-top: 30px;
    text-shadow: 0px 0px 1px black;
}
#footer h1 span{
    color: #ffa500;
}
.social-links i{
    padding: 10px;
    border-radius: 5px;
    font-size: 20px;
    background: black;
    color: white;
    margin-left: 10px;
    margin-bottom: 10px;
    transition: 0.5s ease;
    cursor: pointer;
}
.social-links i:hover{
    background: #ffa500;
}
/* Footer End */
</style>
<body>
    





    <!-- Navbar Start -->
    <nav class="navbar navbar-expand-lg" id="navbar">
        <div class="container">
          <a class="navbar-brand" href="index.html" id="logo"><span>T</span>ravel Vista</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span><i class="fa-solid fa-bars"></i></span>
          </button>
          <div class="collapse navbar-collapse" id="mynavbar">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <a class="nav-link active" href="index.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#book">Book</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#packages">Packages</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#services">Services</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#gallary">Gallery</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#about">About</a>
              </li>
             
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="text" placeholder="Search">
              <button class="btn btn-primary" type="button">Search</button>
            </form>
          </div>
        </div>
      </nav>
    <!-- Navbar End -->





    <!-- Home Section Start -->
    <div class="home">
        <div class="content">
            <h5>Welcome To World</h5>
            <h1>Visit <span class="changecontent"></span></h1>
            <p>#Enjoy the vibes</p>
            <a href="#book">Book Place</a>
            
        </div>
    </div>
    <!-- Home Section End -->





    <!-- Section Book Start -->
    <section class="book" id="book">
      <div class="container">

        <div class="main-text">
          <h1><span>B</span>ook</h1>
        </div>
        
        <div class="row">

          <div class="col-md-6 py-3 py-md-0">
            <div class="card">
              <img src="book.jpg.png" alt="">
            </div>
          </div>

          <div class="col-md-6 py-3 py-md-0">
            <form action="#">

              <input type="text" class="form-control" placeholder="Where To" required><br>
              <input type="text" class="form-control" placeholder="How Many" required><br>
              <input type="date" class="form-control" placeholder="Arrivals" required><br>
              <input type="date" class="form-control" placeholder="Leaving" required><br>
              <textarea class="form-control" rows="5" name="text" placeholder="Enter Your Name & Details"></textarea>
              <input type="submit" value="Book Now" class="submit" required>

            </form>
          </div>

        </div>
      </div>
    </section>
    <!-- Section Book End -->








    <!-- Section Packages Start -->
    <section class="packages" id="packages">
      <div class="container">
        
        <div class="main-txt">
          <h1><span>P</span>ackages</h1>
        </div>

        <div class="row" style="margin-top: 30px;">

          <div class="col-md-4 py-3 py-md-0">

            <div class="card">
              <img src="uk.png" alt="">
              <div class="card-body">
                <h3>United Kingdom</h3>
                <p>The United Kingdom, made up of England, Scotland, Wales and Northern Ireland, is an island nation in northwestern Europ</p>
                <div class="star">
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star "></i>
                  <i class="fa-solid fa-star "></i>
                </div>
                <h6>Price: <strong>$500</strong></h6>
                <a href="#book">Book Now</a>
              </div>
            </div>

          </div>
          <div class="col-md-4 py-3 py-md-0">

            <div class="card">
              <img src="france.png" alt="">
              <div class="card-body">
                <h3>France</h3>
                <p>France,encompasses medieval cities, alpine villages and Mediterranean beaches. 
                  Paris, its capital, is famed for its fashion houses,monuments like the Eiffel Tower</p>
                <div class="star">
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star "></i>
                  <i class="fa-solid fa-star "></i>
                </div>
                <h6>Price: <strong>$500</strong></h6>
                <a href="#book">Book Now</a>
              </div>
            </div>

          </div>
          <div class="col-md-4 py-3 py-md-0">

            <div class="card">
              <img src="pakistan.png" alt="">
              <div class="card-body">
                <h3>Pakistan</h3>
                <p>Pakistan, officially the Islamic Republic of Pakistan, is a country in South Asia.Pakistan boasts a diverse range of natural wonders,majestic K2 mountain,Attabad Lake. </p>
                <div class="star">
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star "></i>
                  <i class="fa-solid fa-star "></i>
                </div>
                <h6>Price: <strong>$500</strong></h6>
                <a href="#book">Book Now</a>
              </div>
            </div>

          </div>



        </div>



        <div class="row" style="margin-top: 30px;">

          <div class="col-md-4 py-3 py-md-0">

            <div class="card">
              <img src="italy.png" alt="">
              <div class="card-body">
                <h3>Italy</h3>
                <p>Italy, a European country with a long Mediterranean coastline,
                   has left a powerful mark on Western culture and cuisine. Its capital, Rome, is home to the Vatican as well as landmark art and ancient ruins. </p>
                <div class="star">
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star "></i>
                  <i class="fa-solid fa-star "></i>
                </div>
                <h6>Price: <strong>$500</strong></h6>
                <a href="#book">Book Now</a>
              </div>
            </div>

          </div>
          <div class="col-md-4 py-3 py-md-0">

            <div class="card">
              <img src="india.png" alt="">
              <div class="card-body">
                <h3>India</h3>
                <p>India, officially the Republic of India, is a country in South Asia. It is the seventh-largest country by area; 
                  the most populous country as of June 2023; and from the time of its independence in 1947, the world's most populous democracy. </p>
                <div class="star">
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star "></i>
                  <i class="fa-solid fa-star "></i>
                </div>
                <h6>Price: <strong>$500</strong></h6>
                <a href="#book">Book Now</a>
              </div>
            </div>

          </div>
          <div class="col-md-4 py-3 py-md-0">

            <div class="card">
              <img src="us.png" alt="">
              <div class="card-body">
                <h3>United States</h3>
                <p>The U.S. is a country of 50 states covering a 
                  vast swath of North America, with Alaska in the northwest and Hawaii extending the nation’s presence into the Pacific Ocean.</p>
                <div class="star">
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star "></i>
                  <i class="fa-solid fa-star "></i>
                </div>
                <h6>Price: <strong>$500</strong></h6>
                <a href="#book" >Book Now</a>
              </div>
            </div>

          </div>



        </div>


      </div>
    </section>
    <!-- Section Packages End -->







    <!-- Section Services Start -->
    <section class="services" id="services">
      <div class="container">

        <div class="main-txt">
          <h1><span>S</span>ervices</h1>
        </div>

        <div class="row" style="margin-top: 30px;">

          <div class="col-md-4 py-3 py-md-0">

            <div class="card">
              <i class="fas fa-hotel"></i>
              <div class="card-body">
                <h3>Affordable Hotel</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eaque.</p>
              </div>
            </div>

          </div>
          <div class="col-md-4 py-3 py-md-0">

            <div class="card">
              <i class="fas fa-utensils"></i>
              <div class="card-body">
                <h3>Food & Drinks</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eaque.</p>
              </div>
            </div>

          </div>
          <div class="col-md-4 py-3 py-md-0">

            <div class="card">
              <i class="fas fa-bullhorn"></i>
              <div class="card-body">
                <h3>Safety Guide</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eaque.</p>
              </div>
            </div>

          </div>



        </div>


        <div class="row" style="margin-top: 30px;">

          <div class="col-md-4 py-3 py-md-0">

            <div class="card">
              <i class="fas fa-globe-asia"></i>
              <div class="card-body">
                <h3>Around The World</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eaque.</p>
              </div>
            </div>

          </div>
          <div class="col-md-4 py-3 py-md-0">

            <div class="card">
              <i class="fas fa-plane"></i>
              <div class="card-body">
                <h3>Fastest Travel</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eaque.</p>
              </div>
            </div>

          </div>
          <div class="col-md-4 py-3 py-md-0">

            <div class="card">
              <i class="fas fa-hiking"></i>
              <div class="card-body">
                <h3>Adventures</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eaque.</p>
              </div>
            </div>

          </div>



        </div>

      </div>
    </section>
    <!-- Section Services End -->




    <!-- Section Gallary Start -->
    <section class="gallary" id="gallary">
      <div class="container">

        <div class="main-txt">
          <h1><span>G</span>allery</h1>
        </div>

        <div class="row" style="margin-top: 30px;">
          <div class="col-md-4 py-3 py-md-0">
            <div class="card">
              <img src="g1.png" alt="" height="230px">
            </div>
          </div>
          <div class="col-md-4 py-3 py-md-0">
            <div class="card">
              <img src="g2.png" alt="" height="230px">
            </div>
          </div>
          <div class="col-md-4 py-3 py-md-0">
            <div class="card">
              <img src="g3.png" alt="" height="230px">
            </div>
          </div>
        </div>


        <div class="row" style="margin-top: 30px;">
          <div class="col-md-4 py-3 py-md-0">
            <div class="card">
              <img src="g4.png" alt="" height="230px">
            </div>
          </div>
          <div class="col-md-4 py-3 py-md-0">
            <div class="card">
              <img src="g5.png" alt="" height="230px">
            </div>
          </div>
          <div class="col-md-4 py-3 py-md-0">
            <div class="card">
              <img src="g6.png" alt="" height="230px">
            </div>
          </div>
        </div>

      </div>
    </section>
    <!-- Section Gallary End -->







    <!-- About Start -->
    <section class="about" id="about">
      <div class="container">

        <div class="main-txt">
          <h1>About <span>Us</span></h1>
        </div>

        <div class="row" style="margin-top: 50px;">

          <div class="col-md-6 py-3 py-md-0">
            <div class="card">
              <img src="about-img.png" alt="">
            </div>
          </div>

          <div class="col-md-6 py-3 py-md-0">
            <h2>How Travel Agency Work</h2>
            <p>At Travel Vista, we believe that every journey should be an unforgettable experience. Whether you're an avid explorer seeking off-the-beaten-path adventures, a luxury traveler yearning for indulgent escapes, or a family in search of memorable getaways – we've got your dream destination covered.

Why Choose Travel Vista ?

Tailored Experiences: Our travel experts curate bespoke itineraries to suit your unique preferences, ensuring every trip is a perfect match for your interests and desires.

Global Reach.
Exclusive Deals: Access unbeatable deals and exclusive perks through our partnerships with leading airlines, hotels, and tour operators, making luxury travel more accessible than ever.

24/7 Support: Travel with confidence knowing our dedicated support team is available around the clock, ready to assist with any questions or unexpected changes.

Ready to turn your travel dreams into reality? Start your journey with Travel Vista today!</p>
            <button id="about-btn">Read More...</button>
          </div>

        </div>

      </div>
    </section>
    <!-- About End -->








    <!-- Footer Start -->
    <footer id="footer">
      <h1><span>T</span>ravel</h1>
      <p>Enjoy & Explore the World...!</p>
      <div class="social-links">
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-youtube"></i>
        <i class="fa-brands fa-pinterest-p"></i>
      </div>
      <div class="credit">
        <p>Designed By <a href="#">ch17</a></p>
      </div>

    </footer>
    <!-- Footer End -->







    


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

</body>
</html>
