from numpy_financial import nper

PRINCIPAL_REMAINING = 22565  # pozostała kwota w £

apr = 0.132
monthly_payment = -358.09
monthly_rate = apr / 12
remaining_payments = nper(monthly_rate, monthly_payment, PRINCIPAL_REMAINING)



print(f"Pozostałe raty: {remaining_payments:.2f}")
