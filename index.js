const React = require('react');
const {withNavigationFocus} = require('react-navigation');
const hoistNonReactStatics = require('hoist-non-react-statics');

module.exports = functin (Comp) {
    class Hoc extends React.Component {
        shouldComponentUpdate(nextProps) {
            return nextProps.isFocused;
        }
        render() {
            return React.createElement(Comp, this.props);
        }
    }
    return hoistNonReactStatics(withNavigationFocus(Hoc), Comp);
}
