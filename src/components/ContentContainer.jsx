function ContentContainer({ children }) {
    return (
        <>
            <div className="flex flex-col fixed bottom-[100px] right-[15px] rounded-[5px] bg-[#ffffff] px-[32px] py-[24px] h-[calc(100vh-115px)] w-[734px] max-w-[calc(100%-30px)]">{children}</div>
        </>
    );
}

export default ContentContainer;