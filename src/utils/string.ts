/**
 * * format2ShortId
 * Convert long id string to short id format
 * Example: 4x04755adeeb35be235b2835dffd32211 -> 4x04755...221
 *
 * @param id
 * @param firstCharacterQty
 * @param lastCharacterQty
 * @returns
 */
export function format2ShortId(str: string, firstCharacterQty: number = 3, lastCharacterQty: number = 3) {
    if (!str) {
        return '';
    }
    let calculatedFirstCharacterQty = firstCharacterQty;
    let calculatedLastCharacterQty = str.length - lastCharacterQty;
    let moreCharater = '...';

    if (firstCharacterQty + lastCharacterQty >= str.length) {
        calculatedFirstCharacterQty = str.length;
        calculatedLastCharacterQty = str.length;
        moreCharater = '';
    }

    return `${str.substring(0, calculatedFirstCharacterQty)}${moreCharater}${str.substring(
        calculatedLastCharacterQty,
        str.length,
    )}`;
}
