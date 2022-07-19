<script>
export default {};
</script>

<template>
	<footer class="footer">
		<div class="footer__container container">
			<div class="footer__inner-wrap">
				<a class="footer__logo" href="./index.html"><img src="./icons/footer-logo.svg" alt="" /></a>

				<div class="footer__right">
					<nav class="footer__nav">
						<ul class="footer__nav-list">
							<li><a class="footer__link" href="/about.html">About</a></li>
							<li><a class="footer__link" href="/locations.html">Location</a></li>
							<li><a class="footer__link" href="/careers.html">Careers</a></li>
						</ul>
					</nav>

					<div class="footer__soc-media">
						<a href="../views/HomeView.vue"><img class="footer__img-link" src="./icons/faceb.svg" alt="logo" /></a>
						<a href="#!"><img class="footer__img-link" src="./icons/twitt.svg" alt="logo" /></a>
						<a href="#!"><img class="footer__img-link" src="./icons/inst.svg" alt="logo" /></a>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<style>
.footer {
	max-width: 1440px;
	width: 100%;
	height: 96px;
	margin: 0 auto;
	background-color: #333a44;
}

.footer__inner-wrap {
	padding-top: 35px;
	display: flex;
	align-items: center;
}

.footer__right {
	display: flex;
	align-items: center;
	margin-left: 58px;
	justify-content: space-between;
	width: 100%;
}

.footer__nav-list {
	display: flex;
	align-items: center;
	gap: 32px;
}

.footer__link {
	font-family: "Space Mono";
	text-decoration: none;
	font-weight: 700;
	font-size: 15px;
	line-height: 25px;
	color: dimgrey;
	transition: all 0.4s ease;
}

.footer__link:hover {
	color: yellow;
}

.footer__link:active {
	color: yellow;
	opacity: 0.5;
}
.footer__soc-media {
	display: flex;
	align-items: center;
	gap: 24px;
}
.footer__img-link {
	transition: all 0.5s ease;
}

.footer__img-link:hover {
	opacity: 0.1;
}

.footer__img-link:active {
	opacity: 0.5;
}

@media only screen and (max-width: 570px) {
	.footer {
		max-width: 1440px;
		width: 100%;
		height: 440px;
		margin: 0 auto;
		background-color: #333a44;
	}

	.footer__logo {
		padding: 0;
	}

	.footer__inner-wrap {
		padding-top: 64px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.footer__right {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		margin: 0;
	}

	.footer__nav {
		margin-top: 40px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.footer__nav-list {
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 16px;
		margin: 0;
		padding: 0;
		margin-bottom: 30px;
	}
}
</style>
