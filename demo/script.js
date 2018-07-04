//
const animations = [];
const nodes = document.getElementsByClassName('loading-animation');

for(let idx = 0; idx < nodes.length; idx++) {
    ((idx) => {

        // for each node
        const node = nodes.item(idx);

        // instantiate a new LoadingAnimation
        animations.push(new LoadingAnimation(node));

        // add a click listener
        node.addEventListener('click', (e) => {

            // quick hack to get the index
            const idx = e.target.getAttribute('index');

            // reroll the LoadingAnimation
            animations[idx].reroll();

        });
    })(idx);
}
