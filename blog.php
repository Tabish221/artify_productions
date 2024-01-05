<!DOCTYPE html>
<html lang="en">

<head>
   <?php include("includes/compatibility.php"); ?>
   <meta name="description" content="">
   <title>Artify Production | ...</title>
   <?php include("includes/style.php"); ?>
</head>

<body>
   <div id="loader">
      <div class="dl">
         <div class="dl__container">
            <div class="dl__corner--top"></div>
            <div class="dl__corner--bottom"></div>
         </div>
         <div class="dl__square"></div>
      </div>
   </div>
   <?php include("includes/header.php"); ?>

   <section class="innerBanner" style="background-image: url(assets/images/banner/blog.png);">
      <div class="container">
         <div class="row align-items-center">
            <div class="col-md-8">
               <div class="innerBanner-cont">
                  <h1>Blog</h1>

                  <nav aria-label="breadcrumb">
                     <ol class="breadcrumb gap-3 m-0 p-0">
                           <li class="breadcrumb-item"><a href="./">Home</a></li>
                           <li class="breadcrumb-item active" aria-current="page">Blog</li>
                     </ol>
                  </nav>
               </div>

            </div>

            <div class="col-md-4">
               <a href="#bannerdrop" class="circle-text-common circel-tex-area1">
                  <img src="assets/images/banner/camera-icon.svg" alt="image">
                  <div class="rounded-text">
                     <svg viewBox="0 0 200 200">
                        <path id="textPath" d="M 85,0 A 85,85 0 0 1 -85,0 A 85,85 0 0 1 85,0" transform="translate(100,100)" fill="none" stroke-width="0"></path>
                        <g>
                              <text text-anchor="start">
                                 <textPath class="coloring" xlink:href="#textPath" startOffset="0%">SCROLL * DOWN NOW *</textPath>
                              </text>
                        </g>
                     </svg>
                  </div>
               </a>
            </div>
         </div>
         
         <!-- <div class="mainBanner-drowp-btn wow bounceInUp animated" data-wow-delay="0.8s">
            <a href="#drophere">
               <img src="assets/images/down-arrow.png" alt="1">
            </a>
         </div> -->
      </div>
   </section>

   <section class="blogSection sec-pad" id="bannerdrop">
      <div class="container">
         <div class="row blogListing">
            <div class="col-md-4">
               <div class="blog-card">
                  <div class="blogCadr-img">
                     <img src="assets/images/blog/32.jpg"
                        alt="Building-Brands-That-Stand-Out-Brand-Strategy-Advice-from-Specialists">

                     <div class="blogCard-date">
                        <h6>13</h6>
                        <span>Oct 2023</span>
                     </div>
                  </div>

                  <div class="blogCard-card">
                     <div>
                        <h4>Building Brands That Stand Out: Brand Strategy Advice from Specialists </h4>

                        <p>In today's crowded marketplace, merely having a good product or service isn't enough to make
                           you
                           stand out. To truly...</p>
                     </div>

                     <a href="Building-Brands-That-Stand-Out-Brand-Strategy-Advice-from-Specialists.php">
                        Read MORE
                        <em>
                           <i class="fas fa-chevron-double-right"></i>
                        </em>
                     </a>
                  </div>
               </div>
            </div>

            <div class="col-md-4">
               <div class="blog-card">
                  <div class="blogCadr-img">
                     <img src="assets/images/blog/31.jpg" alt="The-Importance-of-Brand-Strategy-in-Digital-Marketing">

                     <div class="blogCard-date">
                        <h6>04</h6>
                        <span>Oct 2023</span>
                     </div>
                  </div>

                  <div class="blogCard-card">
                     <h4>The Importance of Brand Strategy in Digital Marketing</h4>

                     <p>In an increasingly crowded online marketplace, having a clearly defined brand strategy is ...
                     </p>

                     <a href="The-Importance-of-Brand-Strategy-in-Digital-Marketing.php">
                        Read MORE
                        <em>
                           <i class="fas fa-chevron-double-right"></i>
                        </em>
                     </a>
                  </div>
               </div>
            </div>

            <div class="col-md-4">
               <div class="blog-card">
                  <div class="blogCadr-img">
                     <img src="assets/images/blog/30.jpg"
                        alt="Maximizing-ROI-Why-Every-Business-Needs-a-Brand-Strategy-Consultant-in-2023">

                     <div class="blogCard-date">
                        <h6>28</h6>
                        <span>Sep 2023</span>
                     </div>
                  </div>

                  <div class="blogCard-card">
                     <h4>Maximizing ROI: Why Every Business Needs a Brand Strategy Consultant in 2023</h4>

                     <p>In an increasingly noisy and competitive business landscape, having strong branding is no longer
                        ...</p>

                     <a href="Maximizing-ROI-Why-Every-Business-Needs-a-Brand-Strategy-Consultant-in-2023.php">
                        Read MORE
                        <em>
                           <i class="fas fa-chevron-double-right"></i>
                        </em>
                     </a>
                  </div>
               </div>
            </div>

            <div class="col-md-4">
               <div class="blog-card">
                  <div class="blogCadr-img">
                     <img src="assets/images/blog/29.jpg"
                        alt="The-Art-and-Science-of-Branding-Insights-from-Top-Brand-Strategy-Consultants">

                     <div class="blogCard-date">
                        <h6>22</h6>
                        <span>Sep 2023</span>
                     </div>
                  </div>

                  <div class="blogCard-card">
                     <h4>The Art and Science of Branding Insights from Top Brand Strategy Consultants</h4>

                     <p>Creating an iconic, recognizable brand that resonates perfectly with your potential consumers
                        ...</p>

                     <a href="The-Art-and-Science-of-Branding-Insights-from-Top-Brand-Strategy-Consultants.php">
                        Read MORE
                        <em>
                           <i class="fas fa-chevron-double-right"></i>
                        </em>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>

   <?php include("includes/cta1.php"); ?>

   <?php include("includes/footer.php"); ?>
   <?php include("includes/scripts.php"); ?>
</body>

</html>