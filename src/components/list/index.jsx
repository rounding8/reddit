
import PropTypes from 'prop-types';
import React     from 'react';

export default class List extends React.Component {
    static propTypes = {
        items: PropTypes.array
    }

    componentDidMount() {
        console.log('=> List.componentDidMount()');
    }

    composeItems = props => {
        const items = [];

        for (const i in props.items) {
            console.log(props.items[i]);

            items.push(
                <li key={`li-${props.items[i].data['id']}`}>
                    {props.items[i].data['title']}
                </li>
            );
        }

        return items;
    }

    render() {
        let component = null;

        if (this.props.items && this.props.items.length > 0) {
            const items = this.composeItems(this.props);

            console.log(items);

            component = <ul>{items}</ul>;
        }

        return component;
    }
}
