export const secToMin =(seconds: number) : string => {
    return (seconds / 60).toFixed(1)
}


export const formatSeconds =(seconds: number) => {
    const _min = Math.floor(seconds/60)
    const _sec = seconds % 60
    const minText = `${_min} min`
    const secText = `${_sec} sec`
    const connector = 'and'
    const formatText = []

    if(_min>0) {
        formatText.push(minText)        
    }

    if(_min>0 && _sec>0){
        formatText.push(connector)
    }

    if(_sec>0) {
        formatText.push(secText)
    }
    
    return formatText.join(" ")

}