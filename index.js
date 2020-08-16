var Chain3 = require('./lib/chain3');

// dont override global variable
if (typeof window !== 'undefined' && typeof window.Chain3 === 'undefined') {
    window.Chain3 = Chain3;
}

// Add window TTC
if ( typeof window !== 'undefined' && typeof window.TTC === 'undefined'){
    window.TTC = Chain3;
}

module.exports = Chain3;
