import React from 'react';

const Aside = ({ children, id }) => (
  <div className="uk-offcanvas-content">
    <button className="uk-button uk-button-default uk-margin-small-right" type="button" uk-toggle="target: #offcanvas-usage">Timeclock</button>

    {children}

    <div id="offcanvas-usage" uk-offcanvas="true">
        <div className="uk-offcanvas-bar">

            <button className="uk-offcanvas-close" type="button" uk-close="true"></button>

            <h3>Title</h3>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

        </div>
    </div>

</div>
);

export default Aside;