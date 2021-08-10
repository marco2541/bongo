const plato = document.getElementById("plato");
plato.addEventListener("click ", function(event) {

    var o = context.createOscillator();
    g = context.createGain();
    o.connect(g);
    o.type = "sawtooth";
    o.frequency.volue = frecuencia;
    g.connect(context.destination);
    o.start(0)

})
const dir = "sonido";
var audios = [];
precargarSonidos(plato, inicializar());