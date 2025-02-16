const domainRegexp = /^https:\/\/((learn.khulnasoft).cloud|www.(khulnasoft.cloud)|github.com\/khulnasoft\/(khulnasoft-cloud)|github.com\/khulnasoft\/(khulnasoft))/

export const getResultsByKey = results => {
  return results.reduce((acc, result) => {
    const matched = result.url.raw.match(domainRegexp)
    const key = matched.find((s, i) => i > 1 && s)
    acc[key] = acc[key] || []
    acc[key].push(result)
    return acc
  }, {})
}
