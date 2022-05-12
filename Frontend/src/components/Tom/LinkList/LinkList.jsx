import React from "react";

import "./LinkList.css";
/**
 * A Javascript which is used to display links. The information is defined in the config file for each widget.
 *
 * Information is then assigned to the defined variables after being mapped from the props
 *
 * @author Thomas Ashby
 */

const LinkList = (props) => {
    const linkMarkup = props.options.map((link) => (
        <li key={link.id} className="link-list-item">
            <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-list-item-url"
            >
                {link.text}
            </a>
        </li>
    ));

    return <ul className="link-list">{linkMarkup}</ul>;
};

export default LinkList;