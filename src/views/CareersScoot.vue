<script>
export default {};
</script>

<template>
	<section class="ahero">
		<div class="ahero__container container">
			<div class="ahero__inner-wrap">
				<h2 class="ahero__heading">Careers</h2>
			</div>
		</div>
	</section>

	<section class="about">
		<div class="about__container container">
			<div class="about__inner-wrap">
				<ul class="about__list">
					<li class="about__list-item">
						<div class="about__inner-list">
							<h3 class="about__list-heading">Care to join our mission?</h3>

							<p class="about__list-txt">We're always looking for ambitious individuals to help us on our journey. If you're passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!</p>

							<button class="cereers__btn btn" style="margin-top: 20px">Say Hello</button>
						</div>

						<div class="about__inner-item-img-wrap">
							<img class="about__img" src="../components/icons/careers-img1.png" alt="" />
						</div>
					</li>
				</ul>
			</div>
		</div>
	</section>

	<section class="value">
		<div class="value__container container">
			<div class="value__inner-wrap">
				<h2 class="value__heading">Why join us?</h2>

				<ul class="value__list">
					<li class="value__list-item">
						<div class="value__img-wrapper">
							<img src="../components/icons/value-img1.png" alt="man holding a phone" />
							<span class="value__num">01</span>
						</div>

						<h3 class="value__item-heading">Our tech</h3>

						<p class="value__item-txt">We're using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!</p>
					</li>

					<li class="value__list-item">
						<div class="value__img-wrapper">
							<img src="../components/icons/value-img2.png" alt="man holding a phone" />
							<span class="value__num">02</span>
						</div>

						<h3 class="value__item-heading">Our integrity</h3>

						<p class="value__item-txt">We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.</p>
					</li>

					<li class="value__list-item">
						<div class="value__img-wrapper">
							<img src="../components/icons/value-img3.png" alt="man holding a phone" />
							<span class="value__num">03</span>
						</div>

						<h3 class="value__item-heading">Our community</h3>

						<p class="value__item-txt">We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.</p>
					</li>
				</ul>
			</div>
		</div>
	</section>

	<section class="careers">
		<div class="careers__container container">
			<div class="careers__inner-wrap">
				<ul class="careers__list">
					<li class="careers__list-item">
						<div class="careers__list-inner">
							<div class="careers__item-left">
								<h3 class="careers__item-heading">UI/UX Designer</h3>
								<p class="careers__item-txt">Yokohama, Japan</p>
							</div>
							<button class="careers__apply-btn">Apply</button>
						</div>
					</li>
					<li class="careers__list-item">
						<div class="careers__list-inner">
							<div class="careers__item-left">
								<h3 class="careers__item-heading">Blog Content Copywriter</h3>
								<p class="careers__item-txt">New York, United States</p>
							</div>
							<button class="careers__apply-btn">Apply</button>
						</div>
					</li>
					<li class="careers__list-item">
						<div class="careers__list-inner">
							<div class="careers__item-left">
								<h3 class="careers__item-heading">Graphic Designer</h3>
								<p class="careers__item-txt">New York, United States</p>
							</div>
							<button class="careers__apply-btn">Apply</button>
						</div>
					</li>
					<li class="careers__list-item">
						<div class="careers__list-inner">
							<div class="careers__item-left">
								<h3 class="careers__item-heading">Fleet Supervisor</h3>
								<p class="careers__item-txt">Jakarta, Indonesia</p>
							</div>
							<button class="careers__apply-btn">Apply</button>
						</div>
					</li>
					<li class="careers__list-item">
						<div class="careers__list-inner">
							<div class="careers__item-left">
								<h3 class="careers__item-heading">UX Analyst</h3>
								<p class="careers__item-txt">London, United Kingdom</p>
							</div>
							<button class="careers__apply-btn">Apply</button>
						</div>
					</li>
					<li class="careers__list-item">
						<div class="careers__list-inner">
							<div class="careers__item-left">
								<h3 class="careers__item-heading">General Manager</h3>
								<p class="careers__item-txt">Jakarta, Indonesia</p>
							</div>
							<button class="careers__apply-btn">Apply</button>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</section>
</template>

<style>
.careers {
	margin-top: 120px;
}

.careers__list {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-ms-flex-direction: column;
	flex-direction: column;
	gap: 24px;
	width: 100%;
}

.careers__list-item {
	width: 100%;
}

.careers__list-inner {
	padding: 32px 64px 35px 40px;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: justify;
	-ms-flex-pack: justify;
	justify-content: space-between;
	width: 100%;
	background-color: #f2f5f9;
}

.careers__item-heading {
	margin-bottom: 8px;
	font-size: 24px;
	line-height: 28px;
	letter-spacing: -1.07143px;
	color: #495567;
}

.careers__item-txt {
	font-size: 15px;
	line-height: 25px;
	color: #495567;
}

.careers__apply-btn {
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
	-webkit-transition: all 0.4s ease;
	transition: all 0.4s ease;
	border: 2px solid #fcb72b;
}

.careers__apply-btn:hover {
	color: #fcb72b;
	background-color: #ffffff;
}

.careers__apply-btn:active {
	-webkit-transform: scale(0.9);
	transform: scale(0.9);
	color: #fcb72b;
	background-color: #ffffff;
}

@media only screen and (max-width: 650px) {
	.careers {
		margin-top: 120px;
	}
	.careers__list {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-ms-flex-direction: column;
		flex-direction: column;
		gap: 24px;
		width: 100%;
	}
	.careers__list-item {
		width: 100%;
	}
	.careers__list-inner {
		padding: 36px 0 32px 0;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-ms-flex-direction: column;
		flex-direction: column;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		width: 100%;
		background-color: #f2f5f9;
	}
	.careers__item-heading {
		margin-bottom: 4px;
		font-size: 18px;
		line-height: 24px;
		letter-spacing: -1.07143px;
		color: #495567;
		text-align: center;
	}
	.careers__item-txt {
		text-align: center;
		margin-bottom: 16px;
		font-size: 15px;
		line-height: 25px;
		color: #495567;
	}
	.careers__apply-btn {
		background: none;
		border: none;
		outline: none;
		font-family: "Space Mono";
		font-weight: 700;
		font-size: 15px;
		line-height: 25px;
		text-align: center;
		color: #ffffff;
		max-width: 250px;
		width: 100%;
		padding: 14px 0;
		background-color: #fcb72b;
		-webkit-transition: all 0.4s ease;
		transition: all 0.4s ease;
		border: 2px solid #fcb72b;
	}
	.careers__apply-btn:hover {
		color: #fcb72b;
		background-color: #ffffff;
	}
	.careers__apply-btn:active {
		-webkit-transform: scale(0.9);
		transform: scale(0.9);
		color: #fcb72b;
		background-color: #ffffff;
	}
}

.about {
	overflow-x: hidden;
	margin-top: 120px;
}

.about__list-heading {
	margin-bottom: 24px;
	font-size: 48px;
	line-height: 48px;
	letter-spacing: -2.14286px;
	color: #495567;
}

.about__list-txt {
	font-size: 15px;
	line-height: 25px;
	color: #939caa;
	margin: 0;
}

.about__img {
	width: 445px;
	height: 445px;
	border-radius: 50%;
}

.about__list {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-ms-flex-direction: column;
	flex-direction: column;
	gap: 220px;
}

.about__list-item {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: justify;
	-ms-flex-pack: justify;
	justify-content: space-between;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
}

.about__list-item:nth-child(odd) .about__inner-item-img-wrap::before {
	content: "";
	position: absolute;
	bottom: 5%;
	left: -30%;
	width: 740px;
	height: 150px;
	background-image: url(../components/icons/about-arrow1.svg);
	background-repeat: no-repeat;
	z-index: 5;
}

.about__list-item:nth-child(odd) .about__inner-item-img-wrap::after {
	content: "";
	position: absolute;
	right: calc(-100% - 65px);
	width: 445px;
	height: 445px;
	border-radius: 50%;
	background: #e5ecf4;
}

.about__list-item:nth-child(even) .about__inner-item-img-wrap {
	-webkit-box-ordinal-group: 0;
	-ms-flex-order: -1;
	order: -1;
}

.about__list-item:nth-child(even) .about__inner-item-img-wrap::before {
	content: "";
	position: absolute;
	top: 0;
	left: -40%;
	max-width: 740px;
	width: 100%;
	height: 150px;
	background-image: url(../components/icons/nth-back.svg);
	background-repeat: no-repeat;
}

.about__list-item:nth-child(even) .about__inner-item-img-wrap::after {
	content: "";
	position: absolute;
	left: calc(-100% - 65px);
	width: 445px;
	height: 445px;
	border-radius: 50%;
	background: #e5ecf4;
	z-index: -1;
}

.about__inner-list {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-ms-flex-direction: column;
	flex-direction: column;
	max-width: 445px;
}

.about__btn {
	width: 200px;
}

.about__inner-item-img-wrap {
	position: relative;
}

@media only screen and (max-width: 850px) {
	.about {
		overflow-x: hidden;
		margin-top: 120px;
	}
	.about__list-heading {
		margin-top: 56px;
		text-align: center;
		margin-bottom: 40px;
		font-size: 48px;
		line-height: 48px;
		letter-spacing: -2.14286px;
		color: #495567;
	}
	.about__list-txt {
		text-align: center;
		font-size: 15px;
		line-height: 25px;
		color: #939caa;
		margin: 0;
	}
	.about__img {
		width: 445px;
		height: 445px;
		border-radius: 50%;
	}
	.about__list {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-ms-flex-direction: column;
		flex-direction: column;
		gap: 220px;
	}
	.about__list-item {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: justify;
		-ms-flex-pack: justify;
		justify-content: space-between;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-ms-flex-direction: column;
		flex-direction: column;
	}
	.about__list-item:nth-child(odd) .about__inner-item-img-wrap {
		-webkit-box-ordinal-group: 0;
		-ms-flex-order: -1;
		order: -1;
	}
	.about__list-item:nth-child(odd) .about__inner-item-img-wrap::before {
		content: "";
		position: absolute;
		bottom: 5%;
		left: -30%;
		width: 740px;
		height: 150px;
		background-image: url(../components/icons/about-arrow1.svg);
		background-repeat: no-repeat;
		z-index: 5;
	}
	.about__list-item:nth-child(odd) .about__inner-item-img-wrap::after {
		content: "";
		position: absolute;
		right: calc(-100% - 65px);
		width: 445px;
		height: 445px;
		border-radius: 50%;
		background: #e5ecf4;
	}
	.about__list-item:nth-child(even) .about__inner-item-img-wrap {
		-webkit-box-ordinal-group: 0;
		-ms-flex-order: -1;
		order: -1;
	}
	.about__list-item:nth-child(even) .about__inner-item-img-wrap::before {
		content: "";
		position: absolute;
		top: 0;
		left: -40%;
		max-width: 740px;
		width: 100%;
		height: 150px;
		background-image: url(../components/icons/nth-back.svg);
		background-repeat: no-repeat;
	}
	.about__list-item:nth-child(even) .about__inner-item-img-wrap::after {
		content: "";
		position: absolute;
		left: calc(-100% - 65px);
		width: 445px;
		height: 445px;
		border-radius: 50%;
		background: #e5ecf4;
		z-index: -1;
	}
	.about__inner-list {
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
	.about__btn {
		width: 200px;
	}
	.about__inner-item-img-wrap {
		position: relative;
	}
}

@media only screen and (max-width: 500px) {
	.about__list {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-ms-flex-direction: column;
		flex-direction: column;
		gap: 120px;
	}
	.about__list-heading {
		margin-bottom: 32px;
		font-size: 32px;
		line-height: 32px;
		letter-spacing: -2.14286px;
		color: #495567;
	}
	.about__img {
		width: 311px;
		height: 311px;
		border-radius: 50%;
	}
	.about__list-item {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: justify;
		-ms-flex-pack: justify;
		justify-content: space-between;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
	}
	.about__list-item:nth-child(odd) .about__inner-item-img-wrap::before {
		content: "";
		position: absolute;
		bottom: 5%;
		left: 0;
		width: 740px;
		height: 150px;
		background-image: url(../components/icons/about-arrow1.svg);
		background-repeat: no-repeat;
		z-index: 5;
	}
	.about__list-item:nth-child(odd) .about__inner-item-img-wrap::after {
		display: none;
	}
	.about__list-item:nth-child(even) .about__inner-item-img-wrap {
		-webkit-box-ordinal-group: 0;
		-ms-flex-order: -1;
		order: -1;
	}
	.about__list-item:nth-child(even) .about__inner-item-img-wrap::before {
		content: "";
		position: absolute;
		top: 0;
		left: -20%;
		width: 740px;
		height: 150px;
		background-image: url(../components/icons/nth-back.svg);
		background-repeat: no-repeat;
	}
	.about__list-item:nth-child(even) .about__inner-item-img-wrap::after {
		display: none;
	}
}

.value {
	margin-top: 120px;
}

.value__heading {
	margin-bottom: 50px;
	font-size: 48px;
	line-height: 48px;
	text-align: center;
	letter-spacing: -2.14286px;
	color: #495567;
}

.value__list {
	width: 100%;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-box-pack: justify;
	-ms-flex-pack: justify;
	justify-content: space-between;
	-ms-flex-wrap: wrap;
	flex-wrap: wrap;
}

.value__list-item {
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
	max-width: 350px;
	width: 100%;
}

.value__img-wrapper {
	position: relative;
	width: 350px;
	height: 350px;
}

.value__num {
	position: absolute;
	bottom: 0;
	right: calc(50% - 48px);
	font-family: "Space Mono";
	font-style: normal;
	font-weight: 700;
	font-size: 24px;
	line-height: 28px;
	text-align: center;
	letter-spacing: -1.07143px;
	color: #495567;
	width: 96px;
	height: 96px;
	border-radius: 50%;
	background-color: #fcb72b;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
}

.value__item-heading {
	margin-top: 32px;
	margin-bottom: 27px;
	font-size: 24px;
	line-height: 28px;
	text-align: center;
	letter-spacing: -1.07143px;
	color: #495567;
	padding: 0;
}

.value__item-txt {
	font-size: 15px;
	line-height: 25px;
	text-align: center;
	color: #939caa;
}

@media only screen and (max-width: 740px) {
	.value__heading {
		font-size: 32px;
		line-height: 32px;
	}
	.value__list {
		width: 100%;
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
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
	}
}
</style>
