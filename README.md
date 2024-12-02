
# MMM-Sunrise-Sunset
A MagicMirror module to show local sunrise, sunset, and solar noon times.

> This is an extension for the [MagicMirror](https://github.com/MichMich/MagicMirror) project. It displays local sunrise, sunset, and solar noon times.

### **Credits**
This module, `MMM-Sunrise-Sunset`, was originally developed by [prydonian](https://github.com/prydonian).  
Their work provided the foundation for this MagicMirror module.  
This fork includes updates and fixes to enhance compatibility and usability.

## Features
- Displays sunrise and sunset times.
- Two layouts: "inline" or "list".
- Fetches data from [IP Geolocation API](https://ipgeolocation.io/).

![Inline Layout](https://raw.githubusercontent.com/prydonian/MMM-Sunrise-Sunset/master/Screenshot.png)
![List Layout](https://raw.githubusercontent.com/prydonian/MMM-Sunrise-Sunset/master/List.png)

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

5. Fix `jQuery` loading issue:
   ```bash
   cp ./node_modules/jquery/dist/jquery.js .
   ```

---

## Updating

To update the module, navigate to the module's folder and pull the latest changes:
```bash
cd ~/MagicMirror/modules/MMM-Sunrise-Sunset
git pull
```

If there are new dependencies, install them:
```bash
npm install
```

---

## Configuration

To use this module, add the following configuration block to the `modules` array in your `config/config.js` file.

```javascript
var config = {
    modules: [
        {
            module: 'MMM-Sunrise-Sunset',
            position: "top_right", // Or any other valid position
            config: {
                latitude: 59.3293,  // Your latitude (e.g., for Stockholm)
                longitude: 18.0686, // Your longitude (e.g., for Stockholm)
                apiKey: "YOUR_API_KEY", // Get a free API key from https://ipgeolocation.io/
                layout: "list", // "inline" or "list"
                showSunrise: true,
                showSunset: true,
                timeFormat: 24 // Use 24-hour time format
            }
        }
    ]
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
| `timeFormat`       | Use `12` for 12-hour format or `24` for 24-hour format. Default: `24`.         |

---

## Troubleshooting

### Fix for "Loading..." Issue
If the module gets stuck on "Loading...", ensure the following:
1. **Install jQuery:**
   ```bash
   npm install jquery
   ```

2. **Copy `jquery.js` to the module folder:**
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
