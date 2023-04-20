export interface IWage {
    period: WagePeriod;
    withoutTax: boolean;
    amount: string;
}

export enum WagePeriod {
    MonthlyWage = 'monthly_wage',
    MinimalWage = 'minimal_wage',
    DailyWage = 'daily_wage',
    HourlyWage = 'hourly_wage',
}
