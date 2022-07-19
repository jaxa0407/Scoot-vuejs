<script>
export default {};
</script>

<template>
	<section class="ahero">
		<div class="ahero__container container">
			<div class="ahero__inner-wrap">
				<h2 class="ahero__heading">Locations</h2>
			</div>
		</div>
	</section>

	<section class="location">
		<div class="location__container container">
			<img class="location__img" src="../components/icons/map.png" alt="map" />
			<img class="location__img-mob" src="../components/icons/map-mob.png" alt="map" />

			<div class="location__link-wrap">
				<a class="location__link" href="#!">New York</a>
				<a class="location__link" href="#!">London</a>
				<a class="location__link" href="#!">Jakarta</a>
				<a class="location__link" href="#!">Yokohama</a>
			</div>
		</div>
	</section>

	<section class="massage">
		<div class="massage__container container">
			<div class="massage__inner-wrap">
				<h3 class="massage__heading">Your City Not Listed?</h3>

				<p class="massage__txt">If you'd like to see Scoot in your hometown, be sure to let us know. We track requests and plan launches based on demand. Feel free to message us by clicking the link or messaging us on social.</p>

				<button class="massage__btn">Message Us</button>
			</div>
		</div>
	</section>
</template>

<style>
.ahero {
	position: relative;
	max-width: 1440px;
	width: 100%;
	height: 200px;
	margin: 0 auto;
	background-image: url(../components/icons/about-hero-bcg.png);
	background-position: center;
	background-repeat: no-repeat;
	overflow-x: hidden;
}

.ahero__container::after {
	content: "";
	position: absolute;
	top: calc(50% - 31px);
	right: -32px;
	background-image: url(../components/icons/about-circles.svg);
	width: 235px;
	height: 62px;
	background-repeat: no-repeat;
}

.ahero__heading {
	padding-top: 72px;
	font-size: 56px;
	line-height: 56px;
	letter-spacing: -2.5px;
	color: #ffffff;
}

@media only screen and (max-width: 500px) {
	.ahero__container::after {
		display: none;
	}
	.ahero__heading {
		text-align: center;
		font-size: 40px;
		line-height: 40px;
	}
}

.location {
	margin: 120px 0;
}

.location__img {
	max-width: 1110px;
	width: 100%;
}

.location__img-mob {
	display: none;
}

.location__link-wrap {
	display: none;
}

@media only screen and (max-width: 500px) {
	.location {
		margin: 120px 0;
	}
	.location__img {
		display: none;
	}
	.location__img-mob {
		display: inline-block;
		max-width: 400px;
		width: 100%;
	}
	.location__link-wrap {
		margin-top: 40px;
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
		gap: 16px;
	}
	.location__link {
		text-decoration: none;
		font-family: "Space Mono";
		font-style: normal;
		font-weight: 700;
		font-size: 24px;
		line-height: 28px;
		text-align: center;
		letter-spacing: -1.07143px;
		color: #495567;
		max-width: 315px;
		width: 100%;
		padding: 22px 0;
		background: rgba(252, 183, 43, 0.15);
	}
}

.massage {
	margin-bottom: 120px;
}

.massage__inner-wrap {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
}

.massage__heading {
	font-size: 48px;
	line-height: 100%;
	letter-spacing: -2.14286px;
	color: #495567;
}

.massage__txt {
	max-width: 445px;
	font-size: 15px;
	line-height: 167%;
	color: #939caa;
}

.massage__btn {
	margin-bottom: 25px;
	background: none;
	border: none;
	outline: none;
	font-family: "Space Mono";
	font-weight: 700;
	font-size: 15px;
	line-height: 25px;
	text-align: center;
	color: #ffffff;
	max-width: 180px;
	width: 100%;
	padding: 14px 0;
	background-color: #fcb72b;
	border: 2px solid #fcb72b;
	-webkit-transition: all 0.4s ease;
	transition: all 0.4s ease;
}

.massage__btn:hover {
	color: #fcb72b;
	background-color: #ffffff;
}

.massage__btn:active {
	-webkit-transform: scale(0.9);
	transform: scale(0.9);
	color: #fcb72b;
	background-color: #ffffff;
}

@media only screen and (max-width: 800px) {
	.massage {
		margin-bottom: 120px;
	}
	.massage__inner-wrap {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-ms-flex-direction: column;
		flex-direction: column;
	}
	.massage__heading {
		margin-bottom: 40px;
		text-align: center;
		font-size: 48px;
		line-height: 100%;
		letter-spacing: -2.14286px;
		color: #495567;
	}
	.massage__txt {
		margin-bottom: 40px;
		text-align: center;
		max-width: 445px;
		font-size: 15px;
		line-height: 167%;
		color: #939caa;
	}
}

@media only screen and (max-width: 500px) {
	.massage {
		margin-bottom: 120px;
	}
	.massage__inner-wrap {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-ms-flex-direction: column;
		flex-direction: column;
	}
	.massage__heading {
		margin-bottom: 40px;
		text-align: center;
		font-size: 32px;
		line-height: 100%;
		letter-spacing: -2.14286px;
		color: #495567;
	}
	.massage__txt {
		margin-bottom: 40px;
		text-align: center;
		max-width: 445px;
		font-size: 15px;
		line-height: 167%;
		color: #939caa;
	}
}
</style>
