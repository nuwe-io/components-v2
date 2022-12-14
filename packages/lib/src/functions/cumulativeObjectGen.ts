export const cumulativeObjectGen = (segments: any, defaultTitle: any) => {
  return segments.reduce((acc: any, cur: any, curIndex: any) => {
    const newPath =
      curIndex > 1
        ? acc[curIndex - 1].href + '/' + cur
        : (cur !== 'business' ? '/business/' : '/') + cur

    const newLink = {
      href: newPath.includes('project')
        ? newPath.substring(0, newPath.indexOf('&project'))
        : newPath,
      name:
        curIndex === 0
          ? defaultTitle
          : cur.indexOf('?') >= 0
          ? cur.substring(0, cur.indexOf('?'))
          : cur
    }
    acc.push(newLink)

    // console.log('segments', segments)
    // console.log('cur', cur)
    // console.log('acc', acc)
    return acc
  }, [])
}
