
import PropTypes from 'prop-types';
import React     from 'react';

export default class List extends React.Component {
    static propTypes = {
        items: PropTypes.array
    }

    composeItems = props => {
        const items = [];

        for (const i in props.items) {
            console.log(props.items[i]);

            const emptyUrls = ['', 'self', 'nsfw', 'image', 'default', 'spoiler'];

            let thumbImgUrl = props.items[i].data['thumbnail'];

            if (emptyUrls.indexOf(thumbImgUrl) > -1) {
                // URL is invalid/broken - use default (reddit icon) instead
                thumbImgUrl = 'http://aux2.iconspalace.com/uploads/reddit-icon-256-759745339.png';
            }

            items.push(
                <li key={`li-${props.items[i].data['id']}`}>
                    <div>
                        <img src={`${thumbImgUrl}`} />
                    </div>
                    <label>{props.items[i].data['title']}</label>
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
