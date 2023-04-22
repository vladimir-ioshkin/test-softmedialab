export const getFormattedAmount = (amount: string | number, showCurrency = false) => {
    const value = Number(amount);
    if (!value) return '';

    return showCurrency
        ? Intl.NumberFormat('ru-RU', { minimumFractionDigits: 0, maximumFractionDigits: 0, style: 'currency', currency: 'RUB' }).format(value)
        : Intl.NumberFormat('ru-RU').format(value);
}
