
export const converters = {
    toFormattedDate: (date) => {
        let year = date.getFullYear();
        let month = date.getMonth()+1;
        let dt = date.getDate();
    
        return month + '/' + dt + '/' + year;
    }
}
