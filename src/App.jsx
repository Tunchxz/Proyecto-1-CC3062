import Keys from "./components/Keys"
import useCalculator from "./hooks/useCalculator"

const keys = [
  "AC", "C", "%", "/",
  "7", "8", "9", "*",
  "4", "5", "6", "-",
  "1", "2", "3", "+",
  ".", "0", "="
]

const App = () => {
  const { display, showResult, handleButton } = useCalculator()

  const operationClass =
    "text-[1.2rem] tracking-[2px] flex gap-[5px] items-center text-[rgba(255,255,255,0.5)] justify-end"
  const resultClass = "text-[1.7rem]"

  return (
    <div className='bg-[#647AA3] min-h-screen text-white flex items-center justify-center'>
      <div className="min-w-[320px] bg-[#95B2B0] flex flex-col gap-4 p-4 rounded-2xl">
        <div className="overflow-x-auto bg-[#272838] min-h-[100px] flex items-end justify-end flex-col p-4 rounded-[10px]">
          <div className={`${showResult ? resultClass : operationClass}`}>
            {display}
          </div>
        </div>
        <div className="grid grid-cols-[repeat(4,1fr)] gap-[0.3rem]">
          {keys.map((item, index) => (
            <Keys
              label={item}
              key={index}
              keyClass={item === "="}
              onButtonClick={handleButton}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App