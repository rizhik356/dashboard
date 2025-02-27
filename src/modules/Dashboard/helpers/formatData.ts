import { Data, Site, Test } from '../types/DasboardData'
import statusColors from '../sources/statusColors'
import siteClasses from '../sources/SiteClasses'

const formatData = (sites: Array<Site>, tests: Array<Test>): Array<Data> => {
  const normalizedSites = sites.map(({ url, id }) => {
    const normalizeUrl = url
      .replace('http://', '')
      .replace('https://', '')
      .replace('www.', '')

    return { id, url: normalizeUrl }
  })

  return tests.map(({ siteId, status, ...rest }) => {
    const currentSite = normalizedSites.find(({ id }) => id === siteId) as Site
    return {
      ...rest,
      status,
      statusColor: statusColors[status],
      siteId,
      url: currentSite.url || 'no site',
      siteClassName: siteClasses[siteId],
    }
  })
}

export default formatData
