
import PropTypes from 'prop-types';
import React     from 'react';

import List from 'components/list';

export default class Home extends React.Component {
    static propTypes = {
        app: PropTypes.object.isRequired
    }

    componentDidMount() {
        console.log('=> Home.componentDidMount()');
    }

    render() {
        return <List items={this.props.app['data'].data['data'].children} />;
    }
}
