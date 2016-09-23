import React from 'react';
import ReactDOM from 'react-dom';

class NewCategory extends React.Component {
  //Todo: dodac ikonke kategori i w kolorach cos zeby bylo widać jaki to kolor

  changeColor() {
    const selected = $('#color').val();
    $('#selectedColor').css('background-color', selected);
  }

  render() {
    const colorTable = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];
    return (
      <div>
        <h1>Add new category</h1>
        <form className="new-cat" onSubmit={this.createCat.bind(this)}>
          <table width="100%">
            <tbody>
              <tr>
                <td>Category name:</td>
                <td><input ref="catName" type="text" style={{width: '100%'}} /></td>
              </tr>
              <tr>
                <td>Category color:</td>
                <td><select id="color" ref="color" style={{width: '100%'}} onChange={this.changeColor.bind(this)}><option value="none">(none)</option>
                {colorTable.map((color) => {
                  return (
                    <option key={color} value={color}>{color}</option>
                  )
                })}
                </select></td>
              </tr>
              <tr>
                <td>Selected color:</td>
                <td id="selectedColor"></td>
              </tr>
              <tr>
                <td></td>
                <td><button type="submit" style={{width: '100%'}}>Add category</button></td>
              </tr>
            </tbody>
          </table>
      </form>
      </div>
    );
  }
  createCat(event) {
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    const {createCat} = this.props;
    const { color, catName} = this.refs;
    createCat(catName.value, color.value);
    ReactDOM.findDOMNode(this.refs.color).value = 'none';
    ReactDOM.findDOMNode(this.refs.catName).value = '';
  }
}

export default NewCategory;
