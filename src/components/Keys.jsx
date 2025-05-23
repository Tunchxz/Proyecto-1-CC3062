const Keys = ({ label, keyClass, onButtonClick }) => {
    const equalClass =
        "col-[span_2] bg-[#4ccdc6] text-[#ffffff] font-semibold hover:bg-[#334195]";

    return (
        <div
            data-testid={`key-${label}`}
            className={`bg-[#272838] flex cursor-pointer items-center justify-center p-4 rounded-[5px] hover:bg-[#647AA3] ${keyClass && equalClass
                }`}
            onClick={() => onButtonClick(label)}
        >
            {label}
        </div>
    );
};

export default Keys;