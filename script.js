div {
	font-size: 72px;
	color: white;
	background-color: black;
	border: 1px solid white;

}
#block1 {
	width: 60%;
	height: 200px;
	float: left;
}
#block2 {
	width: 35%;
	height: 600px;
	float: right;
}
#block3 {
	width: 60%;
	height: 400px;
	float: left;
}
@media screen and (max-width: 900px) {
	#block1, #block2, #block3 {
		width: 90%;
		float: none;
		margin: auto;
	}
}