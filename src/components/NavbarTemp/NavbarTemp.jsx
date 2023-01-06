import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./NavbarTemp.css";


export default function NavbarTemp() {
    const navigate = useNavigate();

    const navigateHome = () => {
        navigate('/home');
      };
  return (
   <div>
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{backgroundColor: "black"}}>
        <ul class="list-social">
    <li>
      <div class="">
        <div class="topheader">
          <ul class="">
            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-36 current_page_item menu-item-1145 active">
              <a href="https://chennaimetrorail.org/">
                Home
              </a>
            </li>
            <li class="menu-item menu-item-type-post_type menu-item-object-post menu-item-1147">
              <a href="https://chennaimetrorail.org/feedback/">
                Feedback / Grievances
              </a>
            </li>
            <li class="menu-item menu-item-type-post_type menu-item-object-post menu-item-1148">
              <a href="https://chennaimetrorail.org/faq/">
                FAQ
              </a>
            </li>
            <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1153 nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            User Survey 
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item dropdown-comp" onClick={navigateHome}>Signin using Email</a></li>
          </ul>
            </li>
            <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2040">
              <a href="https://wcag.chennaimetrorail.org/">
                WCAG SITE
              </a>
            </li>
            <li class="menu-item menu-item-type-post_type menu-item-object-post menu-item-6747">
              <a href="https://chennaimetrorail.org/contact-us/">
                Admin
              </a>
            </li>
          </ul>
        </div>
      </div>
    </li>
    <li>
      <div class="textzoomer">
      </div>
    </li>
  </ul>
</div>

   </div>
  )
}
