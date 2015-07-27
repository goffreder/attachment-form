import assign from 'react/lib/Object.assign';

export default (Component) => {
    assign(Component.propTypes, Component.__proto__.propTypes);
};
