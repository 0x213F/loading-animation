function LoadingAnimation(canvas_input, config_input) {

    const [primary, secondary] = getRandomColors();

    this.canvas  = canvas_input;
    this.context = this.canvas.getContext('2d');
    this.config  = Object.assign({
                       'delay': 0,
                       'number_of_dots': getRandomInt(3,12),
                       'number_of_edges': getRandomInt(3,6),
                       'period': getRandomInt(1500, 3500),
                       'padding': 5,                  // percent
                       'distance': 20,                // percent
                       'radius': 15,                  // percent
                       'dot_color': primary,           // hex
                       'edge_color': primary,          // hex
                       'background_color': secondary     // hex
                   }, config_input);

    this.start_time = Date.now();
    this.canvas.style.backgroundColor = secondary;
    setTimeout(this.start.bind(this), this.config.delay_time);
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
    this.config  = {
                       'delay': 0,
                       'number_of_dots': getRandomInt(3,12),
                       'number_of_edges': getRandomInt(3,6),
                       'period': getRandomInt(1500, 3500),
                       'padding': 5,                  // percent
                       'distance': 20,                // percent
                       'radius': 15,                  // percent
                       'dot_color': primary,           // hex
                       'edge_color': primary,          // hex
                       'background_color': secondary     // hex
                   }
}
