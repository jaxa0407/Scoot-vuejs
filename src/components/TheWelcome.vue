<script setup>
</script>

<template>
  <header class="header">
		<div class="header__container container">
			<div class="header__inner-wrap">
				<div class="header__img-wrap">
					<a href="#!"><img class="header__img" src="./icons/scoot_logo.svg" alt="logo"></a>
				</div>
				
				<div class="header__mob-bacg">
					<div class="header__right">
						<nav class="header__nav-bar">
							<ul class="header__list">
								<!-- <li><a class="header__link" href="#!">About</a></li> -->
								<li><router-link to="/careers">Careers</router-link></li>
								<li><a class="header__link" href="#!">Location</a></li>
								<li><a class="header__link" href="#!">Careers</a></li>
							</ul>
						</nav>
					</div>
				</div>
                <button class="header__btn btn">Get Scootin</button>

				<button class="header__menu-btn">
					<img class="header__burger" src="./icons/burger.svg" alt="burger">
					<img class="header__cross" src="./icons/cross.svg" alt="cross">
				</button>
			</div>
		</div>
	</header>
</template>

<style scoped>

  .container {
    max-width: 1150px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 20px;
    padding-right: 20px;
  }

  .header {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    background-color: #FFFFFF;
    z-index: 999999999999;
    margin: 0 auto
  }
    

    .header__inner-wrap {
        background-color: #FFFFFF;
        height: 96px;
        display: flex;
        align-items: center;
        
    }
    
    .header__img-wrap {
        transition: all 0.4s ease;
        
    }
    .header__img-wrap:hover {
            transform: scale(1.1);
    }
        
    .header__img-wrap:active {
        transform: scale(0.9);
    }

    .header__mob-bacg {
        width: 100%;
    }
    
    .header__right {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-left: 60px;
        flex-shrink: 1;
    }
    
    .header__list {
        display: flex;
        gap: 32px;
        list-style-type: none;
    }
    
    .header__link {
        font-family: 'Space Mono';
        text-decoration: none;
        font-weight: 700;
        font-size: 15px;
        line-height: 25px;
        color: dimgrey;
        transition: all 0.3s ease;
    }
    
    .header__link:hover {
            color: yellow;
            background: none;
        }
        
    .header__link:active {
        color: yellow;
        opacity: 0.5;
        background: none;
    }
    
    .header__btn {
        cursor: pointer;
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
        transition: all 0.4s ease;
        
        
    }
    .header__btn:hover {
      color: yellow;
      background-color: #FFFFFF;
      border: 2px solid yellow;
    }
        
    .header__btn:active {
      transform: scale(0.9);
      color: yellow;
      background-color: #FFFFFF;
      border: 2px solid yellow;
    }
    
    .header__menu-btn {
        border: none;
        outline: none;
        background: none;
        display: flex;
        align-items: center;
        display: none;
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

    @media only screen and (max-width: 700px) {
    body {
        padding: 0;
        padding-top: 64px;
    }
    .header__container {
        position: relative;
    }
    
    .header__inner-wrap {
        background-color: #FFFFFF;
        height: 64px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    
    .header__img-wrap {
        width: 75px;
        height: 20px;
        transition: all 0.4s ease;
        
    }
    .header__img-wrap:hover {
            transform: scale(1.1);
    }
    
    .header__img-wrap:active {
        transform: scale(0.9);
    }
    .header__img {
        width: 75px;
        height: 20px;
    }
    .header__mob-bacg {
        position: absolute;
        top: 64px;
        width: 100%;
        height: calc(100vh - 100%);
        background: rgba(0, 0, 0, 0.075);
        transform: translateX(-200%);
        transition: all 1s ease;
    }
    
    .header__right {
        flex-direction: column;
        margin: 0;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        position: absolute;
        left: 0;
        width: 260px;
        height: 100%;
        top: 0;
        background-color: #333A44;
        transform: translateX(-200%);
        transition: all 1s ease;
    
    }
    
    .header__nav-bar {
        padding: 64px 0 0 32px;
    }
    
    .header__list {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }
    
    .header__btn {
        display: none;
    }
    
    
    .header__menu-btn {
        position: absolute;
        left: 32px;
        border: none;
        outline: none;
        background: none;
        display: flex;
        align-items: center;
    }
    
    .header__cross {
        display: none;
    }
    .active.header__mob-bacg {
    transform: translateX(0);
    transition: all 1s ease;
    z-index: 5;
    }

    .active.header__right {
        transform: translateX(0);
        display: flex;
        transition: all 1s ease;
        z-index: 9999999999;
    }
    
    .active.header__cross {
        display: inline-block;
    }
    
    .active.header__burger {
        display: none;
    }
        
    }
    
</style>