<script>
  export default {
  }
</script>

<template> 
    <section class="stage">
			<h2 class="visually-hidden">Stages of renting or buying our scooters</h2>
			<div class="stage__container container">
				<div class="stage__inner-wrap">
					<ul class="stage__list">
						<li class="stage__list-item">
							<h3 class="stage__item-heading">Locate with app</h3>
							
							<p class="stage__item-txt">The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app.</p>
						</li>
						
						<li class="stage__list-item">
							<h3 class="stage__item-heading">Pick your scooter</h3>
							
							<p class="stage__item-txt">We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost.</p>
						</li>
						
						<li class="stage__list-item">
							<h3 class="stage__item-heading">Enjoy the ride</h3>
							
							<p class="stage__item-txt">Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps.</p>
						</li>
					</ul>
				</div>
			</div>
		</section>
</template>

<style>
    .stage {
       margin-top: 160px;
       margin-bottom: 90px;
    }
    
    .stage__list {
        position: relative;
        display: flex;
        align-items: center;
        gap: 30px;
    }

    .stage__list::before {
        content: "";
        position: absolute;
        top: 42px;
        left: -17%;
        max-width: 973px;
        width: 100%;
        height: 15px;
        background-color: #E5ECF4;
    }
    
    .stage__list-item {
        position: relative;
        max-width: 350px;
        width: 100%;
        height: 300px;
        
        
    }
    .stage__list-item:first-child::before {
         background-image: url(./icons/phone-logo.svg);
    }
    .stage__list-item:nth-child(2)::before {
        background-image: url(./icons/scooter-logo.svg);
    }
    
    .stage__list-item:nth-child(3):before {
        background-image: url(./icons/rider-logo.svg);
    }
    
    
    .stage__list-item::before {
        content: "";
        position: absolute;
        width: 96px;
        height: 96px;
        background-repeat: no-repeat;
        background-position: center;
        background-color: yellow;
        border-radius: 50%;
    }
    
    
    .stage__item-heading {
        margin-top: 136px;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: -1.07143px;
        color: #495567;
        margin-bottom: 27px;
        text-align: start;
    }
    
    .stage__item-txt {
        text-align: start;
        font-size: 15px;
        line-height: 25px;
        color: #939CAA;
    }

@media only screen and (max-width: 770px) {
  .stage {
    padding-bottom: 100px;
    padding-top: 0;
  }
  .stage__list {
    position: static;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-align: end;
        -ms-flex-align: end;
            align-items: flex-end;
    width: 100%;
    padding: 0 90px 0 150px;
    gap: 100px;
  }
  .stage__list::before {
    content: "";
    display: none;
  }
  .stage__list-item {
    position: relative;
    max-width: 350px;
    width: 100%;
    height: 130px;
  }
  .stage__list-item:first-child::before {
    background-image: url(./icons/phone-logo.svg);
  }
  .stage__list-item:first-child::after {
    content: "";
    position: absolute;
    top: -50%;
    left: -118px;
    width: 0;
    height: 700px;
    border: 8px solid #E5ECF4;
    z-index: -999999;
  }
  .stage__list-item:nth-child(2)::before {
    background-image: url(./icons/scooter-logo.svg);
  }
  .stage__list-item:nth-child(3)::before {
    background-image: url(./icons/rider-logo.svg);
  }
  .stage__list-item::before {
    content: "";
    position: absolute;
    top: 120%;
    left: -160px;
    width: 96px;
    height: 96px;
    background-repeat: no-repeat;
    background-position: center;
    background-color: #FCB72B;
    border-radius: 50%;
  }
  .stage__item-heading {
    margin-top: 136px;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: -1.07143px;
    color: #495567;
    margin-bottom: 27px;
  }
  .stage__item-txt {
    font-size: 15px;
    line-height: 25px;
    color: #939CAA;
  }
}

@media only screen and (max-width: 515px) {
  .stage {
    padding-bottom: 100px;
    margin-top: 120px;
  }
  .stage__list {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-align: end;
        -ms-flex-align: end;
            align-items: flex-end;
    width: 100%;
    padding: 0 32px;
    gap: 100px;
  }
  .stage__list::before {
    content: "";
    display: none;
  }
  .stage__list-item {
    position: relative;
    max-width: 350px;
    width: 100%;
    height: 100%;
  }
  .stage__list-item:first-child::before {
    background-image: url(./icons/phone-mob-logo.svg);
  }
  .stage__list-item:first-child::after {
    display: none;
  }
  .stage__list-item:nth-child(2)::before {
    background-image: url(./icons/scooter-mob-logo.svg);
  }
  .stage__list-item:nth-child(3)::before {
    background-image: url(./icons/rider-mob-logo.svg);
  }
  .stage__list-item::before {
    content: "";
    position: absolute;
    top: 0;
    left: calc(50% - 28px);
    width: 56px;
    height: 56px;
    background-repeat: no-repeat;
    background-position: center;
    background-color: #FCB72B;
    border-radius: 50%;
  }
  .stage__item-heading {
    text-align: center;
    padding: 0;
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: -1.07143px;
    color: #495567;
    margin: 0;
    padding-top: 80px;
    margin-bottom: 24px;
  }
  .stage__item-txt {
    text-align: center;
    font-size: 15px;
    line-height: 25px;
    color: #939CAA;
  }
}

</style>

