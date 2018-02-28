var carrousel = {

  nbSlide : 0, // nb de slides
  nbCurrent : 1, // pagination de la slide courante
  elemCurrent : null, // slide courante
  elem : null, // élément Carrousel
  timer : null,

  init : function(elem){ // equiv var init = function...
    this.nbSlide = elem.find(".slide").length // calcule le nombre de slides à afficher et stocke la valeur dans nbSlide

    // Créer la pagination
    elem.append('<div class="navigation"></div>');
    for (var i=1; i<=this.nbSlide; i++){
      elem.find(".navigation").append("<span>"+i+"</span>");
    }
    // Changer de page lorsqu'on clique (utilise gotoSlide)
    elem.find(".navigation span").click(function(){
      carrousel.gotoSlide($(this).text());
    }) // (this).text désigne le texte de l'élément désigné par le click

    // Initialisation du Carrousel
    this.elem = elem;
    // Cacher toutes les slides avant d'afficher la première
    elem.find(".slide").hide();
    elem.find(".slide:first").show();

    this.elemCurrent = elem.find(".slide:first"); // l'elemCurrent est la slide affichée qui est la première
    this.elem.find(".navigation span:first").addClass("active");

    // Création du timer pour le carrousel automatique
    carrousel.play();

    // Arrêter le carrousel quand la souris passe dessus
    elem.mouseover(carrousel.stop);
    elem.mouseout(carrousel.play);

    // Bouton Previous et next
    $("#next").click(carrousel.next);
    $("#previous").click(carrousel.previous);
  },

  gotoSlide : function(num){
    if (num==this.nbCurrent){ // Ne réactualise pas la slide si on clique plusieurs fois sur son numéro
      return false;
    }
    this.elemCurrent.fadeOut();
    this.elem.find("#slide"+num).fadeIn();
    this.elem.find(".navigation span").removeClass("active");
    this.elem.find(".navigation span:eq("+(num-1)+")").addClass("active"); // eq Reduce the set of matched elements to the one at the specified index
    this.nbCurrent = num;
    this.elemCurrent = this.elem.find("#slide"+num)
  },

  next : function(){
    var num = this.nbCurrent+1;
    if(num>this.nbSlide){
      num = 1;
    }
    this.gotoSlide(num)
  },

  previous : function(){
    var num = this.nbCurrent-1;
    if(num<1){
      num = this.nbSlide;
    }
    this.gotoSlide(num)
  },

  stop : function(){
    window.clearInterval(carrousel.timer);
  },

  play : function(){
    this.timer = window.setInterval("carrousel.next()",5000);
  }

} // fin carrousel

$(function(){
  carrousel.init($("#carrousel"));
});
