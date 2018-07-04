function LoadingAnimation(canvas_input, config_input, reroll_callback) {

    const [primary, secondary] = getRandomColors();

    this.reroll_callback = reroll_callback ? reroll_callback : function() {
      document.body.style.backgroundColor = this.secondary;
      document.body.style.color = this.primary;
    };
    this.canvas  = canvas_input;
    this.context = this.canvas.getContext('2d');
    this.config  = Object.assign({
                       'delay': 0,
                       'number_of_dots': getRandomInt(3,18),
                       'number_of_edges': getRandomInt(3,6),
                       'period': getRandomInt(2500, 4500),
                       'padding': getRandomInt(2, 7),                 // Number (percent)
                       'distance': getRandomInt(22, 15),              // Number (percent)
                       'radius': getRandomInt(14, 18),                // Number (percent)
                       'dot_color': primary,                          // String (hex)
                       'edge_color': primary,                         // String (hex)
                       'background_color': secondary                  // String (hex)
                   }, config_input);

    this.primary = primary;
    this.secondary = secondary;
    this.start_time = Date.now();
    this.canvas.style.backgroundColor = secondary;
    setTimeout(this.start.bind(this), this.config.delay_time);
    this.reroll_callback();
}

LoadingAnimation.prototype.start = function() {
  requestAnimationFrame(this.start.bind(this));
  var t = Date.now() - this.start_time;
  this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  drawInnerDots.bind(this)(t);
  drawOutterDots.bind(this)();               // TODO do not redraw every frame
}

LoadingAnimation.prototype.stop = function() {

}

LoadingAnimation.prototype.reroll = function() {
    const [primary, secondary] = getRandomColors();
    this.primary = primary;
    this.secondary = secondary;
    this.canvas.style.backgroundColor = secondary;
    this.config  = {
                       'delay': 0,
                       'number_of_dots': getRandomInt(3,18),
                       'number_of_edges': getRandomInt(3,6),
                       'period': getRandomInt(2500, 4500),
                       'padding': 5,                  // percent
                       'distance': 20,                // percent
                       'radius': 15,                  // percent
                       'dot_color': primary,           // hex
                       'edge_color': primary,          // hex
                       'background_color': secondary     // hex
                   }
    this.reroll_callback();
}
