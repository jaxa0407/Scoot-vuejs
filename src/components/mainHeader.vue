<script>
export default {
	mounted() {
		this.handleScroll;
		window.addEventListener("scroll", this.handleScroll);
	},
	data() {
		return {
			langdrop: false,
			headerMobile: false,
			isScrolled: false,
		};
	},
	methods: {
		handleScroll() {
			if (window.pageYOffset > 0) {
				this.isScrolled = true;
			} else {
				this.isScrolled = false;
			}
		},
	},
};
</script>

<template>
	<header class="header">
		<div class="header__container container">
			<div class="header__inner-wrap" :class="{ scrolled: isScrolled, active: headerMobile }">
				<div class="header__img-wrap">
					<router-link to="/home"><img class="header__img" src="./icons/scoot_logo.svg" alt="logo" /></router-link>
				</div>

				<div class="header__mob-bacg">
					<div class="header__right">
						<nav class="header__nav-bar">
							<ul class="header__list">
								<li>
									<router-link to="/home"><a class="header__link" href="#!">Home</a></router-link>
								</li>
								<li>
									<router-link to="/about"><a class="header__link" href="#!">About</a></router-link>
								</li>

								<li>
									<router-link to="/locations"><a class="header__link" href="#!">Locations</a></router-link>
								</li>

								<li>
									<router-link class="header__link" to="/careers" style="text-decoration: none"><a class="header__link" href="#!">Careers</a></router-link>
								</li>
							</ul>
						</nav>
					</div>
				</div>
				<button class="header__btn btn">Get Scootin</button>
				<button class="header__menu-btn" @click="headerMobile = !headerMobile">
					<img class="header__burger" src="./icons/burger.svg" alt="burger" />
					<img class="header__cross" src="./icons/cross.svg" alt="cross" />
				</button>
			</div>
		</div>
	</header>
</template>

<style>
.header {
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	background-color: #ffffff;
	z-index: 999999999999;
}

.header__inner-wrap {
	background-color: #ffffff;
	height: 96px;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
}

.header__img-wrap {
	-webkit-transition: all 0.4s ease;
	transition: all 0.4s ease;
}

.header__img-wrap:hover {
	-webkit-transform: scale(1.1);
	transform: scale(1.1);
}

.header__img-wrap:active {
	-webkit-transform: scale(0.9);
	transform: scale(0.9);
}

.header__mob-bacg {
	width: 100%;
}

.header__right {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: justify;
	-ms-flex-pack: justify;
	justify-content: space-between;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	margin-left: 60px;
	-ms-flex-negative: 1;
	flex-shrink: 1;
}

.header__list {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	gap: 32px;
}

.header__link {
	font-family: "Space Mono";
	text-decoration: none;
	font-weight: 700;
	font-size: 15px;
	line-height: 25px;
	color: #939caa;
	-webkit-transition: all 0.4s ease;
	transition: all 0.4s ease;
}

.header__link:hover {
	color: #fcb72b;
}

.header__link:active {
	color: #fcb72b;
	opacity: 0.5;
}

.header__btn {
	cursor: pointer;
	background: none;
	border: none;
	outline: none;
	font-family: "Space Mono";
	font-weight: 700;
	font-size: 15px;
	line-height: 25px;
	text-align: center;
	color: #ffffff;
	min-width: 180px;
	padding: 14px 0;
	background-color: #fcb72b;
	-webkit-transition: all 0.4s ease;
	transition: all 0.4s ease;
}

.header__btn:hover {
	color: #fcb72b;
	background-color: #ffffff;
	border: 2px solid #fcb72b;
}

.header__btn:active {
	-webkit-transform: scale(0.9);
	transform: scale(0.9);
	color: #fcb72b;
	background-color: #ffffff;
	border: 2px solid #fcb72b;
}

.header__menu-btn {
	border: none;
	outline: none;
	background: none;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	display: none;
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
		background-color: #ffffff;
		height: 64px;
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
	}
	.header__img-wrap {
		width: 75px;
		height: 20px;
		-webkit-transition: all 0.4s ease;
		transition: all 0.4s ease;
	}
	.header__img-wrap:hover {
		-webkit-transform: scale(1.1);
		transform: scale(1.1);
	}
	.header__img-wrap:active {
		-webkit-transform: scale(0.9);
		transform: scale(0.9);
	}
	.header__img {
		width: 75px;
		height: 20px;
	}

	.header__btn {
		display: none;
	}

	.header__mob-bacg {
		position: absolute;
		top: 64px;
		width: 100%;
		left: -20px;
		height: calc(100vh - 100%);
		background: rgba(0, 0, 0, 0.075);
		-webkit-transform: translateX(-200%);
		transform: translateX(-200%);
		-webkit-transition: all 1s ease;
		transition: all 1s ease;
	}
	.header__right {
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-ms-flex-direction: column;
		flex-direction: column;
		margin: 0;
		flex-direction: column;
		-webkit-box-align: start;
		-ms-flex-align: start;
		align-items: flex-start;
		-webkit-box-pack: justify;
		-ms-flex-pack: justify;
		justify-content: space-between;
		position: absolute;
		left: 0;
		width: 260px;
		height: 100%;
		top: 0;
		background-color: #333a44;
		-webkit-transform: translateX(-200%);
		transform: translateX(-200%);
		-webkit-transition: all 1s ease;
		transition: all 1s ease;
	}
	.header__nav-bar {
		padding: 64px 0 0 32px;
	}
	.header__list {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-ms-flex-direction: column;
		flex-direction: column;
		gap: 24px;
	}
	.header__link {
		font-family: "Space Mono";
		text-decoration: none;
		font-weight: 700;
		font-size: 15px;
		line-height: 25px;
		color: #939caa;
		-webkit-transition: all 0.4s ease;
		transition: all 0.4s ease;
	}
	.header__link:hover {
		color: #fcb72b;
	}
	.header__link:active {
		color: #fcb72b;
		opacity: 0.5;
	}
	.header__btn {
		margin-left: 32px;
		margin-bottom: 50px;
		background: none;
		border: none;
		outline: none;
		font-family: "Space Mono";
		font-weight: 700;
		font-size: 15px;
		line-height: 25px;
		text-align: center;
		color: #ffffff;
		min-width: 180px;
		padding: 14px 0;
		background-color: #fcb72b;
		border: 2px solid #fcb72b;
		-webkit-transition: all 0.4s ease;
		transition: all 0.4s ease;
	}
	.header__btn:hover {
		color: #fcb72b;
		background-color: #ffffff;
	}
	.header__btn:active {
		-webkit-transform: scale(0.9);
		transform: scale(0.9);
		color: #fcb72b;
		background-color: #ffffff;
	}
	.header__menu-btn {
		position: absolute;
		left: 32px;
		border: none;
		outline: none;
		background: none;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
	}
	.header__cross {
		display: none;
	}
	.active .header__mob-bacg {
		-webkit-transform: translateX(0);
		transform: translateX(0);
		-webkit-transition: all 1s ease;
		transition: all 1s ease;
		z-index: 5;
	}
	.active .header__right {
		-webkit-transform: translateX(0);
		transform: translateX(0);
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-transition: all 1s ease;
		transition: all 1s ease;
		z-index: 9999999999;
	}
	.active .header__cross {
		display: inline-block;
	}
	.active .header__burger {
		display: none;
	}
}

.btn {
	background: none;
	border: none;
	outline: none;
	font-family: "Space Mono";
	font-weight: 700;
	font-size: 15px;
	line-height: 25px;
	text-align: center;
	color: #ffffff;
	min-width: 180px;
	padding: 14px 0;
	background-color: #fcb72b;
	border: 2px solid #fcb72b;
	-webkit-transition: all 0.4s ease;
	transition: all 0.4s ease;
}

.btn:hover {
	color: #fcb72b;
	background-color: #ffffff;
}

.btn:active {
	-webkit-transform: scale(0.9);
	transform: scale(0.9);
	color: #fcb72b;
	background-color: #ffffff;
}
</style>
