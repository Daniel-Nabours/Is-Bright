# Color-Is-Bright

Determines whether an RGB value will be perceived as "bright".

## Method
Interpolate values of RGB to a linear color space between 0 and 1, then return gamma expanded values of RGB and calculate relative luminance as Y.
Next, convert Y (CIEXYZ) to CIELAB colorimetry value for perceived brightness by human eye.
We use the inverse of CIEXYZ TO CIELAB since we are looking for brightness rather than darkness. Where t = X/Xn', Y/Yn', or Z/Zn'

```
𝑓(𝐶)={ 𝐶/12.92                  if 0 <= 𝐶 <= 0.04045
     {((𝐶+0.055)/1.055)^2.4     if 0.04045 < 𝐶 <= 1
      
Y=0.2126*Rlin+0.7152*Glin+0.0722*Blin

 f(t)={t^1/3                    if t>delta^3
      {t/(3 * delta^2) + 4/29   otherwise
```


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
