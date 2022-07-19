<script>
export default {}
</script>

<template>
    <section class="download">
			<div class="download__container container">
				<div class="download__inner-wrap">
					<h2 class="visually-hidden">Dowload our app for comfort</h2>

					<h3 class="download__heading">Sign up and Scoot off today</h3>

					<ul class="download__right">
						<li class="download__list-item">
							<a class="download__link" href="#!">
								<img src="./icons/apple.svg" alt="logo">
								<div class="download__item-data">
									<h4 class="download__item-txt">Available on the</h4>
									<h4 class="download__item-heading">AppStore</h4>
								</div>
							</a>
						</li>

						<li class="download__list-item">
							<a class="download__link" href="#!">
								<img src="./icons/play-market.svg" alt="logo">
								<div class="download__item-data">
									<h4 class="download__item-txt">Get it on</h4>
									<h4 class="download__item-heading">GooglePlay</h4>
								</div>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</section>
</template>

<style>
.download {
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    height: 300px;
    background: #495567;
    background-image: url(./icons/circles.svg);
    background-repeat: no-repeat;
    background-position: right;
    background-position-y: bottom;
}
    
    
    .download__container {
        margin-top: 100px;
    }
    
    .download__inner-wrap {
        
        padding-top: 102px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    .download__heading {
        max-width: 415px;
        width: 100%;
        font-size: 48px;
        line-height: 48px;
        letter-spacing: -2.14286px;
        color: #FFFFFF;
    }
    
    .download__right {
        display: flex;
        align-items: center;
        gap: 18px;
    }
    
    .download__link {
        display: flex;
        text-decoration: none;
        align-items: center;
        justify-content: space-between;
        width: 159px;
        height: 56px;
        background: #E5ECF4;
        border-radius: 4px;
        transition: all 0.5s ease;
    }
        
    .download__link img {
        padding-left: 15px;
    }
    
    .download__link:hover {
        opacity: 0.7;
    }
    
    .download__link:active {
            opacity: 0.5;
        }
    
    .download__list-item {
        display: flex;
        align-items: center;
    }
    
    .download__item-data {
        padding-right: 15px;
    }
    
    .download__item-txt {
        font-size: 10px;
        line-height: 15px;
        letter-spacing: -0.446429px;
        color: #495567;
    }
    
    .download__item-heading {
        font-size: 20px;
        line-height: 24px;
        letter-spacing: -0.892857px;
        color: #495567;
    }

@media only screen and (max-width: 800px) {
    .download {
        max-width: 1440px;
        width: 100%;
        margin: 0 auto;
        height: 300px;
        background: #495567;
        background-image: url(/images/circles.svg);
        background-repeat: no-repeat;
        background-position: right,;
        background-position-y: bottom;
    }
        
        

       .download__inner-wrap {
            padding-top: 62px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
        }
        
       .download__heading {
            margin-bottom: 40px;
            text-align: center;
            max-width: 415px;
            width: 100%;
            font-size: 48px;
            line-height: 48px;
            letter-spacing: -2.14286px;
            color: #FFFFFF;
        }
    
}

@media only screen and (max-width: 500px) {

    .download__heading {
        font-size: 32px;
        line-height: 32px;
    }

    
    .download__item-txt {
        font-size: 8px;
        line-height: 12px;
        letter-spacing: -0.446429px;
        color: #495567;
    }
    
    .download__item-heading {
        font-size: 15px;
        line-height: 18px;
        letter-spacing: -0.892857px;
        color: #495567;
    }
}
    
</style>