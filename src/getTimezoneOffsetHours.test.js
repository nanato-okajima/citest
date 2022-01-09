const getTimeZoneOffsetHours = require('./getTimezoneOffsetHours')

test('getTimezoneOffsetHours return -9', () => {
    expect(getTimeZoneOffsetHours()).toBe(-9)
})
