import { useFormContext } from "react-hook-form";

interface InputProps {
    name: string;
    label: string;
    type?: string;
    validation?: object; // 유효성 검사 규칙
}

export default function Input(
    {name, label, type = "text", validation = {}}: InputProps) {
    
    const { register, formState: {errors}} = useFormContext();

    return (
    <div className="mb-4">
      <label className="block text-gray-700">{label}</label>
      <input
        {...register(name, validation)}
        type={type}
        className="border rounded w-full py-2 px-3 text-gray-700"
      />
      {errors[name] && (
        <p className="text-red-500 text-sm">{errors[name]?.message as string}</p>
      )}
    </div>)


}