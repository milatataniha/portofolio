//event pada saat link ini di klik
$(".page-scroll").click(function(e){

	//ambilll isi href
	if(this.hash!=="") {

	e.preventDefault();//untuk mematikan link

	//ambil nilai dari link
	var hash = this.hash;

	//animasi scroll
	$("html, body").animate({
		scrollTop: $(hash).offset().top
	}, 1000, "swing", function() {
		window.location.hash=hash;

	})
	
}

});