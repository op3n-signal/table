export const headingDetails = [];
export const listDetails = [
    //you may add, change, or remove data here
    [ // general
        ['# of sites', 'Media manager', 'External integrations', 'Team members', '\'Powered by\' logo'],
        ['1', '&#10004;', '&#10004;', 0, '&#10004;'],
        ['5', '&#10004;', '&#10004;', 3, '&#10004;'],
        ['15', '&#10004;', '&#10004;', 10, '&#10004;']
    ],
    [ // funnel builder
        ['# of funnels', '# of template groups', 'Split testing', 'Mobile optimizer', 'Built-in conversion tools', 'Html download', 'Save as template', 'Clone page', 'Unique visitors', 'Xfer funnels'],
        ['10', '5', '&#10060;', '&#10004;', '&#10004;', '&#10060;', '&#10060;', '&#10004;', '25,000', '&#10060;'],
        ['100', '15', '&#10004;', '&#10004;', '&#10004;', '&#10004;', '&#10004;', '&#10004;', '100,000', '&#10060;'],
        ['500', '99999', '&#10004;', '&#10004;', '&#10004;', '&#10004;', '&#10004;', '&#10004;', 'unlimited', '&#10004;']
    ],
    [ //product builder
        ['# of products', 'Member module products', 'Digital products', 'Instasuite check-out', 'Multiple price points', 'Coupons & discounts', 'Automation actions', 'Email', 'Redirect URL', 'Upload file', 'ISDPN', 'Export orders to csv'],
        ['10', '&#10004;', '&#10004;', '&#10004;', '&#10004;', '&#10060;', '&#10060;', '&#10004;', '&#10004;', '&#10060;', '&#10060;', '&#10004;'],
        ['50', '&#10004;', '&#10004;', '&#10004;', '&#10004;', '&#10004;', '&#10004;', '&#10004;', '&#10004;', '&#10004;', '&#10004;', '&#10004;'],
        ['250', '&#10004;', '&#10004;', '&#10004;', '&#10004;', '&#10004;', '&#10004;', '&#10004;', '&#10004;', '&#10004;', '&#10004;', '&#10004;']
    ],
    [ //membership builder
        ['Built-in SMTP', '# of themes', '# of members', 'Member tags', 'Drip-feed', 'Member progress tracking', 'Quiz tracking', 'Design Editor'],
        ['&#10004;', '1', '1,000', '&#10060;', '&#10060;', '&#10004;', '&#10004;', '&#10004;'],
        ['&#10004;', '3', '5,000', '&#10004;', '&#10004;', '&#10004;', '&#10004;', '&#10004;'],
        ['&#10004;', '5', '100,000', '&#10004;', '&#10004;', '&#10004;', '&#10004;', '&#10004;']
    ],
    [  // list builder
        ['SMTP setup', 'Blacklist domain, email, IP', 'Black role-based email', '# of lists', '# of subscribers', 'Manual/Bulk Import', 'List segmentation', 'Automations', 'Option forms', 'Broadcasts', 'Sequences', 'Save email templates'],
        ['own', '&#10004;', '&#10004;', '10', '1,000', '&#10004;', '&#10060;', '&#10060;', '&#10004;', '&#10004;', '&#10004;', '&#10004;'],
        ['own', '&#10004;', '&#10004;', '100', '5,000', '&#10004;', '&#10004;', '&#10004;', '&#10004;', '&#10004;', '&#10004;', '&#10004;'],
        ['own', '&#10004;', '&#10004;', 'unlimited', '100,000', '&#10004;', '&#10004;', '&#10004;', '&#10004;', '&#10004;', '&#10004;', '&#10004;']
    ],
    [   // blog builder
        ['Widgets', 'Menu', 'Theme customization', '# of themes', 'Number of posts', 'Post categories'],
        ['&#10004;', '&#10004;', '&#10004;', '1', 'unlimited', '&#10004;'],
        ['&#10004;', '&#10004;', '&#10004;', '3', 'unlimited', '&#10004;'],
        ['&#10004;', '&#10004;', '&#10004;', '3', 'unlimited', '&#10004;']
    ],
    [   // affiliate center
        ['Built-in SMTP', 'Promotion tools', 'Manage Commissions', '# of affiliates', '# of themes', 'Theme Customization'],
        ['&#10060;', '&#10060;', '&#10060;', '&#10060;', '&#10060;', '&#10060;'],
        ['&#10004;', '&#10004;', '&#10004;', '1,000', '1', '&#10004;'],
        ['&#10004;', '&#10004;', '&#10004;', '5,000', '1', '&#10004;']
    ],
    [   // support
        ['# of staff', 'Built-in SMTP', '# of canned responses', 'knowledge bases', '# of themes'],
        ['&#10060;', '&#10060;', '&#10060;', '&#10060;', '&#10060;'],
        ['3', '&#10004;', '20', '&#10004;', '1'],
        ['10', '&#10004;', '100', '&#10004;', '1']
    ]
    //create more down here
];
let currentClickvalue = false;
let counter = 0;
let counterArr = [];
let icons = ['&#43;','&#8722;'];
// constructor functin to create heading data
export function Details(plan, price, type, billTime = '') {
    headingDetails.push({ plan: plan, price: price, type: type, billTime: billTime });
}

// used to create heading and footer content
export function loopMe(arr, start, content = undefined) {
    for (let i = start; i < arr.length; i++) {
        if (content == headingDetails)
            arr[i].innerHTML += `
            <h6 style="font-size: 16px; margin-top: 15px;">${content[i - 1].plan}</h6>
            <span class="gray" style="font-size: 26px; font-weight: bolder;">${content[i - 1].price}</span>
            <span class="gray" style="font-size: 10px;">${content[0].billTime}</span>
            <button class="btn btn-primary btn-${i}">Buy ${content[i - 1].type}</button>`;
        else {
            arr[i].innerHTML = `<button class="btn btn-primary btn-${i + 1}">Buy ${headingDetails[i].type}</button>`;
        }
    }
}

export const isButtonClicked = (event) => {
    // getting the id of the button clicked on, which matches the index of the list details array
    let index = event.target.id;
    if (event.target.closest('.list-heading') && event.target.closest('.list-heading').parentElement.lastChild.previousSibling.children.length < 2) {
        currentClickvalue = false;
        // all the elements in the current btn clicked parent
        const allElements = event.target.parentElement.parentElement.children;
    
        let partAndEl = changeElement(index);
        //here I change the "+" to "-" because I clicked on an item
        partAndEl[1].innerHTML = icons[1] + ' ' + partAndEl[0];

        // adding the data to each area clicked
        for (let j = 0; j < allElements.length; j++) {
            for (let z = 0; z < listDetails[index][0].length; z++) {
                let node = document.createElement('div');
                node.innerHTML = listDetails[index][j][z];
                allElements[j].lastChild.previousSibling.appendChild(node);
            }
        }
        //gets false value every time in here, which means to delete all other list items except the current one
        clear(index, false);

    } else if (event.target.closest('.list-heading')) {
        currentClickvalue = !currentClickvalue;
        //true here, which means we clicked on the current item which was already open, and to close it.
        clear(index, true);
    }
}

//functions removes items from the lists
function clear(id, bool) {
    if (counterArr.length === 0 || counterArr[counterArr.length - 1] !== id) {
        counterArr.push(id);
        counter = 0;
        if (counterArr.length > 2) {
            counterArr.shift();
        }
    }
    // getting the class name of the lists holding the current data showing
    let className = getClassName(id);

    // the condition is if the user clicks on an item and then clicks on the same one again
    // if so, we only hide and show the items
    if (bool === true) {
        let list = document.querySelectorAll('.' + className);
        counter++;
        let partAndEl = changeElement(id);
        if (counter % 2 !== 0) {
            // hide items
            list.forEach(x => x.style.display = 'none');
            //here I change the "-" to "+" when item is open
            partAndEl[1].innerHTML = icons[0] + ' ' + partAndEl[0];
        } else {
            // show items
            list.forEach(x => x.style.display = 'block');
            //here I change the "+" to "-" when item is closed
            partAndEl[1].innerHTML = icons[1] + ' ' + partAndEl[0];
        }

    } else {
        // if I click on a new button, I remove the list items from the previous one clicked
        if(counterArr.length > 1) {
            let partAndEl = changeElement(counterArr[0]);
            //here I change the "-" to "+" of previous item clicked
            partAndEl[1].innerHTML = icons[0] + ' ' + partAndEl[0];
            //getting the previous list clicked
            let previousClass = getClassName(counterArr[0]);
            let list = document.querySelectorAll('.' + previousClass);
            // removing the items here and reseting the display style
            list.forEach(x => {
                x.innerHTML = '';
                x.style.display = 'block';
            });
        }
        
    }
}

// getting the class name by the id
function getClassName(id) {
    let value;

    switch(+id) {
        case 0:
            value = 'one';
            break;
        case 1:
            value = 'two';
            break;
        case 2:
            value = 'three';
            break;
        case 3:
            value = 'four';
            break;
        case 4:
            value = 'five';
            break;
        case 5:
            value = 'six';
            break;
        case 6:
            value = 'seven';
            break;
        default:
            value = 'eight';
    }

    return value;
}
// this is a function I call to return the element with the id I pass in, which would be "+ General", 
//it also returns the second part of the innerHTML, which is only "General", not the "+"
function changeElement(num) {
    let el = document.getElementById(num);
    let secondPart = el.innerHTML.split(' ')[1];
    return [secondPart, el];
}