import templatesStore from './stores/templatesStore';

import userActions from './actions/userActions';

import AttachmentForm from './components/AttachmentForm';
import TemplatesList from './components/TemplatesList';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = templatesStore.getState();

        this.handleStoreChange = this.handleStoreChange.bind(this);
    }

    componentDidMount() {
        templatesStore.addChangeListener(this.handleStoreChange);

        userActions.userLoadTemplates();
    }

    componentWillUnmount() {
        templatesStore.removeChangeListener(this.handleStoreChange);
    }

    handleStoreChange() {
        this.setState(templatesStore.getState());
    }

    render() {
        const templates = this.state.templates || [];
        const form = this.state.selectedTemplate
            ? <AttachmentForm template={this.state.selectedTemplate}/>
            : <div>Select a template from the list on the left</div>;

        return (
            <div>
                <div className="left">
                    <TemplatesList templates={templates}/>
                </div>
                <div className="right">
                    {form}
                </div>
            </div>
        );
    }
}

React.render(
    <App />,
    document.getElementById('app')
);
