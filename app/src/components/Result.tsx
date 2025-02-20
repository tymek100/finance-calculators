interface ResultProps {
    remainingPayments: number | null;
  }
  
  const Result = ({ remainingPayments }: ResultProps) => {
    return remainingPayments !== null ? (
      <div className="mt-4 p-4 bg-green-200 rounded">
        <p className="text-xl font-bold">
          Remaining Payments: {remainingPayments.toFixed(2)}
        </p>
      </div>
    ) : null;
  };
  
  export default Result;
  