
# MMM-Sunrise-Sunset

A MagicMirror module to display local sunrise and sunset times.

This module is an extension of the MagicMirror project, allowing users to display sunrise and sunset times with flexible configuration options.

---

## Features

- Displays sunrise and sunset times.
- Supports optional display of moonrise, moonset, solar noon, and day length.
- Two layout options: "inline" or "list".
- Fetches data from [IP Geolocation API](https://ipgeolocation.io/).

---

## Installation

1. Navigate to your MagicMirror `modules` folder:
   ```bash
   cd ~/MagicMirror/modules
   ```

2. Clone the repository:
   ```bash
   git clone https://github.com/cgillinger/MMM-Sunrise-Sunset.git
   ```

3. Navigate to the module folder:
   ```bash
   cd MMM-Sunrise-Sunset
   ```

4. Install dependencies:
   ```bash
   npm install
   ```

---

## Configuration

Add the following configuration block to the `modules` array in your `config/config.js` file.

### Example Configuration for Sunrise and Sunset Only

```javascript
{
    module: "MMM-Sunrise-Sunset",
    position: "bottom_left",
    config: {
        latitude: 59.3293,  // Latitude for Stockholm
        longitude: 18.0686, // Longitude for Stockholm
        apiKey: "8fd423c5ca0c49f198f9598baeb5a059", // API key
        layout: "list",   // Use list layout
        showSunrise: true,  // Display sunrise time
        showSunset: true,   // Display sunset time
        showMoonrise: false, // Hide moonrise time
        showMoonset: false,  // Hide moonset time
        showNoon: false,     // Hide solar noon time
        showDaylength: false, // Hide day length
        timeFormat: 24       // Use 24-hour format
    }
}
```

---

## Options

| **Option**        | **Description**                                                                 |
|--------------------|---------------------------------------------------------------------------------|
| `latitude`         | Your local latitude (e.g., `"59.3293"` for Stockholm). *Required*.             |
| `longitude`        | Your local longitude (e.g., `"18.0686"` for Stockholm). *Required*.            |
| `apiKey`           | API key from [IP Geolocation](https://ipgeolocation.io/). *Required*.          |
| `layout`           | Choose between `"inline"` or `"list"`.                                         |
| `showSunrise`      | Show sunrise time. Default: `true`.                                            |
| `showSunset`       | Show sunset time. Default: `true`.                                             |
| `showMoonrise`     | Show moonrise time. Default: `true`.                                           |
| `showMoonset`      | Show moonset time. Default: `true`.                                            |
| `showNoon`         | Show solar noon time. Default: `true`.                                         |
| `showDaylength`    | Show day length. Default: `true`.                                              |
| `timeFormat`       | Use `12` for 12-hour format or `24` for 24-hour format. Default: `24`.         |

---

## Troubleshooting

### Fix for "Loading..." Issue

If the module gets stuck on "Loading...", ensure the following:

1. **Install jQuery**:
   ```bash
   npm install jquery
   ```

2. **Copy `jquery.js` to the module folder**:
   ```bash
   cp ./node_modules/jquery/dist/jquery.js .
   ```

3. Restart MagicMirror:
   ```bash
   npm start
   ```

If the problem persists, open an issue on the [GitHub repository](https://github.com/cgillinger/MMM-Sunrise-Sunset/issues).

---

## License

This module is licensed under the [MIT License](https://opensource.org/licenses/MIT).
