import React from 'react';
import Header from './components/Header';
import Main from './components/Main';

const App = () => {
  // Array of colours. --------------------------------------------------------
let colourArray = [ "white", "snow", "honeydew", "mintcream", "azure", "aliceblue", "ghostwhite", "whitesmoke" , "seashell", "beige", "oldlace", "floralwhite", "ivory", "antiquewhite", "linen", "lavenderblush", "mistyrose", "cornsilk", "blanchedalmond", "bisque", "navajowhite", "wheat", "burlywood", "tan", "sandybrown", "goldenrod", "darkgoldenrod", "peru", "chocolate", "saddlebrown", "sienna", "brown", "maroon", "lightsalmon", "salmon", "darksalmon", "lightcoral", "indianred", "crimson", "firebrick", "darkred", "red", "tomato", "coral", "darkorange", "orange", "yellow", "lightyellow", "lemonchiffon", "lightgoldenrodyellow", "papayawhip", "moccasin", "peachpuff", "palegoldenrod", "khaki", "darkkhaki", "gold", "darkolivegreen", "olive", "olivedrab", "yellowgreen", "limegreen", "lime", "lawngreen", "chartreuse", "greenyellow", "springgreen", "mediumspringgreen", "lightgreen", "palegreen", "darkseagreen", "mediumaquamarine", "mediumseagreen", "seagreen", "forestgreen", "green", "darkgreen", "aqua", "cyan", "lightcyan", "paleturquoise", "aquamarine", "turquoise", "mediumturquoise", "darkturquoise", "lightseagreen", "cadetblue", "darkcyan", "teal", "lightsteelblue", "powderblue", "lightblue", "skyblue", "lightskyblue", "deepskyblue", "dodgerblue", "cornflowerblue", "steelblue", "royalblue", "blue", "mediumblue", "darkblue", "navy", "midnightblue", "pink", "lightpink", "hotpink", "deeppink", "palevioletred", "mediumvioletred", "lavender", "thistle", "plum", "violet", "orchid", "fuchsia", "magenta", "mediumorchid", "mediumpurple", "blueviolet", "darkviolet", "darkorchid", "darkmagenta", "purple", "indigo", "darkslateblue", "slateblue", "mediumslateblue", "gainsboro", "lightgray", "silver", "darkgray", "gray", "dimgray", "lightslategray", "slategray", "darkslategray", "black" ];
  return (
  <>
    <Header />
    <Main colourNames={colourArray} />
  </>   
  )
}

export default App;