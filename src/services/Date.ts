export const formatDate = (date: Date): string => {
    const month = date.getMonth() + 1;
    const formatedMonth = month < 10 ? "0" + month : month;
    const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

    return date.getFullYear() + '-' + formatedMonth + '-' + day;
  }