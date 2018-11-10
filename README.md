# render-when-focused

A decorator function that will suspend a [react-navigation](https://www.npmjs.com/package/react-navigation) view while it's not visible, for example in a tab view or a stack navigator. Once the view becomes visible again, it gets re-rendered.

This is especially useful if you use redux which triggers a lot of re-renders.

[Read the accompanying Medium post here.](https://medium.com/@jonnyburger/speed-up-your-react-native-app-using-this-react-navigation-hack-ae2d12bf3493) 

## Usage

```js
import renderWhenFocused from 'render-when-focused';

export default renderWhenFocused(
    connect(mapStateToProps)(MyView)
);
```

## Source
It's not magic. This is the full source code of the function:

```js
const React = require('react');
const {withNavigationFocus} = require('react-navigation');
const hoistNonReactStatics = require('hoist-non-react-statics');

module.exports = function(Comp) {
	class Hoc extends React.Component {
		shouldComponentUpdate(nextProps) {
			return nextProps.isFocused;
		}
		render() {
			return React.createElement(Comp, this.props);
		}
	}
	return hoistNonReactStatics(withNavigationFocus(Hoc), Comp);
};
```

## Author
[Jonny Burger](https://jonny.io)

## License
MIT
