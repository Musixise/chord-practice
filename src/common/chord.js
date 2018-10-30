const combineChordParser = chordParserList => keys => {
    let result = false;
    chordParserList.forEach(element => {
        if (element(keys)) {
            result = element(keys)
        }
    })
    return result
}
const getKeyName = key => {
    const keynames = ['C', ['Db', 'Db'], 'D', ['Eb', 'Eb'], 'E', 'F', ['Gb', 'Gb'], 'G', ['Ab', 'Ab'], 'A', ['Bb', 'Bb'], 'B', 'C']
    const direction = key - 60 >= 0 ? 'R' : 'L';
    const distance = Math.abs(key - 60)
    let result = null;

    if (direction === 'L') {
        result = keynames[12 - (distance % 12)]
    }
    if (direction === 'R') {
        result = keynames[distance % 12]
    }
    if(result.length === 2) {
      result = result[Math.round(Math.random())]
    }

    return result;
}
/**
 * 
 * @param {要判断的输入} keys 
 * @param {匹配的规则} matcher 
 * @param {和弦名字} chrodName 
 */
const isChord = (keys, matcher, chrodName) => {
    if (keys.length !== 3) { return false }
    const _keys = keys.map((item, index) => index === 0 ? item : item + keys[0])
    let result = ""

    matcher.forEach((item, index) => {
        if (item[0] === keys[1] && item[1] === keys[2]) {
            result = getKeyName(_keys[index]);
        }
    })
    return result.length ? `${result} ${chrodName}` : false;
}
/**
 * 
 * @param {要判断的输入} keys 
 * @param {匹配的规则} matcher 
 * @param {和弦名字} chrodName 
 */
const isFChord = (keys, matcher, chrodName) => {
    if (keys.length !== 4) { return false }
    const _keys = keys.map((item, index) => index === 0 ? item : item + keys[0])
    let result = ""

    matcher.forEach((item, index) => {
        if (item[0] === keys[1] && item[1] === keys[2] && item[2] === keys[3]) {
            result = getKeyName(_keys[index]);
        }
    })
    return result.length ? `${result} ${chrodName}` : false;
}
// 判断是否是大三和弦(带转位)
const isMajor = keys => {
    if (keys.length !== 3) { return false }
    // 数组里面分别匹配 root 二转位 一转位 
    const matchArray = [[4, 7], [5, 9], [3, 8]]
    const chrodName = "";

    return isChord(keys, matchArray, chrodName)
}

// 判断是否小三和弦(带转位)
const isMinor = keys => {
    if (keys.length !== 3) {return false }
    // 数组里面分别匹配 root 二转位 一转位 
    const matchArray = [[3, 7],[5, 8], [4, 9]]
    const chrodName = "m"

    return isChord(keys, matchArray, chrodName)
}

// 判断增三和弦(带转位)
const isCaug = keys => {
    if (keys.length !== 3) {return false }

    const matchArray = [[4, 8]]
    const chrodName = "aug"

    return isChord(keys, matchArray, chrodName)
}

// 判断减三和弦(带转位)
const isDim = keys => {
    if (keys.length !== 3) {return false }
    // 数组里面分别匹配 root 二转位 一转位 
    const matchArray = [[3, 6]]
    const chrodName = "dim"

    return isChord(keys, matchArray, chrodName) 
}
// 判断小六和弦(带转位)
const ism6 = keys => {
    if (keys.length !== 3) {return false }
    // 数组里面分别匹配 root 二转位 一转位 
    const matchArray = [[3, 9], [], [6, 9]]
    const chrodName = "m6"

    return isChord(keys, matchArray, chrodName)   
}
// 判断maj7
const isMaj7 = keys => {
    if (keys.length !== 3) {return false }
    // 数组里面分别匹配 root 二转位 一转位 
    const matchArray = [[4, 11], [1, 5], [7, 8]]
    const chrodName = "maj7"

    return isChord(keys, matchArray, chrodName)       
}

const is7 = keys => {
    if (keys.length !== 3) {return false }
    // 数组里面分别匹配 root 二转位 一转位 
    const matchArray = [[4, 10], [2, 6], [6, 8]]
    const chrodName = "7"

    return isChord(keys, matchArray, chrodName)       
}
const ism7 = keys => {
    if (keys.length !== 3) {return false }
    // 数组里面分别匹配 root 二转位 一转位 
    const matchArray = [[3, 10], [2, 5], [7, 9]]
    const chrodName = "m7"

    return isChord(keys, matchArray, chrodName)       
}

const isMMaj7 = keys => {
    if (keys.length !== 3) {return false }
    // 数组里面分别匹配 root 二转位 一转位 
    const matchArray = [[3, 11], [8, 9]]
    const chrodName = "mMaj7"

    return isChord(keys, matchArray, chrodName)       
}
const isSus2 = keys => {
    if (keys.length !== 3) {return false }
    // 数组里面分别匹配 root 二转位 一转位 
    const matchArray = [[2, 7], [], [5, 10]]
    const chrodName = "sus2"

    return isChord(keys, matchArray, chrodName)     
}
const isSus4 = keys => {
    if (keys.length !== 3) {return false }
    // 数组里面分别匹配 root 二转位 一转位 
    const matchArray = [[5, 7], [2, 7]]
    const chrodName = "sus4"

    return isChord(keys, matchArray, chrodName)   
}
const isAdd9 = keys => {
    if (keys.length !== 3) {return false }
    // 数组里面分别匹配 root 二转位 一转位 
    const matchArray = [[2, 4]]
    const chrodName = "add9"

    return isChord(keys, matchArray, chrodName)   
}
/** ----------- 以下判断四个按键的和弦 --------------- */
const isFMaj7 = keys => {
  if(keys.length !== 4) { return false }
  // 数组里面分别匹配root, 三转位，二转位， 一转位
  const matchArray = [[4, 7, 11],[1, 5, 8],[4, 5, 9],[3, 7, 8]]
  const chrodName = "Maj7"

  return isFChord(keys, matchArray, chrodName)   
}
const isF7 = keys => {
    if(keys.length !== 4) { return false }
    // 数组里面分别匹配root, 三转位，二转位， 一转位
    const matchArray = [[4, 7, 10],[2, 6, 9],[3, 5, 9],[3, 6, 8]]
    const chrodName = "7"
  
    return isFChord(keys, matchArray, chrodName)   
}
const isFm7 = keys => {
    if(keys.length !== 4) { return false }
    // 数组里面分别匹配root, 三转位，二转位， 一转位
    const matchArray = [[3, 7, 10],[2, 5, 9],[3, 5, 8],[4, 7, 9]]
    const chrodName = "m7"
  
    return isFChord(keys, matchArray, chrodName)   
}
const isFmMaj7 = keys => {
    if(keys.length !== 4) { return false }
    // 数组里面分别匹配root, 三转位，二转位， 一转位
    const matchArray = [[3, 7, 11],[1, 4, 7],[1, 5, 8],[4, 8, 9]]
    const chrodName = "mMaj7"
  
    return isFChord(keys, matchArray, chrodName)   
}
const isF6 = keys => {
    if(keys.length !== 4) { return false }
    // 数组里面分别匹配root, 三转位，二转位， 一转位
    const matchArray = [[4, 7, 9],[3, 7, 10],[],[3, 5, 8]]
    const chrodName = "6"
  
    return isFChord(keys, matchArray, chrodName)   
}
const isFAdd9 = keys => {
    if(keys.length !== 4) { return false }
    // 数组里面分别匹配root, 三转位，二转位， 一转位
    const matchArray = [[2, 4, 7],[5, 7, 9],[3, 8, 10],[2, 5, 10]]
    const chrodName = "add9"
  
    return isFChord(keys, matchArray, chrodName)   
}
const isFaugMaj7 = keys => {
    if(keys.length !== 4) { return false }
    // 数组里面分别匹配root, 三转位，二转位， 一转位
    const matchArray = [[4, 8, 3],[1, 5, 9],[3, 4, 8],[4, 7, 8]]
    const chrodName = "augMaj7"
  
    return isFChord(keys, matchArray, chrodName)   
}
const isFaug7 = keys => {
    if(keys.length !== 4) { return false }
    // 数组里面分别匹配root, 三转位，二转位， 一转位
    const matchArray = [[4, 8, 10],[2, 6, 10],[2, 4, 8],[4, 6, 8]]
    const chrodName = "aug7"
  
    return isFChord(keys, matchArray, chrodName)   
}
const isFmadd9 = keys => {
    if(keys.length !== 4) { return false }
    // 数组里面分别匹配root, 三转位，二转位， 一转位
    const matchArray = [[2, 3, 7],[5, 7, 8],[4, 9, 11],[1, 5, 9]]
    const chrodName = "madd9"
  
    return isFChord(keys, matchArray, chrodName)   
}
const isFdimMaj7 = keys => {
    if(keys.length !== 4) { return false }
    // 数组里面分别匹配root, 三转位，二转位， 一转位
    const matchArray = [[3, 6, 11],[1, 4, 7],[5, 6, 9],[3, 8, 9]]
    const chrodName = "dimMaj7"
  
    return isFChord(keys, matchArray, chrodName)   
}
const isFdim7 = keys => {
    if(keys.length !== 4) { return false }
    // 数组里面分别匹配root, 三转位，二转位， 一转位
    const matchArray = [[3, 6, 9]]
    const chrodName = "dim7"
  
    return isFChord(keys, matchArray, chrodName)   
}
const isFm7b5 = keys => {
    if(keys.length !== 4) { return false }
    // 数组里面分别匹配root, 三转位，二转位， 一转位
    const matchArray = [[3, 6, 10]]
    const chrodName = "m7b5"
  
    return isFChord(keys, matchArray, chrodName)   
}
const isFm6 = keys => {
    if(keys.length !== 4) { return false }
    // 数组里面分别匹配root, 三转位，二转位， 一转位
    const matchArray = [[3, 7, 9],[],[2, 5, 8],[4, 6, 9]]
    const chrodName = "m6"
  
    return isFChord(keys, matchArray, chrodName)   
}
const isFmadd11 = keys => {
    if(keys.length !== 4) { return false }
    // 数组里面分别匹配root, 三转位，二转位， 一转位
    const matchArray = [[3, 5, 7],[5, 8, 10],[2, 7, 10],[2, 4, 9]]
    const chrodName = "madd11"
  
    return isFChord(keys, matchArray, chrodName)   
}
const chord = keys => {
    const sortKeys = keys.sort((a, b) => a - b)
    const cut = sortKeys.map((item, index) => index === 0 ? item : (item - sortKeys[0]) % 12)

    const result = combineChordParser(
      [
        isMajor, 
        isMinor, 
        isCaug, 
        isDim, 
        ism6, 
        isMaj7, 
        is7,
        ism7,
        isMMaj7,
        isSus2,
        isSus4,
        isFMaj7,
        isF7,
        isFm7,
        isFmMaj7,
        isF6,
        isFAdd9,
        isFaugMaj7,
        isFaug7,
        isFmadd9,
        isFdimMaj7,
        isFdim7,
        isFm7b5,
        isFm6,
        isFmadd11,
        isAdd9,
      ])(cut)
    return result;

}

export default chord
