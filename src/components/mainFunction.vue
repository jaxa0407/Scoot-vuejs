<script>
   export default {}
</script>

<template>
   <section class="function">	
		<h2 class="visually-hidden">Advantages of renting or buying our scooters</h2>
		<div class="function__container container">
			<div class="function__inner-wrap">
				<div class="function__top">
					<ul class="function__top-list">  
						<li class="function__top-list-item-left">
							<h3 class="function__list-heading">Easy to use riding telemetry</h3>
								
							<p class="function__list-txt">The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app.</p>
								
							<button class="function__btn btn">Learn More</button>
						</li>
							
						<li class="function__top-list-item-right">
							<div class="function__img-wrapper">
								<img class="function__img" src="./icons/pict.webp" alt="Woman illustrates how easy is to use scooter app">
							</div>
						</li>
					</ul>
				</div>
					
					<ul class="function__list">
					<li class="function__list-item">
						<div class="function__inner-list">
							<h3 class="function__list-heading">Coming to a city near you</h3>
							
							<p class="function__list-txt">Scoot is available in 4 major cities so far. We're expanding rapidly, so be sure to let us know if you want to see us in your hometown. We're aiming to let our scooters loose on 23 cities over the coming year.</p>
							
							<button class="function__btn btn">Learn More</button>
						</div>
						<div class="function__inner-item-img-wrap">
							<img class="function__img" src="./icons/Bitmap.jpg" alt="">
						</div>
						
					</li>

					<li class="function__list-item">
						<div class="function__inner-list">
							
							<h3 class="function__list-heading">Zero hassle payments</h3>
							
							<p class="function__list-txt">Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month.</p>
							
							<button class="function__btn btn">Learn More</button>
						</div>
						
						<div class="function__inner-item-img-wrap">
							<img class="function__img" src="./icons/payment-img.jpg" alt="">
						</div>
							
					</li>
				</ul>
			</div>
		</div>
	</section> 
</template>

<style>
    .function__top {
        margin-bottom: 200px;
    }
    
    .function__top-list {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    .function__top-list-item-left {
        max-width: 445px;
        width: 100%;
    }
    
    .function__list-heading {
        margin-bottom: 24px;
        font-size: 48px;
        line-height: 48px;
        letter-spacing: -2.14286px;
        color: #495567;
    }
    
    .function__list-txt {
        font-size: 15px;
        line-height: 25px;
        color: #939CAA;
        margin-bottom: 40px;
    }

    .function__img-wrapper {
        position: relative;
    }

    .function__img-wrapper::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: -30%;
        width: 740px;
        height: 150px;
        background-image: url(./icons/function-big-arrow.svg);
        background-repeat: no-repeat;
    }
        
    
    .function__img {
        width: 445px;
        height: 445px;
        border-radius: 50%;
    }
    
    .function__list {
        display: flex;
        flex-direction: column;
        gap: 220px;
        
        
    }
    
    .function__list-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .function__list-item:nth-child(odd) {
        flex-direction: row-reverse;
    }

    .function__inner-item-img-wrap::before {
        content: "";
        position: absolute;
        left: -35%;
        max-width: 740px;
        width: 100%;
        height: 150px;
        background-image: url(./icons/nth-back.svg);
        background-repeat: no-repeat;
        z-index: 5;
    }

    .function__inner-item-img-wrap::after {
        content: "";
        position: absolute;
        left: calc(-100% - 65px);
        width: 445px;
        height: 445px;
        border-radius: 50%;
        background: #E5ECF4;
        z-index: -1;
    }
    
    .function__list-item:nth-child(even) .function__inner-item-img-wrap::before {
       content: "";
       position: absolute;
       top: 15%;
       right: -60%;
       max-width: 740px;
       width: 100%;
       height: 150px;
       background-image: url(./icons/function-big-arrow.svg);
       background-repeat: no-repeat;
    }
    
    .function__list-item:nth-child(odd) .function__inner-item-img-wrap::after {
        content: "";
        position: absolute;
        left: calc(-100% - 65px);
        width: 445px;
        height: 445px;
        border-radius: 50%;
        background: #E5ECF4;
  }
        
    
    .function__inner-list {
        display: flex;
        flex-direction: column;
        max-width: 445px;
    }
    
    .function__btn {
        width: 200px;
        cursor: pointer;
    }
    
    .function__inner-item-img-wrap {
        position: relative;
    }

@media only screen and (max-width: 950px) {
  .function__top {
    margin-bottom: 120px;
  }
  .function__top-list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
  }
  .function__top-list-item-left {
    -webkit-box-ordinal-group: 100;
        -ms-flex-order: 99;
            order: 99;
    max-width: 445px;
    width: 100%;
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
  }
  .function__list-heading {
    text-align: center;
    margin-bottom: 40px;
    font-size: 48px;
    line-height: 48px;
    letter-spacing: -2.14286px;
    color: #495567;
  }
  .function__list-txt {
    text-align: center;
    font-size: 15px;
    line-height: 25px;
    color: #939CAA;
    margin-bottom: 40px;
  }
  .function__img-wrapper {
    position: relative;
  }
  .function__img-wrapper::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: -30%;
    width: 740px;
    height: 150px;
    background-image: url(./icons/function-big-arrow.svg);
    background-repeat: no-repeat;
  }
  .function__img {
    width: 445px;
    height: 445px;
    border-radius: 50%;
  }
  .function__list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    gap: 220px;
  }
  .function__list-item {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    gap: 20px;
  }
  .function__list-item:nth-child(odd) {
    -webkit-box-orient: vertical;
    -webkit-box-direction: reverse;
        -ms-flex-direction: column-reverse;
            flex-direction: column-reverse;
  }
  .function__list-item:nth-child(odd) .function__inner-item-img-wrap {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: reverse;
        -ms-flex-direction: column-reverse;
            flex-direction: column-reverse;
  }
  .function__list-item:nth-child(odd) .function__inner-item-img-wrap::before {
    content: "";
    position: absolute;
    top: 0;
    left: -35%;
    max-width: 740px;
    width: 100%;
    height: 150px;
    background-image: url(./icons/nth-back.svg);
    background-repeat: no-repeat;
    z-index: 5;
  }
  .function__list-item:nth-child(odd) .function__inner-item-img-wrap::after {
    content: "";
    position: absolute;
    left: calc(-100% - 65px);
    width: 445px;
    height: 445px;
    border-radius: 50%;
    background: #E5ECF4;
  }
  .function__list-item:nth-child(even) {
    -webkit-box-orient: vertical;
    -webkit-box-direction: reverse;
        -ms-flex-direction: column-reverse;
            flex-direction: column-reverse;
  }
  .function__list-item:nth-child(even) .function__inner-item-img-wrap::before {
    content: "";
    position: absolute;
    top: 15%;
    right: -60%;
    max-width: 740px;
    width: 100%;
    height: 150px;
    background-image: url(./icons/function-big-arrow.svg);
    background-repeat: no-repeat;
  }
  .function__list-item:nth-child(even) .function__inner-item-img-wrap::after {
    content: "";
    position: absolute;
    right: calc(-100% - 65px);
    width: 445px;
    height: 445px;
    border-radius: 50%;
    background: #E5ECF4;
    z-index: -1;
  }
  .function__inner-list {
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
    max-width: 445px;
  }
  .function__btn {
    width: 200px;
  }
  .function__inner-item-img-wrap {
    position: relative;
  }
}

@media only screen and (max-width: 500px) {
  .function__top {
    margin-bottom: 90px;
  }
  .function__top-list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
  }
  .function__top-list-item-left {
    -webkit-box-ordinal-group: 100;
        -ms-flex-order: 99;
            order: 99;
    max-width: 445px;
    width: 100%;
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
  }
  .function__list-heading {
    text-align: center;
    margin-bottom: 40px;
    font-size: 32px;
    line-height: 32px;
    letter-spacing: -2.14286px;
    color: #495567;
  }
  .function__list-txt {
    text-align: center;
    font-size: 15px;
    line-height: 25px;
    color: #939CAA;
    margin-bottom: 40px;
  }
  .function__img-wrapper {
    position: relative;
  }
  .function__img-wrapper::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 740px;
    height: 150px;
    background-image: url(./icons/function-big-arrow.svg);
    background-repeat: no-repeat;
    background-position: right;
  }
  .function__img {
    width: 311px;
    height: 311px;
    border-radius: 50%;
    margin-bottom: 50px;
  }
  .function__list {
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
    gap: 120px;
    padding: 0 32px;
  }
  .function__list-item {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    padding: 0 32px;
  }
  .function__list-item:nth-child(odd) {
    -webkit-box-orient: vertical;
    -webkit-box-direction: reverse;
        -ms-flex-direction: column-reverse;
            flex-direction: column-reverse;
  }
  .function__list-item:nth-child(odd) .function__inner-item-img-wrap {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: reverse;
        -ms-flex-direction: column-reverse;
            flex-direction: column-reverse;
  }
  .function__list-item:nth-child(odd) .function__inner-item-img-wrap::before {
    content: "";
    position: absolute;
    top: 0;
    left: -65%;
    width: 740px;
    height: 150px;
    background-image: url(./icons/nth-back.svg);
    background-repeat: no-repeat;
    z-index: 5;
  }
  .function__list-item:nth-child(odd) .function__inner-item-img-wrap::after {
    content: "";
    position: absolute;
    left: calc(-100% - 65px);
    width: 311px;
    height: 311px;
    border-radius: 50%;
    background: #E5ECF4;
  }
  .function__list-item:nth-child(even) {
    -webkit-box-orient: vertical;
    -webkit-box-direction: reverse;
        -ms-flex-direction: column-reverse;
            flex-direction: column-reverse;
  }
  .function__list-item:nth-child(even) .function__inner-item-img-wrap::before {
    content: "";
    position: absolute;
    top: 15%;
    right: -60%;
    max-width: 740px;
    width: 100%;
    height: 150px;
    background-image: url(./icons/function-big-arrow.svg);
    background-repeat: no-repeat;
  }
  .function__list-item:nth-child(even) .function__inner-item-img-wrap::after {
    content: "";
    position: absolute;
    right: calc(-100% - 65px);
    width: 311px;
    height: 311px;
    border-radius: 50%;
    background: #E5ECF4;
    z-index: -1;
  }
  .function__inner-list {
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
    max-width: 445px;
    padding: 0 32px;
  }
  .function__btn {
    width: 200px;
  }
  .function__inner-item-img-wrap {
    position: relative;
  }
}

</style>