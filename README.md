# Color-Is-Bright

interpolate values of RGB to a linear color space between 0 and 1, then returns gamma expanded values of RGB and calculates relative luminance as Y

```Y=0.2126*Rlin+0.7152*Glin+0.0722*Blin```

finally, converts Y (CIEXYZ) to CIELAB colorimetry value for perceived brightness by human eye.
We use the inverse of CIEXYZ TO CIELAB since we are looking for brightness rather than darkness. where t = X/Xn', Y/Yn', or Z/Zn'

https://en.wikipedia.org/wiki/SRGB#From_sRGB_to_CIE_XYZ

https://en.wikipedia.org/wiki/Relative_luminance

https://en.wikipedia.org/wiki/CIELAB_color_space

## Installation

```
$ npm install Color-Is-Bright
```

## Usage 

```js 
const ColorIsBright = require("Color-Is-Bright") 

//return true/false
ColorIsBright("#FFFFFF") //true
ColorIsBright("#000000") //false
```
## License

MIT
