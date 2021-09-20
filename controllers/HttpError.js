class HttpError extends Error {
  constructor(error, code) {
    super(error)
    this.code = code
  }
}

module.exports = HttpError