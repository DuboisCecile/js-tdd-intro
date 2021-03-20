function capitalizeFirst(input) {
    const capInput = input.split(' ').map(element => element.charAt(0).toUpperCase() + element.substring(1));
    return capInput.join(' ');
}

module.exports = capitalizeFirst;