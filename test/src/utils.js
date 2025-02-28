const { getWindowsVersion, getIsWindows } = require('../../src/utils')

describe('Utils', () => {
  it('getWindowsVersion returns 10.0 for Windows 10', () => {
    const version = getWindowsVersion('10.0.14393')
    version.should.be.equal('10.0')
  })

  it('getWindowsVersion returns 8.1 for Windows 8.1', () => {
    const version = getWindowsVersion('6.3.9600')
    version.should.be.equal('8.1')
  })

  it('getWindowsVersion returns 8 for Windows 8', () => {
    const version = getWindowsVersion('6.2.9600')
    version.should.be.equal('8.0')
  })

  it('getWindowsVersion returns 7 for Windows 7', () => {
    const version = getWindowsVersion('6.1.9600')
    version.should.be.equal('7.0')
  })

  it('getWindowsVersion returns version as is for non-matching version', () => {
    const nonMatch = '4.7.4-ph+'
    const version = getWindowsVersion(nonMatch)
    version.should.be.equal(nonMatch)
  })

  it('getIsWindows returns true for Windows', () => {
    const platform = getIsWindows('win32')
    platform.should.be.equal(true)
  })

  it('getIsWindows returns false for macOS', () => {
    const platform = getIsWindows('darwin')
    platform.should.be.equal(false)
  })

  it('getIsWindows returns false for linux', () => {
    const platform = getIsWindows('linux')
    platform.should.be.equal(false)
  })
})
