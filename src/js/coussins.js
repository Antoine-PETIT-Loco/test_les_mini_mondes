$(function() {
    console.log("initialisation !")
    // indique le nombre de coussin présent sur l'image
    var nbrCoussin = 1;
    change()
    /*
      Fonction permettant de changer la couleur de fond ainsi que l'affichage des boutons
     */
    function change() {
        if (nbrCoussin == 10){
            $("#btnAdd").hide();
        }else if (nbrCoussin == 1){
            $("#btnDelete").hide();
        }else {
            $("#btnAdd").show();
            $("#btnDelete").show();
        }
        if (nbrCoussin % 2 == 0){
            $("body").css('background-color', 'pink');
        }else {
            $("body").css('background-color', 'white');
        }
    }

    /*
      Fonction permettant de changer d'image de coussin sur l'image cela RAJOUTE un coussin
     */
    function addCoussin() {
        nbrCoussin++;
        $('#listCoussins').html("<div><img id=" + nbrCoussin + " src='img/"+ nbrCoussin +".png' alt='Coussin numéro"+ nbrCoussin +"'></div>");
        $('#cpt').html("<p>"+ nbrCoussin +"</p>");
        change();
    }

    /*
      Fonction permettant de changer d'image de coussin sur l'image cela ENLEVE un coussin
     */
    function deleteCoussin() {
        nbrCoussin--;
        $('#listCoussins').html("<div><img id=" + nbrCoussin + " src='img/"+ nbrCoussin +".png' alt='Coussin numéro"+ nbrCoussin +"'></div>");
        $('#cpt').html("<p>"+ nbrCoussin +"</p>");
        change();
    }


    //
    // Ajout des eventlisteners
    //

    $("#btnAdd").click(function() {
        addCoussin();
    });

    $("#btnDelete").click(function() {
        deleteCoussin();
    });
});
