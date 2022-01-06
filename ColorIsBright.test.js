const ColorIsBright = require(".")

test("returns whether a color is bright or not", ()=>{
    expect(ColorIsBright("#000000")).toBe(false)
    expect(ColorIsBright("#111111")).toBe(false)
    expect(ColorIsBright("#222222")).toBe(false)
    expect(ColorIsBright("#333333")).toBe(false)
    expect(ColorIsBright("#444444")).toBe(false)
    expect(ColorIsBright("#555555")).toBe(false)
    expect(ColorIsBright("#666666")).toBe(true)
    expect(ColorIsBright("#777777")).toBe(true)
    expect(ColorIsBright("#888888")).toBe(true)
    expect(ColorIsBright("#999999")).toBe(true)
    expect(ColorIsBright("#aaaaaa")).toBe(true)
    expect(ColorIsBright("#bbbbbb")).toBe(true)
    expect(ColorIsBright("#cccccc")).toBe(true)
    expect(ColorIsBright("#dddddd")).toBe(true)
    expect(ColorIsBright("#eeeeee")).toBe(true)
    expect(ColorIsBright("#ffffff")).toBe(true) 
    expect(ColorIsBright("#0829AA")).toBe(false) 
    expect(ColorIsBright("#28F8A2")).toBe(true) 
    expect(ColorIsBright("#E3CB1F")).toBe(true) 
    expect(ColorIsBright("#781C44")).toBe(false) 
    expect(ColorIsBright("#C48E21")).toBe(true) 
    expect(ColorIsBright("#B606F5")).toBe(true) 
    expect(ColorIsBright("#00C199")).toBe(true) 
    expect(ColorIsBright("#F7872C")).toBe(true) 
    expect(ColorIsBright("#F61FDF")).toBe(true) 
    expect(ColorIsBright("#1030b7")).toBe(false) 
    expect(ColorIsBright("#eb609a")).toBe(true) 
    expect(ColorIsBright("#d5b60a")).toBe(true) 
    expect(ColorIsBright("#79b3f2")).toBe(true) 
    expect(ColorIsBright("#79f2f0")).toBe(true) 
    expect(ColorIsBright("#d7f279")).toBe(true) 
    expect(ColorIsBright("#d379f2")).toBe(true) 
    expect(ColorIsBright("#79c8f2")).toBe(true) 
    expect(ColorIsBright("#f2c779")).toBe(true) 
    expect(ColorIsBright("#798af2")).toBe(true) 
    expect(ColorIsBright("#a579f2")).toBe(true) 
    expect(ColorIsBright("#f27984")).toBe(true) 
    expect(ColorIsBright("#9ef279")).toBe(true) 
    expect(ColorIsBright("#e479f2")).toBe(true) 
    expect(ColorIsBright("#8ef279")).toBe(true) 
    expect(ColorIsBright("#d779f2")).toBe(true) 
    expect(ColorIsBright("#9b79f2")).toBe(true) 
    expect(ColorIsBright("#f28a79")).toBe(true) 
    expect(ColorIsBright("#79eef2")).toBe(true) 
    expect(ColorIsBright("#f279f0")).toBe(true) 
    expect(ColorIsBright("#f2bb79")).toBe(true) 
    expect(ColorIsBright("#79f2c4")).toBe(true) 
    expect(ColorIsBright("#79f2e2")).toBe(true) 
    expect(ColorIsBright("#79a2f2")).toBe(true) 
    expect(ColorIsBright("#79f2a6")).toBe(true) 
    expect(ColorIsBright("#79f29a")).toBe(true) 
    expect(ColorIsBright("#b879f2")).toBe(true) 
    expect(ColorIsBright("#f2798c")).toBe(true) 
    expect(ColorIsBright("#f27982")).toBe(true) 
    expect(ColorIsBright("#79e1f2")).toBe(true) 
    expect(ColorIsBright("#79c7f2")).toBe(true) 
    expect(ColorIsBright("#f2799c")).toBe(true) 
    expect(ColorIsBright("#f2d879")).toBe(true) 
    expect(ColorIsBright("#79f27d")).toBe(true) 
    expect(ColorIsBright("#79a6f2")).toBe(true) 
    expect(ColorIsBright("#8779f2")).toBe(true) 
    expect(ColorIsBright("#79f27f")).toBe(true) 
    expect(ColorIsBright("#f29579")).toBe(true) 
    expect(ColorIsBright("#79f2e7")).toBe(true) 
    expect(ColorIsBright("#e179f2")).toBe(true) 
    expect(ColorIsBright("#f279eb")).toBe(true) 
    expect(ColorIsBright("#79b1f2")).toBe(true) 
    expect(ColorIsBright("#79bef2")).toBe(true) 
    expect(ColorIsBright("#f279e1")).toBe(true) 
    expect(ColorIsBright("#7b79f2")).toBe(true) 
    expect(ColorIsBright("#98f279")).toBe(true) 
    expect(ColorIsBright("#7986f2")).toBe(true) 
    expect(ColorIsBright("#e9f279")).toBe(true) 
    expect(ColorIsBright("#a9f279")).toBe(true) 
    expect(ColorIsBright("#79f2ab")).toBe(true) 
    expect(ColorIsBright("#f279f0")).toBe(true) 
    expect(ColorIsBright("#79f2da")).toBe(true) 
    expect(ColorIsBright("#cc79f2")).toBe(true) 
    expect(ColorIsBright("#acf279")).toBe(true) 
    expect(ColorIsBright("#d0f279")).toBe(true) 
    expect(ColorIsBright("#4f1c13")).toBe(false) 
    expect(ColorIsBright("#264f13")).toBe(false) 
    expect(ColorIsBright("#4f131d")).toBe(false) 
    expect(ColorIsBright("#36134f")).toBe(false) 
    expect(ColorIsBright("#13424f")).toBe(false) 
    expect(ColorIsBright("#4f2713")).toBe(false) 
    expect(ColorIsBright("#1d134f")).toBe(false) 
    expect(ColorIsBright("#13334f")).toBe(false) 
    expect(ColorIsBright("#134f21")).toBe(false) 
    expect(ColorIsBright("#4f133e")).toBe(false) 
    expect(ColorIsBright("#134d4f")).toBe(false) 
    expect(ColorIsBright("#134f2d")).toBe(false) 
    expect(ColorIsBright("#2b4f13")).toBe(false) 
    expect(ColorIsBright("#34134f")).toBe(false) 
    expect(ColorIsBright("#314f13")).toBe(false) 
    expect(ColorIsBright("#2f134f")).toBe(false) 
    expect(ColorIsBright("#4f3013")).toBe(false) 
    expect(ColorIsBright("#13374f")).toBe(false) 
    expect(ColorIsBright("#134f2d")).toBe(false) 
    expect(ColorIsBright("#134f44")).toBe(false) 
    expect(ColorIsBright("#2a134f")).toBe(false) 
    expect(ColorIsBright("#133d4f")).toBe(false) 
    expect(ColorIsBright("#4f2613")).toBe(false) 
    expect(ColorIsBright("#4f1332")).toBe(false) 
    expect(ColorIsBright("#4f133c")).toBe(false) 
    expect(ColorIsBright("#4f1325")).toBe(false) 
    expect(ColorIsBright("#3d4f13")).toBe(false) 
    expect(ColorIsBright("#2c4f13")).toBe(false) 
    expect(ColorIsBright("#274f13")).toBe(false) 
    expect(ColorIsBright("#4f1d13")).toBe(false) 
    expect(ColorIsBright("#4f1318")).toBe(false) 
    expect(ColorIsBright("#4f1713")).toBe(false) 
    expect(ColorIsBright("#26134f")).toBe(false) 
    expect(ColorIsBright("#4f1341")).toBe(false) 
    expect(ColorIsBright("#484f13")).toBe(false) 
    expect(ColorIsBright("#4f2713")).toBe(false) 
    expect(ColorIsBright("#264f13")).toBe(false) 
    expect(ColorIsBright("#134f4d")).toBe(false) 
    expect(ColorIsBright("#4f1316")).toBe(false) 
    expect(ColorIsBright("#134f2c")).toBe(false) 
    expect(ColorIsBright("#35134f")).toBe(false) 
    expect(ColorIsBright("#134f33")).toBe(false) 
    expect(ColorIsBright("#4f1336")).toBe(false) 
    expect(ColorIsBright("#4f1334")).toBe(false) 
    expect(ColorIsBright("#13464f")).toBe(false) 
    expect(ColorIsBright("#4f1e13")).toBe(false) 
    expect(ColorIsBright("#4f1330")).toBe(false) 
    expect(ColorIsBright("#4f134d")).toBe(false) 
    expect(ColorIsBright("#344f13")).toBe(false) 
    expect(ColorIsBright("#414f13")).toBe(false) 
    expect(ColorIsBright("#134f2b")).toBe(false) 
    expect(ColorIsBright("#4f132f")).toBe(false) 
    expect(ColorIsBright("#4f1342")).toBe(false) 
    expect(ColorIsBright("#13444f")).toBe(false) 
    expect(ColorIsBright("#134f3a")).toBe(false) 
    expect(ColorIsBright("#13474f")).toBe(false) 
    expect(ColorIsBright("#40134f")).toBe(false) 
    expect(ColorIsBright("#4b4f13")).toBe(false) 
    expect(ColorIsBright("#4f4013")).toBe(false) 
    expect(ColorIsBright("#4f2f13")).toBe(false) 
    expect(ColorIsBright("#2d134f")).toBe(false) 
    expect(ColorIsBright("#45134f")).toBe(false) 
    expect(ColorIsBright("#2b4f13")).toBe(false) 
    expect(ColorIsBright("#15134f")).toBe(false) 
    expect(ColorIsBright("#4f1325")).toBe(false) 
    expect(ColorIsBright("#4f2c13")).toBe(false) 
    expect(ColorIsBright("#4f2f13")).toBe(false) 
    expect(ColorIsBright("#33134f")).toBe(false) 
    expect(ColorIsBright("#13204f")).toBe(false) 
    expect(ColorIsBright("#4f1513")).toBe(false) 
    expect(ColorIsBright("#31134f")).toBe(false) 
    expect(ColorIsBright("#4f1331")).toBe(false) 
    expect(ColorIsBright("#2f4f13")).toBe(false) 
    expect(ColorIsBright("#131c4f")).toBe(false) 
    expect(ColorIsBright("#134f3a")).toBe(false) 
    expect(ColorIsBright("#4f2b13")).toBe(false) 
    expect(ColorIsBright("#4f1340")).toBe(false) 
    expect(ColorIsBright("#4f4a13")).toBe(false) 
    expect(ColorIsBright("#133d4f")).toBe(false) 
    expect(ColorIsBright("#4f1e13")).toBe(false) 
    expect(ColorIsBright("#134f42")).toBe(false) 
    expect(ColorIsBright("#32134f")).toBe(false) 
    expect(ColorIsBright("#354f13")).toBe(false) 
    expect(ColorIsBright("#134f1b")).toBe(false) 
    expect(ColorIsBright("#3b134f")).toBe(false) 
    expect(ColorIsBright("#4f3613")).toBe(false) 
    expect(ColorIsBright("#131d4f")).toBe(false) 
    expect(ColorIsBright("#134e4f")).toBe(false) 
    expect(ColorIsBright("#4f3313")).toBe(false) 
    expect(ColorIsBright("#23134f")).toBe(false) 
    expect(ColorIsBright("#354f13")).toBe(false) 
    expect(ColorIsBright("#4f1b13")).toBe(false) 
    expect(ColorIsBright("#4f4113")).toBe(false) 
    expect(ColorIsBright("#13494f")).toBe(false) 
    expect(ColorIsBright("#4f3f13")).toBe(false) 
    expect(ColorIsBright("#4f132d")).toBe(false) 
    expect(ColorIsBright("#13494f")).toBe(false) 
    expect(ColorIsBright("#4f131f")).toBe(false) 
    expect(ColorIsBright("#48134f")).toBe(false) 
    expect(ColorIsBright("#144f13")).toBe(false) 
    expect(ColorIsBright("#4b134f")).toBe(false) 
    expect(ColorIsBright("#4f1324")).toBe(false) 
    expect(ColorIsBright("#13324f")).toBe(false) 
    expect(ColorIsBright("#134f16")).toBe(false) 
    expect(ColorIsBright("#4b134f")).toBe(false) 
    expect(ColorIsBright("#254f13")).toBe(false) 
    expect(ColorIsBright("#1f134f")).toBe(false) 
    expect(ColorIsBright("#2b4f13")).toBe(false) 
    expect(ColorIsBright("#134f20")).toBe(false) 
    expect(ColorIsBright("#2a4f13")).toBe(false) 
    expect(ColorIsBright("#4f4013")).toBe(false) 
    expect(ColorIsBright("#4f3113")).toBe(false) 
    expect(ColorIsBright("#26134f")).toBe(false) 
    expect(ColorIsBright("#13134f")).toBe(false) 
    expect(ColorIsBright("#404f13")).toBe(false) 
    expect(ColorIsBright("#1b4f13")).toBe(false) 
    expect(ColorIsBright("#133f4f")).toBe(false) 
    expect(ColorIsBright("#131e4f")).toBe(false) 
    expect(ColorIsBright("#134f4e")).toBe(false) 
    expect(ColorIsBright("#4f1413")).toBe(false) 
    expect(ColorIsBright("#4f4c13")).toBe(false) 
    expect(ColorIsBright("#13214f")).toBe(false) 
    expect(ColorIsBright("#134f24")).toBe(false) 
    expect(ColorIsBright("#42134f")).toBe(false) 
    expect(ColorIsBright("#174f13")).toBe(false) 
    expect(ColorIsBright("#4f134c")).toBe(false) 
    expect(ColorIsBright("#4f1333")).toBe(false) 
    expect(ColorIsBright("#4f131a")).toBe(false) 
    expect(ColorIsBright("#134f36")).toBe(false) 
    expect(ColorIsBright("#131a4f")).toBe(false) 
    expect(ColorIsBright("#4f1343")).toBe(false) 
    expect(ColorIsBright("#4f132d")).toBe(false) 
    expect(ColorIsBright("#134f31")).toBe(false) 
    expect(ColorIsBright("#4f1331")).toBe(false) 
    expect(ColorIsBright("#13434f")).toBe(false) 
    expect(ColorIsBright("#134f17")).toBe(false) 
    expect(ColorIsBright("#13254f")).toBe(false) 
    expect(ColorIsBright("#131c4f")).toBe(false) 
    expect(ColorIsBright("#3b134f")).toBe(false) 
    expect(ColorIsBright("#374f13")).toBe(false) 
    expect(ColorIsBright("#33134f")).toBe(false) 
    expect(ColorIsBright("#4f1324")).toBe(false) 
    expect(ColorIsBright("#134f3d")).toBe(false) 
    expect(ColorIsBright("#133c4f")).toBe(false) 
    expect(ColorIsBright("#13414f")).toBe(false) 
    expect(ColorIsBright("#484f13")).toBe(false) 
    expect(ColorIsBright("#1f134f")).toBe(false) 
    expect(ColorIsBright("#134f43")).toBe(false) 
    expect(ColorIsBright("#144f13")).toBe(false) 
    expect(ColorIsBright("#134f1a")).toBe(false) 
    expect(ColorIsBright("#3b134f")).toBe(false) 
    expect(ColorIsBright("#133d4f")).toBe(false) 
    expect(ColorIsBright("#134f28")).toBe(false) 
    expect(ColorIsBright("#4f2013")).toBe(false) 
    expect(ColorIsBright("#3a134f")).toBe(false) 
    expect(ColorIsBright("#4f1337")).toBe(false) 
    expect(ColorIsBright("#134f4e")).toBe(false) 
    expect(ColorIsBright("#4f1332")).toBe(false) 
    expect(ColorIsBright("#4f4813")).toBe(false) 
    expect(ColorIsBright("#3d4f13")).toBe(false) 
    expect(ColorIsBright("#131a4f")).toBe(false) 
    expect(ColorIsBright("#134f35")).toBe(false) 
    expect(ColorIsBright("#4f1344")).toBe(false) 
    expect(ColorIsBright("#13484f")).toBe(false) 
    expect(ColorIsBright("#344f13")).toBe(false) 
    expect(ColorIsBright("#2d134f")).toBe(false) 
    expect(ColorIsBright("#4f4413")).toBe(false) 
    expect(ColorIsBright("#26134f")).toBe(false) 
    expect(ColorIsBright("#13374f")).toBe(false) 
    expect(ColorIsBright("#274f13")).toBe(false) 
    expect(ColorIsBright("#4f132a")).toBe(false) 
    expect(ColorIsBright("#13274f")).toBe(false) 
    expect(ColorIsBright("#132d4f")).toBe(false) 
    expect(ColorIsBright("#134f2e")).toBe(false) 
    expect(ColorIsBright("#4f132f")).toBe(false) 
    expect(ColorIsBright("#4f1f13")).toBe(false) 
    expect(ColorIsBright("#4b134f")).toBe(false) 
    expect(ColorIsBright("#4f1329")).toBe(false) 
    expect(ColorIsBright("#4f2b13")).toBe(false) 
    expect(ColorIsBright("#134f41")).toBe(false) 
    expect(ColorIsBright("#4b4f13")).toBe(false) 
    expect(ColorIsBright("#134f17")).toBe(false) 
    expect(ColorIsBright("#132d4f")).toBe(false) 
    expect(ColorIsBright("#4f131b")).toBe(false) 
    expect(ColorIsBright("#13354f")).toBe(false) 
    expect(ColorIsBright("#134f1a")).toBe(false) 
    expect(ColorIsBright("#484f13")).toBe(false) 
    expect(ColorIsBright("#3c4f13")).toBe(false) 
    expect(ColorIsBright("#4f4413")).toBe(false) 
    expect(ColorIsBright("#4f1346")).toBe(false) 
    expect(ColorIsBright("#4f1332")).toBe(false) 
    expect(ColorIsBright("#394f13")).toBe(false) 
    expect(ColorIsBright("#134f26")).toBe(false) 
    expect(ColorIsBright("#4f132a")).toBe(false) 
    expect(ColorIsBright("#23134f")).toBe(false) 
    expect(ColorIsBright("#4f133c")).toBe(false) 
    expect(ColorIsBright("#3c4f13")).toBe(false) 
    expect(ColorIsBright("#1b4f13")).toBe(false) 
    expect(ColorIsBright("#134f27")).toBe(false) 
    expect(ColorIsBright("#4f1346")).toBe(false) 
    expect(ColorIsBright("#4f2213")).toBe(false) 
    expect(ColorIsBright("#134f22")).toBe(false) 
    expect(ColorIsBright("#4f134c")).toBe(false) 
    expect(ColorIsBright("#4f4e13")).toBe(false) 
    expect(ColorIsBright("#134f2c")).toBe(false) 
    expect(ColorIsBright("#131a4f")).toBe(false) 
    expect(ColorIsBright("#2e4f13")).toBe(false) 
    expect(ColorIsBright("#131c4f")).toBe(false) 
    expect(ColorIsBright("#43134f")).toBe(false) 
    expect(ColorIsBright("#2e134f")).toBe(false) 
    expect(ColorIsBright("#134d4f")).toBe(false) 
    expect(ColorIsBright("#13204f")).toBe(false) 
    expect(ColorIsBright("#4f2d13")).toBe(false) 
    expect(ColorIsBright("#484f13")).toBe(false) 
    expect(ColorIsBright("#13134f")).toBe(false) 
    expect(ColorIsBright("#13144f")).toBe(false) 
    expect(ColorIsBright("#4f131c")).toBe(false) 
    expect(ColorIsBright("#13474f")).toBe(false) 
    expect(ColorIsBright("#134a4f")).toBe(false) 
    expect(ColorIsBright("#134f45")).toBe(false) 
    expect(ColorIsBright("#4f3a13")).toBe(false) 
    expect(ColorIsBright("#13374f")).toBe(false) 
    expect(ColorIsBright("#364f13")).toBe(false) 
    expect(ColorIsBright("#4f2213")).toBe(false) 
    expect(ColorIsBright("#4f3813")).toBe(false) 
    expect(ColorIsBright("#132d4f")).toBe(false) 
    expect(ColorIsBright("#134f32")).toBe(false) 
    expect(ColorIsBright("#1e134f")).toBe(false) 
    expect(ColorIsBright("#2d134f")).toBe(false) 
    expect(ColorIsBright("#13444f")).toBe(false) 
})