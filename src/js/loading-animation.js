function LoadingAnimation(canvas_input, config_input) {

    this.canvas  = canvas_input;
    this.context = this.canvas.getContext('2d');
    this.config  = Object.assign({
                       'delay': 0,
                       'number_of_dots': getRandomInt(3,6),
                       'number_of_edges': getRandomInt(3,6),
                       'period': getRandomInt(1000, 2000),
                       'padding': 5,                  // percent
                       'distance': 20,                // percent
                       'radius': 15,                  // percent
                       'dot_color': '#FFF',           // hex
                       'edge_color': '#FFF',          // hex
                       'background_color': '#000'     // hex
                   }, config_input);

    this.start_time = Date.now();
    setTimeout(this.start.bind(this), this.config.delay_time);

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

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
  function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }
    this.config  = {
                       'delay': 0,
                       'number_of_dots': getRandomInt(3,6),
                       'number_of_edges': getRandomInt(3,6),
                       'period': getRandomInt(1000, 2000),
                       'padding': 5,                  // percent
                       'distance': 20,                // percent
                       'radius': 15,                  // percent
                       'dot_color': '#FFF',           // hex
                       'edge_color': '#FFF',          // hex
                       'background_color': '#000'     // hex
                   };
}
