const ColorIsBright = (H) => {
    //first hex to HSL value to get the luminance + saturation value from original bg colour
  
    // conv to RGB...
    let r = 0,
      g = 0,
      b = 0
    if (H.length === 4) {
      r = +("0x" + H[1] + H[1])
      g = +("0x" + H[2] + H[2])
      b = +("0x" + H[3] + H[3])
    } else if (H.length === 7) {
      r = +("0x" + H[1] + H[2])
      g = +("0x" + H[3] + H[4])
      b = +("0x" + H[5] + H[6])
    } 
    
    // sigma function, reduce each value to a number between 0 and 1
    r /= 255
    g /= 255
    b /= 255 
  
  //  Convert the RGB color into a linear color space. For sRGB, the following formula may be used: ππΏ=π(π),πΊπΏ=π(πΊ),π΅πΏ=π(π΅), where:
  // π(πΆ)={ πΆ/12.92                  if 0 <= πΆ <= 0.04045
  //       ((πΆ+0.055)/1.055)^2.4     if 0.04045 < πΆ <= 1
  // (Here, π, πΊ and π΅ are the sRGB component values, and ππΏ, πΊπΏ and π΅πΏ the linear ones, both scaled to the range from 0.0 to 1.0.) 
  //  Alternatively, a very close approximation to the formula above is given by simple gamma - expansion with πΎ = 2.2: π(πΆ) = πΆ2.2.
  
  // Calculate the relative luminance as a weighted average of the linear RGB values:
  // π=0.2126ππΏ+0.7152πΊπΏ+0.0722π΅πΏ
  // (The weights are exactly the same as for the luma formula above, because that's where they come from; the luma calculation just blindly applies them to the gamma-compressed RGB values.)
  
  // Convert the relative luminance value into an approximation of the percieved lightness, using something like the CIELAB formula: ββ=1.16π(π)β0.16, where:
  // f(t)={t^1/3                    if t>delta^3
  //      {t/(3 * delta^2) + 4/29   otherwise
  // (Note: In the CIELAB standard, the πΏβ value ranges from 0 to 100, but for the sake of consistency, in the formula above I chose to define ββ=πΏβ/100, so that its range is also from 0 to 1.) - Data
  
    let rL = RGBtoLinearColorSpace(r)
    let gL = RGBtoLinearColorSpace(g)
    let bL = RGBtoLinearColorSpace(b)
    let Y = getRelativeLumosity(rL, gL, bL)
    let isBright = CIEXYZtoCIELAB(Y)
    
    //threshold is arbitrary, 0.5 seems like a good number.
    return isBright >= 0.5
  }
  
  //interpolate values of RGB to a linear color space between 0 and 1
  //returns gamma expanded values of RGB
  //https://en.wikipedia.org/wiki/SRGB#From_sRGB_to_CIE_XYZ
  function RGBtoLinearColorSpace(C) {
    if (0.04045 >= C && C >= 0) return C / 12.92
    else if (1 >= C && C >= 0.04045) return Math.pow(((C+0.055)/1.055), 2.4)
  }
  //calculates relative luminance as Y in gamma encoded color spaces
  //Y=0.2126*Rlin+0.7152*Glin+0.0722*Blin
  //https://en.wikipedia.org/wiki/Relative_luminance
  function getRelativeLumosity(rL, gL, bL) {
    return (rL * 0.2126) + (gL * 0.7152) + (bL * 0.0722) 
  }
  
  //convert Y (CIEXYZ) to CIELAB colorimetry value for perceived brightness by human eye
  //inverse of CIEXYZ TO CIELAB since we are looking for brightness rather than darkness. where, being t = X/Xn', Y/Yn', or Z/Zn':
  // f(t)={t^1/3                    if t>delta^3
  //      {t/(3 * delta^2) + 4/29   otherwise
  //
  //assuming delta = 6/29
  //https://en.wikipedia.org/wiki/CIELAB_color_space
  function CIEXYZtoCIELAB(Y) {
    if (Math.pow(6 / 29, 3) >= Y && Y >= 0) return ((1 / 3) * Math.pow((6 / 29), 2) * Y) + 4 / 29
    else return Math.pow(Y, (1/3))
  }
  
module.exports = ColorIsBright