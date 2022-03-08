
export const updateObjectInArray = (items:any[],itemId:any,objPropName:any,newObjProps:any) => {
    return items.map(i => {
        if(i[objPropName] === itemId){
            return{...i,...newObjProps}
        }
        return i
    })
}