Module.register("MMM-SimpleLogo", {
    // Default module config.
    defaults: {
        text: "Simple Logo",
        fileUrl: "modules/MMM-SimpleLogo/public/logo.png",
        width: "200px",
        position: "left"
    },

    getStyles: function () {
        return [
            this.file('css/mmm-simplelogo.css')
        ];
    },

    // Override dom generator.
    getDom: function() {
        var wrapper = document.createElement("div");
        wrapper.className = 'simple-logo__container';
        wrapper.classList.add(this.config.position);
        wrapper.style.width = this.config.width;
        var img = document.createElement("img");
        img.setAttribute('src', this.config.fileUrl);
        wrapper.appendChild(img);
        return wrapper;
    }
});
