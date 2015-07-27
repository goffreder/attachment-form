export default class InputField extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        testprop2: React.PropTypes.any.isRequired
    }

    validate() {
        console.log('validating');
    }

    render() {
        return null;
    }
}
