/**
 * 保留两位小数 补零 不四舍五入
 * @param num
 * @returns {*}
 */
function keepTwoDecimalPlacesNoRounding(num: number): string {
    // 转换为字符串
    let numStr = num.toString();
    // 分割整数部分和小数部分
    let parts = numStr.split('.');
    if (parts.length === 1) {
        parts[1] = ''
    }
    // 小数点后添加两个0
    parts[1] += '00';
    // 裁切小数部分前两位
    parts[1] = parts[1].substring(0, 2);
    // 返回补零后的小数点结果
    return parts.join('.');
}

/**
 * 保留两位小数 补零 四舍五入
 * @param num
 * @returns {number}
 */
function keepTwoDecimalPlacesRounding(num: number): string {
    let newNum: string = ''
    try {
        const fixedNum = Number(num.toFixed(2))
        newNum = keepTwoDecimalPlacesNoRounding(fixedNum);
    }catch (e) {
        throw new RangeError('RangeError: toFixed () digits参数必须介于0和100之间');
    }
    return newNum;
}

export {keepTwoDecimalPlacesNoRounding, keepTwoDecimalPlacesRounding};