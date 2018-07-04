function LoadingAnimation(canvas_input, config_input) {

    this.canvas  = canvas_input;
    this.context = this.canvas.getContext('2d');
    this.config  = Object.assign({
                       'delay': 0,
                       'number_of_dots': 4,
                       'number_of_edges': 4,
                       'period': 1300,
                       'padding': 5,                  // percent
                       'distance': 20,                // percent
                       'radius': 15,                  // percent
                       'dot_color': '#FFF',           // hex
                       'edge_color': '#FFF',          // hex
                       'background_color': '#000'     // hex
                   }, config_input);

    this.start_time = Date.now();
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

}
