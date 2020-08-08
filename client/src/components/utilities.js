const formatWithCommas = (valueIn) => {
    if(!valueIn) 
        return 0;
    else
        return valueIn.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

module.exports = formatWithCommas;