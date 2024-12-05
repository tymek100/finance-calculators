from numpy_financial import pv, nper

TOTAL = 38673
OVERPAYMENT = 50

apr = 0.132
monthly_payment = -358.09
monthly_rate = apr / 12
remaining_payments = 38673 / abs(monthly_payment)
capital_left = pv(rate=monthly_rate, nper=remaining_payments, pmt=monthly_payment, fv=0)
new_capital = capital_left - OVERPAYMENT
remaining_payments = nper(monthly_rate, monthly_payment, new_capital)
new_total = remaining_payments * abs(monthly_payment)



print(f"TOTAL po nadpłacie: £{new_total:.2f}")



