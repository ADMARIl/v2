/*
    Sync the header and footer so everything looks n i c e
*/

$(() => {
    /*$("div#nest1").load(function() {
        $('.preloader').fadeOut('slow');
        console.log("fade out!");
     });*/
    /* Load the header */
    $("div#header").load("components/header.html", () => {
        /* Once it's loaded, fade it smoothly in */
       // enableScrollFeature()
        console.log( "header ready!" );
    })
    /* Load the footer */
    $("div#footer").load("components/footer.html", () => {
        /* Once it's loaded, fade it smoothly in */
        //enableScrollFeature()
        console.log( "footer ready!" );
    })

   
})
