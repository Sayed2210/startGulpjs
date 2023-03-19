@media (max-width: 767px) {
  .txt-align-c-sm {
    text-align: center !important;
  }
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.container {
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
  /*Medium Screen (Ipad)*/
  /*small lap Screen*/
  /* big Screen */
}
@media (min-width: 768px) {
  .container {
    width: 720px;
  }
}
@media (min-width: 962px) {
  .container {
    width: 940px;
  }
}
@media (min-width: 1200px) {
  .container {
    width: 1140px;
  }
}

.main-title-b {
  position: relative;
}
.main-title-b h2 {
  max-width: 350px;
  background-color: #e2494c;
  margin: 40px auto;
  text-align: center;
  border-radius: 16px;
  color: #fff;
}
.main-title-b h2::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 1.5px;
  background-color: #9c9c9c;
  left: 0;
  top: 50%;
  z-index: -1;
}

.main-btn {
  background-color: rgba(226, 73, 76, 0.8);
  color: #fff;
  padding: 10px 15px;
  border: none;
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 5px;
  max-width: 100px;
  display: block;
  transition: 0.3s;
}
.main-btn:hover {
  background-color: #e2494c;
}

body {
  background-color: #f6f6f6;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

ul,
ol {
  list-style: none;
}

img {
  max-width: 100%;
}

a {
  text-decoration: none;
}

.header {
  padding: 20px 0;
  border-bottom: 1.5px solid #9c9c9c;
}
.header .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header .container .logo {
  flex: 1;
}
.header .container .logo h1 {
  font-weight: bold;
  margin-bottom: 10px;
}
.header .container .navbar {
  display: flex;
  align-items: center;
  background-color: #e2494c;
  flex: 2;
  -webkit-border-radius: 16px;
  border-radius: 16px;
}
.header .container .navbar li {
  text-align: center;
  width: 20%;
}
.header .container .navbar li a {
  color: #fff;
  display: block;
  padding: 15px;
  opacity: 0.8;
}
.header .container .navbar li a:hover {
  opacity: 1;
}
.header .container .navbar li a.active {
  opacity: 1;
}
.header .container .menu-bar,
.header .container .menu-btn,
.header .container .dis-menu {
  display: none;
}
@media (max-width: 767px) {
  .header .container .navbar {
    display: none;
  }
  .header .container .menu-btn {
    display: block;
    color: #000;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    border-radius: 50%;
    border: 2px solid #000;
    position: relative;
  }
  .header .container .dis-menu:checked + .menu-bar {
    display: flex;
    top: 105px;
  }
  .header .container .menu-bar {
    display: none;
    background-color: #000;
    flex-direction: column;
    width: 90%;
    justify-content: center;
    text-align: center;
    -o-transition: 0.3s;
    -webkit-transition: 0.3s;
    -moz-transition: 0.3s;
    -ms-transition: 0.3s;
    transition: 0.3s;
    position: absolute;
    right: 10px;
    top: 100px;
    z-index: 1000000000000000;
  }
  .header .container .menu-bar::before {
    content: "";
    position: absolute;
    border: 20px solid transparent;
    top: -40px;
    border-bottom-color: #000;
    right: 6px;
  }
  .header .container .menu-bar a {
    padding: 25px;
    font-family: satisfy;
    color: #fff;
    text-decoration: none;
  }
}

.slider .container q {
  font: italic 20px bold;
  max-width: 80%;
  margin: 30px auto;
  display: block;
  line-height: 1.7;
  text-align: center;
}
.slider .container img {
  width: 100%;
  height: 65vh;
}
.slider .container .bullets {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}
.slider .container .bullets li {
  background-color: #9c9c9c;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 3px solid transparent;
}
.slider .container .bullets li.active {
  background-color: #fff;
  border-color: #000;
}

.service-content {
  display: flex;
  gap: 20px;
}
@media (max-width: 767px) {
  .service-content {
    flex-direction: column;
    gap: 50px;
  }
}
.service-content h3 {
  margin-bottom: 15px;
  display: flex;
  align-items: center;
}
.service-content h3 i {
  font-size: 2rem;
  margin-right: 10px;
  color: #9c9c9c;
}
@media (max-width: 767px) {
  .service-content h3 {
    justify-content: center;
  }
}
.service-content p {
  color: #9c9c9c;
  text-align: justify;
  margin-bottom: 20px;
}
.service-content a {
  color: #e2494c;
  display: block;
}

.our-players-content {
  display: flex;
  gap: 5px;
}
@media (max-width: 767px) {
  .our-players-content {
    flex-wrap: wrap;
  }
}
@media (max-width: 565px) {
  .our-players-content {
    flex-direction: column;
  }
}
@media (max-width: 767px) {
  .our-players-content .player-box {
    width: 48%;
    margin-bottom: 20px;
  }
}
@media (max-width: 565px) {
  .our-players-content .player-box {
    width: 100%;
  }
}
.our-players-content .player-box h4 {
  font-weight: normal;
  margin-bottom: 10px;
}
.our-players-content .player-box h4 span {
  font-weight: bold;
}
.our-players-content .player-box p {
  color: #9c9c9c;
  text-align: start;
  margin-bottom: 20px;
}
.our-players-content .player-box a {
  color: #e2494c;
}

.lorem-ipsum .lorem-content {
  display: flex;
  margin-bottom: 50px;
  justify-content: space-between;
}
.lorem-ipsum .lorem-content img {
  width: 32.6666666667%;
}
@media (max-width: 767px) {
  .lorem-ipsum .lorem-content img {
    width: 100%;
  }
}
@media (max-width: 767px) {
  .lorem-ipsum .lorem-content {
    flex-direction: column;
    gap: 20px;
  }
}

.footer {
  background-color: #ccc;
  padding-top: 50px;
}
.footer .container {
  display: flex;
  gap: 10px;
  align-items: flex-start;
  border-bottom: 1.5px solid #9c9c9c;
}
@media (max-width: 767px) {
  .footer .container {
    flex-direction: column;
    gap: 20px;
  }
}
.footer .container .main-title {
  margin-bottom: 10px;
}
.footer .container .gallery .img-box {
  display: flex;
  gap: 10px;
  margin-bottom: 25px;
  padding: 10px 0;
}
@media (max-width: 767px) {
  .footer .container .gallery .img-box {
    flex-direction: column;
    gap: 20px;
    text-align: center;
    align-items: center;
    padding: 0;
  }
}
.footer .container .gallery .img-box img {
  width: 105px;
  padding: 5px;
  background-color: #fff;
  border: 1px solid #000;
}
@media (max-width: 767px) {
  .footer .container .gallery .img-box img {
    width: 250px;
  }
}
.footer .container .gallery .img-box .info {
  padding: 5px;
}
.footer .container .gallery .img-box .info h3 {
  color: #e2494c;
}
.footer .container .gallery .img-box .info p {
  color: #9c9c9c;
}
@media (max-width: 767px) {
  .footer .container .gallery .img-box .info {
    padding: 0;
  }
}
.footer .container .details {
  width: 100%;
}
.footer .container .details ul {
  color: #9c9c9c;
  margin-bottom: 15px;
}
.footer .container .details ul li span {
  color: #e2494c;
}
.footer .container .details p {
  color: #9c9c9c;
}
.footer .container .contact {
  width: 100%;
}
.footer .container .contact form input {
  width: 100%;
  padding: 10px 15px;
  margin-bottom: 15px;
  border: none;
  border-radius: 6px;
}
.footer .container .contact form input:focus {
  outline-color: #9c9c9c;
}
.footer .container .contact form input:focus::placeholder {
  opacity: 0;
}
.footer .container .contact form textarea {
  width: 100%;
  height: 150px;
  padding: 10px;
  border: none;
  border-radius: 6px;
}
.footer .container .contact form textarea:focus {
  outline-color: #9c9c9c;
}
.footer .container .contact form textarea:focus::placeholder {
  opacity: 0;
}
.footer .container .contact form ::placeholder {
  transition: 0.3s;
}
.footer .container .info {
  padding: 15px 0;
}
.footer .container .info span {
  margin-left: 300px;
}
@media (max-width: 767px) {
  .footer .container .info span {
    margin: 0;
  }
}