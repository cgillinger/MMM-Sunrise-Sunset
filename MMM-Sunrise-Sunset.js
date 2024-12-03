Module.register("MMM-Sunrise-Sunset", {
    defaults: {
        apiKey: '',
        latitude: '',
        longitude: '',
        layout: "inline",
        updateInterval: 3600000,
        showSunrise: true,
        showSunset: true,
        showMoonrise: true,
        showMoonset: true,
        showNoon: true,
        showDaylength: true
    },
    start: function () {
        Log.info("Starting module: " + this.name);
        this.apiBase = "https://api.ipgeolocation.io/astronomy?apiKey=" + this.config.apiKey + "&lat=" + this.config.latitude + "&long=" + this.config.longitude;
        this.updateSun(this);
        setInterval(() => {
            this.updateSun(this);
        }, this.config.updateInterval);
    },
    getScripts: function () {
        return ["jquery.js"];
    },
    getStyles: function () {
        return ["weather-icons.css", "MMM-Sunrise-Sunset.css"];
    },
    getDom: function () {
        const wrapper = document.createElement("div");
        wrapper.className = "small normal sunrise";
        wrapper.innerHTML = "Loading...";
        return wrapper;
    },
    updateSun: function () {
        const url = this.apiBase;
        if (this.config.layout === "inline" || this.config.layout === "list") {
            $.getJSON(url, (data) => {
                $('.sunrise').html('');
                const sunrise = data.sunrise;
                const sunset = data.sunset;
                const noon = data.solar_noon;
                const daylength = data.day_length;
                const moonrise = data.moonrise;
                const moonset = data.moonset;

                if (this.config.showSunrise) {
                    $('.sunrise').append('<i class="wi wi-sunrise"></i>' + sunrise + (this.config.layout === "inline" ? ' | ' : ''));
                }
                if (this.config.showSunset) {
                    $('.sunrise').append('<i class="wi wi-sunset"></i>' + sunset + (this.config.layout === "inline" ? ' | ' : ''));
                }
                if (this.config.showNoon) {
                    $('.sunrise').append('<i class="wi wi-day-sunny"></i>' + noon + (this.config.layout === "inline" ? ' | ' : ''));
                }
                if (this.config.showDaylength) {
                    $('.sunrise').append('<i class="wi wi-time-12"></i>' + daylength + (this.config.layout === "inline" ? ' | ' : ''));
                }
                if (this.config.showMoonrise) {
                    $('.sunrise').append('<i class="wi wi-moonrise"></i>' + moonrise + (this.config.layout === "inline" ? ' | ' : ''));
                }
                if (this.config.showMoonset) {
                    $('.sunrise').append('<i class="wi wi-moonset"></i>' + moonset);
                }
            });
        }
    }
});
