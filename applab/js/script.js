const MONTHLY_TAB = 'monthly';
const ANNUALLY_TAB = 'annually';

function setActivePriceTab (tab) {
    if (tab === MONTHLY_TAB) {
        document.querySelector(`#${ MONTHLY_TAB }`).classList = 'active';
        document.querySelector(`#${ ANNUALLY_TAB }`).classList = '';

        document.querySelector('#item-one-price-value').innerHTML = '$0'
        document.querySelector('#item-two-price-value').innerHTML = '$99'
        document.querySelector('#item-one-price-time').innerHTML = 'month'
        document.querySelector('#item-two-price-time').innerHTML = 'month'
    } else {
        document.querySelector(`#${ MONTHLY_TAB }`).classList = '';
        document.querySelector(`#${ ANNUALLY_TAB }`).classList = 'active';

        document.querySelector('#item-one-price-value').innerHTML = '$0'
        document.querySelector('#item-two-price-value').innerHTML = '$999'
        document.querySelector('#item-one-price-time').innerHTML = 'annual'
        document.querySelector('#item-two-price-time').innerHTML = 'annual'
    }
}

function expandSection(DOMNodeId, item) {
    if (!DOMNodeId) return;

    document.querySelector(`#${ DOMNodeId }`).classList.toggle('hidden');
}

function openMobileMenu() {
    let scrollbarWidthPx = window.innerWidth - document.body.clientWidth;

    document.querySelector('header').classList.add('mobile-menu-active');
    document.querySelector('body').style.overflow = 'hidden';
    // prevent page to jump due scrollbar missing
    document.querySelector('body').style.marginRight = `${ scrollbarWidthPx }px`;
}

function closeMobileMenu() {
    document.querySelector('header').classList.remove('mobile-menu-active');
    document.querySelector('body').style.overflow = 'auto';
    document.querySelector('body').style.marginRight = 0;
}

