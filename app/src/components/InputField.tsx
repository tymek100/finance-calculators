interface InputProps {
    label: string;
    type: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
  
  const InputField = ({ label, type, value, onChange }: InputProps) => {
    return (
      <div className="mb-4">
        <label className="block text-gray-700">{label}</label>
        <input
          type={type}
          value={value}
          onChange={onChange}
          className="w-full p-2 border rounded mt-1"
        />
      </div>
    );
  };
  
  export default InputField;
  