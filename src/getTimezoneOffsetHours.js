function getTimeZoneOffsetHours() {
    const date = new Date();
    return date.getTimezoneOffset() / 60;
}

module.export = getTimeZoneOffsetHours;
