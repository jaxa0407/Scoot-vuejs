<script>
   export default {

   }
</script>


<template>
    <section class="hero">
        <div class="hero__container container">
            <div class="hero__inner-wrap">
              <div class="hero__left">
                <h2 class="hero__left-heading">Scooter sharing made simple</h2>
                
                <p class="hero__left-txt">Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in each of our cities. Use our app to locate the nearest bike, unlock it with a tap, and you're away!</p>
                
                <button class="hero__btn btn">Get Scootin</button>
              </div>
            </div>
          </div>
    </section> 
</template>

<style>
.hero {
    background-image: url("./icons/hero-bcg.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    max-width: 1440px;
    width: 100%;
    height: 650px;
    margin: 0 auto;
    position: relative;
}
.hero__left {
    padding-top: 153px;
    max-width: 500px;
    width: 100%;
}
.hero__left-heading {
    margin-bottom: 40px;
    font-weight: 700;
    font-size: 56px;
    line-height: 56px;
    letter-spacing: -2.5px;
    color: #FFFFFF;
}
.hero__left-txt {
    position: relative;
    margin-bottom: 40px;
    font-weight: 400;
    font-size: 15px;
    line-height: 25px;
    color: #FFFFFF;
    margin-left: 95px;
} 

.hero__left-txt::before {
        content: "";
        background-image: url("./icons/hero-arrow-left.svg");
        background-repeat: no-repeat;
        background-position: center;
        max-width: 202px;
        width: 100%;
        height: 15px;
        position: absolute;
        top: calc(50% - 10px);
        left: calc(-50% - 57px);
    }
.hero__left-txt::after {
    content: "";
    max-width: 450px;
    width: 100%;
    height: 140px;
    background-image: url("./icons/hero-arrow-right.svg");
    background-repeat: no-repeat;   
    background-position: right;
    position: absolute;
    top: calc(50% - 10px);
    right: calc(-100% - 40px);
    z-index: 9999;
}

.btn {
    background: none;
    border: none;
    outline: none;
    font-family: 'Space Mono';
    font-weight: 700;
    font-size: 15px;
    line-height: 25px;
    text-align: center;
    color: #FFFFFF;
    min-width: 180px;
    padding: 14px 0;
    background-color: yellow;
    border: 2px solid yellow;
    transition: all 0.4s ease;    
}
   .btn:hover {
           color: yellow;
           background-color: #FFFFFF;
       }
       
    .btn:active {
        transform: scale(0.9);
        color: yellow;
        background-color: #FFFFFF;
    }
@media only screen and (max-width: 970px) {
  .hero__left-txt {
    position: relative;
    margin-bottom: 40px;
    font-weight: 400;
    font-size: 15px;
    line-height: 25px;
    color: #FFFFFF;
    margin-left: 95px;
  }

  .hero__left-txt::before {
    content: "";
    background-image: url(./icons/hero-arrow-left.svg);
    background-repeat: no-repeat;
    background-position: center;
    max-width: 202px;
    width: 100%;
    height: 15px;
    position: absolute;
    top: calc(50% - 10px);
    left: calc(-50% - 57px);
  }
  
  .hero__left-txt::after {
    content: "";
    max-width: 250px;
    width: 100%;
    height: 140px;
    background-image: url(./icons/hero-arrow-right.svg);
    background-repeat: no-repeat;
    background-position: right;
    position: absolute;
    top: calc(50% - 10px);
    right: calc(-50% - 70px);
    overflow-x: hidden;
  }
}

@media only screen and (max-width: 800px) {
  .hero__inner-wrap {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
  }
  .hero__left-heading {
    text-align: center;
    font-size: 56px;
    line-height: 56px;
  }
  .hero__left-txt {
    text-align: center;
    margin: 0;
    position: relative;
    margin-bottom: 40px;
    font-weight: 400;
    font-size: 15px;
    line-height: 25px;
    color: #FFFFFF;
  }
  .hero__left-txt::before {
    display: none;
  }
  .hero__left-txt::after {
    display: none;
  }
  .hero__left {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    padding-top: 150px;
    max-width: 500px;
    width: 100%;
  }
  .hero__left::before {
    content: "";
    opacity: 1;
    position: absolute;
    bottom: -30%;
    left: -60%;
    background-image: url(./icons/hero-arrow-right.svg);
    background-repeat: no-repeat;
    background-position: contain;
    max-width: 450px;
    width: 100%;
    height: 140px;
    z-index: -1;
  }
}

@media only screen and (max-width: 520px) {
  .hero__inner-wrap {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
  }
  .hero__left-heading {
    text-align: center;
    font-size: 40px;
    line-height: 40px;
    margin: 0;
    margin-bottom: 24px;
  }
  .hero__left-txt {
    text-align: center;
    margin: 0;
    position: relative;
    margin-bottom: 30px;
    font-weight: 400;
    font-size: 15px;
    line-height: 25px;
    color: #FFFFFF;
  }
  .hero__left-txt::before {
    display: none;
  }
  .hero__left-txt::after {
    display: none;
  }
  .hero__left {
    padding: 0 32px;
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    padding-top: 110px;
    max-width: 500px;
    width: 100%;
  }
  .hero__left::before {
    content: "";
    position: absolute;
    bottom: -22%;
    left: -65%;
    background-image: url(./icons/hero-arrow-right.svg);
    background-repeat: no-repeat;
    background-position: right;
    max-width: 450px;
    width: 100%;
    height: 140px;
    z-index: 999;
  }
}

@media only screen and (max-width: 350px) {
  .hero__left {
    padding-top: 90px;
  }
}
</style>