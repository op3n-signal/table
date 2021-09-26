//reset the counter

import * as functions from './functions.js';
import * as switchMe from './switcharoo.js';

(function() {
    const allHeadings = document.querySelectorAll('.heading-box');
    const allButtonAreas = document.querySelectorAll('.button-here');

    // creating heading and footer
    // you can change the plan data at the heading here
    functions.Details('Basic', '$297', 'Basic', 'billed yearly');
    functions.Details('Business', '$697', 'Business');
    functions.Details('Pro', '$897', 'Pro');
    // creating buttons for header and footer
    functions.loopMe(allHeadings, 1, functions.headingDetails);
    functions.loopMe(allButtonAreas, 0, '');

    // listening for the list item clicked on
    document.addEventListener('click', functions.isButtonClicked);
    // listening for the previous or next button click
    document.addEventListener('click', switchMe.isSwitched);
})();


