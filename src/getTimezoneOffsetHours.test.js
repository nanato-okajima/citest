const { expect } = require('@jest/globals')
const { test } = require('picomatch')
const getTimeZoneOffsetHours = require('./getTimezoneOffsetHours')

test('getTimezoneOffsetHours return -9', () => {
    expect(getTimeZoneOffsetHours()).toEqual(-9)
})
