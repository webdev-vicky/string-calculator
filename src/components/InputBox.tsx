
interface  Props {
    value: any;
    onChange: (value: any) => void;
}
const InputBox = ({value, onChange}: Props) => {
    return <div>
            <label htmlFor="numbersInput" className="block text-gray-700 text-sm font-semibold mb-2">
                Enter numbers:
            </label>
            <textarea
                id="numbersInput"
                className="shadow-sm appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out"
                placeholder="e.g., 1,2,3 or 1\n2,3 or //;\n1;2"
                value={value}
                onChange={(e: any) => onChange(e.target.value)}
            ></textarea>
        </div>
}

export default InputBox;