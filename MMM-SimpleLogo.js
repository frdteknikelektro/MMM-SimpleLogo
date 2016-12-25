Module.register("MMM-SimpleLogo", {
    // Default module config.
    defaults: {
        text: "Simple Logo",
        fileUrl: config.fileUrl || "modules/MMM-SimpleLogo/public/logo.png",
        width: config.width || "200px",
        position: config.position || "left"
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
        wrapper.classList.add(this.defaults.position);
        wrapper.style.width = this.defaults.width;
        var img = document.createElement("img");
        img.setAttribute('src', this.defaults.fileUrl);
        wrapper.appendChild(img);
        return wrapper;
    }
});
