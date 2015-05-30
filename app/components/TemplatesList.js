import userActions from '../actions/userActions';

export default class TemplateList extends React.Component {
    render() {
        var templateLinks = this.props.templates.map((template) => {
            return (
                <li key={template.name}>
                    <a href="#" onClick={() => {
                        userActions.userSelectTemplate(template.name);
                    }}>{template.label}</a>
                </li>
            );
        });

        return (
            <div>
                <h3>Templates</h3>
                <ul>
                    {templateLinks}
                </ul>
            </div>
        );
    }
}

TemplateList.propTypes = {
    templates: React.PropTypes.arrayOf(React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        label: React.PropTypes.string.isRequired
    })).isRequired
};
