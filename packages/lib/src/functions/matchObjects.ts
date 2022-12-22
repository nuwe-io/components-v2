const matchObjects = (template: any, templateArray: any) =>
  templateArray?.map((item: any, index: number) => {
    const obj = {
      id: 0,
      uuid: ''
    }

    for (const key in item) {
      if (Object?.prototype?.hasOwnProperty?.call(template, key)) {
        obj[key] = item[key]
        obj.uuid = item.id
      }
    }
    obj.id = index
    return obj
  })

export default matchObjects
