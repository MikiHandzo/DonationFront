export function truncateWithEllipsis(inputString:string, maxLength = 300) {
    if (inputString.length <= maxLength) {
        return inputString;
    } else {
        return inputString.substring(0, maxLength) + '...';
    }
}