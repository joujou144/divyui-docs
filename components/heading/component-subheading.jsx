export const ComponentSubHeading = ({ title, children }) => {
    return (
        <>
            <h3 className="nunito-semibold mb-6 text-xl text-slate-700">
                {title}
            </h3>
            {children}
        </>
    );
};
