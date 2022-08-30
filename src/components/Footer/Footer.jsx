import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'
import Button from '@mui/material/Button'


const Footer = () => {
  function scrollToTestDiv(){
    const divElement = document.getElementById('topScrollElement12323');
    divElement.scrollIntoView({ behavior: 'smooth' });
  }
    return(
      <div className = "">
        <div>
            <footer>
            <div className="footer-section snipcss-bh2a2">
  <div className="row">
    <div className="col-xs-12">
      <div className="footer-1">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed snip-button" data-toggle="collapse" data-target=".expandable" aria-expanded="false">
            <div className="arrow-right">
            </div>
          </button>
          <h4 className="hidden-lg hidden-md hidden-sm snip-h4">
            About Us
          </h4>
        </div>
        <h4 className="hidden-xs snip-h4">
          About Us
        </h4>
        <div className="collapse navbar-collapse footer-navbar expandable">
          <ul id="menu-footerone" className="snip-ul">
            <li id="menu-item-279" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-279">
              <a title="About CMRL" href="https://chennaimetrorail.org/about-cmrl/" className="snip-a">
                About CMRL
              </a>
            </li>
            <li id="menu-item-283" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-283">
              <a title="Vision &amp; Mission" href="https://chennaimetrorail.org/mission-vision/" className="snip-a">
                Vision &amp; Mission
              </a>
            </li>
            <li id="menu-item-280" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-280">
              <a title="Board of Directors" href="https://chennaimetrorail.org/board-of-directors/" className="snip-a">
                Board of Directors
              </a>
            </li>
            <li id="menu-item-281" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-281">
              <a title="CMRL Core Values" href="https://chennaimetrorail.org/cmrl-core-values/" className="snip-a">
                CMRL Core Values
              </a>
            </li>
            <li id="menu-item-284" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-284">
              <a title="Direction" href="https://chennaimetrorail.org/direction/" className="snip-a">
                Direction
              </a>
            </li>
            <li id="menu-item-285" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-285">
              <a title="Senior Management" href="https://chennaimetrorail.org/senior-management/" className="snip-a">
                Senior Management
              </a>
            </li>
            <li id="menu-item-9268" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-9268">
              <a title="Annual Report" href="https://chennaimetrorail.org/annual-report/" className="snip-a">
                Annual Report
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-1">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed snip-button" data-toggle="collapse" data-target=".projex" aria-expanded="false">
            <div className="arrow-right">
            </div>
          </button>
          <h4 className="hidden-lg hidden-md hidden-sm snip-h4">
            The Project
          </h4>
        </div>
        <h4 className="hidden-xs snip-h4">
          The Project
        </h4>
        <div className="collapse navbar-collapse  footer-navbar projex">
          <ul id="menu-footertwo" className="snip-ul">
            <li id="menu-item-294" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-294">
              <a title="Why Metro Rail" href="https://chennaimetrorail.org/why-metro-rail/" className="snip-a">
                Why Metro Rail
              </a>
            </li>
            <li id="menu-item-291" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-291">
              <a title="Project Brief" href="https://chennaimetrorail.org/project-brief/" className="snip-a">
                Project Brief
              </a>
            </li>
            <li id="menu-item-292" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-292">
              <a title="Project Status" href="https://chennaimetrorail.org/project-status/" className="snip-a">
                Project Status
              </a>
            </li>
            <li id="menu-item-2233" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-2233">
              <a title="Sitemap" href="https://chennaimetrorail.org/sitemap/" className="snip-a">
                Sitemap
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-1">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed snip-button" data-toggle="collapse" data-target=".tendex" aria-expanded="false">
            <div className="arrow-right">
            </div>
          </button>
          <h4 className="hidden-lg hidden-md hidden-sm snip-h4">
            Tenders
          </h4>
        </div>
        <h4 className="hidden-xs snip-h4">
          Tenders
        </h4>
        <div className="collapse navbar-collapse footer-navbar tendex">
          <ul id="menu-footerthree" className="snip-ul">
            <li id="menu-item-5284" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5284">
              <a title="e-tender notifications - CPP Portal" target="_blank" href="https://eprocure.gov.in/cppp/searchbyorg/Chennai%20Metro%20Rail%20Limited" className="snip-a">
                e-tender notifications–CPP Portal
              </a>
            </li>
            <li id="menu-item-15100" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-15100">
              <a title="E-TENDER NOTIFICATIONS - CPPP MDB" target="_blank" href="https://eprocure.gov.in/eprocure/app?component=%24DirectLink&amp;page=FrontEndTendersByOrganisation&amp;service=direct&amp;session=T&amp;sp=SwvR5cUo9vZU7m12u1kjm7NS0Fec7wUuNy1YFXyqSerE%3D" className="snip-a">
                E-TENDER NOTIFICATIONS–CPPP MDB
              </a>
            </li>
            <li id="menu-item-5293" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5293">
              <a title="e-tender register/apply - CPP Portal" target="_blank" href="https://eprocure.gov.in/eprocure/app" className="snip-a">
                e-tender register/apply–CPP Portal
              </a>
            </li>
            <li id="menu-item-302" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-302">
              <a title="Tenders Awarded" href="https://chennaimetrorail.org/tenders-awarded/" className="snip-a">
                Tenders Awarded
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-1">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed snip-button" data-toggle="collapse" data-target=".commuex" aria-expanded="false">
            <div className="arrow-right">
            </div>
          </button>
          <h4 className="hidden-lg hidden-md hidden-sm snip-h4">
            For Commuters
          </h4>
        </div>
        <h4 className="hidden-xs snip-h4">
          For Commuters
        </h4>
        <div className="collapse navbar-collapse footer-navbar commuex">
          <ul id="menu-footerfour" className="snip-ul">
            <li id="menu-item-7363" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-7363">
              <a title="Feeder Service" href="https://chennaimetrorail.org/last-mile-connectivity/" className="snip-a">
                Feeder Service
              </a>
            </li>
            <li id="menu-item-3541" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3541">
              <a title="PARKING FACILITIES / AVAILABILITY" target="_blank" href="https://chennaimetrorail.org/wp-content/uploads/2022/06/Parking-Facilities-availabilty.pdf" className="snip-a">
                PARKING FACILITIES / AVAILABILITY
              </a>
            </li>
            <li id="menu-item-304" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-304">
              <a title="DO’S and DONT’S" href="https://chennaimetrorail.org/dos-and-donts/" className="snip-a">
                DO’S and DONT’S
              </a>
            </li>
            <li id="menu-item-15154" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-15154">
              <a title="Fare Table" href="https://chennaimetrorail.org/fare-table/" className="snip-a">
                Fare Table
              </a>
            </li>
            <li id="menu-item-2157" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2157">
              <a title="Time Table" href="https://chennaimetrorail.org/time-table/" className="snip-a">
                Time Table
              </a>
            </li>
            <li id="menu-item-2162" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2162">
              <a title="STORE VALUE CARD" target="_blank" href="https://chennaimetrorail.org/wp-content/uploads/2021/02/Store-value-card.pdf" className="snip-a">
                STORE VALUE CARD
              </a>
            </li>
            <li id="menu-item-2161" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2161">
              <a title="ITEMS NOT TO CARRY" target="_blank" href="https://chennaimetrorail.org/wp-content/uploads/2015/11/Dangerous_and_offencive_materials.pdf" className="snip-a">
                ITEMS NOT TO CARRY
              </a>
            </li>
            <li id="menu-item-2160" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2160">
              <a title="PARKING TARIFF" href="https://chennaimetrorail.org/parking-tariff/" className="snip-a">
                PARKING TARIFF
              </a>
            </li>
            <li id="menu-item-15699" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-15699">
              <a title="CMRL - FACILITIES FOR DIFFERENTLY ABLED PEOPLE" href="https://chennaimetrorail.org/differentlyable/" className="snip-a">
                CMRL – FACILITIES FOR DIFFERENTLY ABLED PEOPLE
              </a>
            </li>
            <li id="menu-item-4928" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4928">
              <a title="Bi-Cycle Promotion" target="_blank" href="https://chennaimetrorail.org/wp-content/uploads/2017/09/Cycle-Pamplet.pdf" className="snip-a">
                Bi-Cycle Promotion
              </a>
            </li>
            <li id="menu-item-6359" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-6359">
              <a title="Bicycle facilities at station" href="https://chennaimetrorail.org/bicycle-facilities-station/" className="snip-a">
                Bicycle facilities at station
              </a>
            </li>
            <li id="menu-item-2159" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2159">
              <a title="TOURIST CARD DETAILS" target="_blank" href="https://chennaimetrorail.org/wp-content/uploads/2019/06/Tourist-Card2019.pdf" className="snip-a">
                TOURIST CARD DETAILS
              </a>
            </li>
            <li id="menu-item-2163" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2163">
              <a title="OFFENCES &amp; PENALTIES" target="_blank" href="https://chennaimetrorail.org/wp-content/uploads/2015/11/OM-penalty_for-passenger_info.pdf" className="snip-a">
                OFFENCES &amp; PENALTIES
              </a>
            </li>
            <li id="menu-item-6360" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6360">
              <a title="Metro Railways Carriage Ticket rules, 2014" href="https://chennaimetrorail.org/wp-content/uploads/2018/04/Metro-Railways-Carriage-Ticket-Rules-2014.pdf" className="snip-a">
                Metro Railways Carriage Ticket rules, 2014
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-1">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed snip-button" data-toggle="collapse" data-target=".mediaex" aria-expanded="false">
            <div className="arrow-right">
            </div>
          </button>
          <h4 className="hidden-lg hidden-md hidden-sm snip-h4">
            Media
          </h4>
        </div>
        <h4 className="hidden-xs snip-h4">
          Media
        </h4>
        <div className="collapse navbar-collapse footer-navbar mediaex">
          <ul id="menu-footerfive" className="snip-ul">
            <li id="menu-item-1166" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-1166">
              <a title="PRESS CLIPPINGS" href="https://chennaimetrorail.org/press-clippings/" className="snip-a">
                PRESS CLIPPINGS
              </a>
            </li>
            <li id="menu-item-1167" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-1167">
              <a title="PRESS RELEASES" href="https://chennaimetrorail.org/press-releases/" className="snip-a">
                PRESS RELEASES
              </a>
            </li>
            <li id="menu-item-13193" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-13193">
              <a title="PHOTO GALLERY" href="https://chennaimetrorail.org/bwg_gallery/photo-gallery/" className="snip-a">
                PHOTO GALLERY
              </a>
            </li>
            <li id="menu-item-1169" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-1169">
              <a title="PUBLIC NOTIFICATIONS" href="https://chennaimetrorail.org/public-notifications/" className="snip-a">
                PUBLIC NOTIFICATIONS
              </a>
            </li>
            <li id="menu-item-17006" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-17006">
              <a title="BROCHURE" target="_blank" href="https://chennaimetrorail.org/wp-content/uploads/2019/04/Brochure-2019.pdf" className="snip-a">
                BROCHURE
              </a>
            </li>
            <li id="menu-item-1168" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-1168">
              <a title="NEWSLETTER" href="https://chennaimetrorail.org/newsletter/" className="snip-a">
                NEWSLETTER
              </a>
            </li>
            <li id="menu-item-1164" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-1164">
              <a title="GAZETTE NOTIFICATIONS" href="https://chennaimetrorail.org/gazette-notifications/" className="snip-a">
                GAZETTE NOTIFICATIONS
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-1">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed snip-button" data-toggle="collapse" data-target=".careerex" aria-expanded="false">
            <div className="arrow-right">
            </div>
          </button>
          <h4 className="hidden-lg hidden-md hidden-sm snip-h4">
            Careers
          </h4>
        </div>
        <h4 className="hidden-xs snip-h4">
          Careers
        </h4>
        <div className="collapse navbar-collapse footer-navbar careerex">
          <ul id="menu-footersix" className="snip-ul">
            <li id="menu-item-1186" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-1186">
              <a title="Job Notifications" href="https://chennaimetrorail.org/job-notifications/" className="snip-a">
                Job Notifications
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-1">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed snip-button" data-toggle="collapse" data-target=".rtiex" aria-expanded="false">
            <div className="arrow-right">
            </div>
          </button>
          <h4 className="hidden-lg hidden-md hidden-sm snip-h4">
            Vigilance/RTI
          </h4>
        </div>
        <h4 className="hidden-xs snip-h4">
          Vigilance/RTI
        </h4>
        <div className="collapse navbar-collapse footer-navbar rtiex">
          <ul id="menu-footerseven" className="snip-ul">
            <li id="menu-item-1194" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-1194">
              <a title="VIGILANCE DIRECTORY" href="https://chennaimetrorail.org/vigilance-directory/" className="snip-a">
                VIGILANCE DIRECTORY
              </a>
            </li>
            <li id="menu-item-1193" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1193">
              <a title="FRAUD PREVENTION POLICY" target="_blank" href="https://chennaimetrorail.org/wp-content/uploads/2015/11/fraud_prevention.pdf" className="snip-a">
                FRAUD PREVENTION POLICY
              </a>
            </li>
            <li id="menu-item-1195" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1195">
              <a title="WHISTLE BLOWER POLICY" target="_blank" href="https://chennaimetrorail.org/wp-content/uploads/2015/11/Whistle_Blower.pdf" className="snip-a">
                WHISTLE BLOWER POLICY
              </a>
            </li>
            <li id="menu-item-1196" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-1196">
              <a title="Online Complaints" href="https://chennaimetrorail.org/online-complaints/" className="snip-a">
                Online Complaints
              </a>
            </li>
            <li id="menu-item-1192" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-1192">
              <a title="RTI" href="https://chennaimetrorail.org/rti/" className="snip-a">
                RTI
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
      <p className="snip-p">
        © 2022 Chennai Metro Rail Limited. All Rights Reserved.
      </p>
      <ul className="privacy-terms snip-ul">
        <li>
          <a href="https://chennaimetrorail.org/terms-conditions/" title="Terms &amp; Conditions" className="snip-a">
            Terms &amp; Conditions
          </a>
        </li>
        <li>
        <a onClick={scrollToTestDiv} href='#/HomeAdmin'>Admin</a>
        </li>
        <li>
        <a onClick={scrollToTestDiv} href='/#'>Home</a>
        </li>
      </ul>
    </div>
    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
      <ul className="social snip-ul">
        <li>
          <a href="https://www.facebook.com/chennaimetrorail" target="_blank" className="snip-a">
            <img src="https://chennaimetrorail.org/wp-content/themes/CMRL/images/fb.png" className="img-responsive snip-img" title="Facebook"></img>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/#!/cmrlofficial" target="_blank" className="snip-a">
            <img src="https://chennaimetrorail.org/wp-content/themes/CMRL/images/tr.png" className="img-responsive snip-img" title="Twitter"></img>
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/chennaimetrorail" target="_blank" className="snip-a">
            <img src="https://chennaimetrorail.org/wp-content/themes/CMRL/images/yt.png" className="img-responsive snip-img" title="Youtube"></img>
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>

            </footer>
        </div>
        </div>
    )

}

export default Footer