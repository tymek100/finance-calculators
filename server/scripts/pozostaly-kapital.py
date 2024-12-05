from numpy_financial import pv

TOTAL = 38673

apr = 0.132
monthly_payment = -358.09
monthly_rate = apr / 12
remaining_payments = 38673 / abs(monthly_payment)
capital_left = pv(rate=monthly_rate, nper=remaining_payments, pmt=monthly_payment, fv=0)



print(f"Kapitał pozostały: £{capital_left:.2f}")
