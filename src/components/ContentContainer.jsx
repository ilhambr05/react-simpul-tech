function ContentContainer({ children }) {
    return (
        <>
            <div className="fixed bottom-[100px] right-[15px] rounded-[5px] bg-[#ffffff] px-[32px] py-[24px] h-[calc(100vh-115px)] w-[734px]">{children}</div>
        </>
    );
}

export default ContentContainer;