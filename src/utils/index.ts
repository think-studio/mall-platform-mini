

export const isObject = (val: unknown): val is Record<any, any> =>
  val !== null && typeof val === 'object'

export const floatData = (format: any, dataOp: any, mapOps: any) => {
  let mergeFormat = Object.assign({}, format);
  let mergeMapOps = Object.assign({}, mapOps);

  if (Object.keys(dataOp).length > 0) {
    Object.keys(mergeFormat).forEach((keys) => {
      if (mergeMapOps.hasOwnProperty(keys)) {
        const tof = typeof mergeMapOps[keys];
        if (tof == 'function') {
          mergeFormat[keys] = mergeMapOps[keys](dataOp);
        }

        if (tof == 'string') {
          mergeFormat[keys] = dataOp[mergeMapOps[keys]];
        }
      } else {
        if (dataOp[keys]) mergeFormat[keys] = dataOp[keys];
      }
    });
    return mergeFormat;
  }

  return format;
};

export const errorImg = '//img12.360buyimg.com/imagetools/jfs/t1/180776/26/8319/4587/60c094a8E1ef2ec9d/940780b87700b1d3.png'

