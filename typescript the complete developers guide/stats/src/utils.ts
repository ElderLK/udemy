export const dateStringToDate = (dateString: string): Date => {
    const dateParts = dateString.split('/').map((value: string) : number => parseInt(value));
    const [day, month, year] = dateParts;
    return new Date(year, month - 1, day);
}