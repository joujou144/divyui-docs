export const ComponentHeading = ({ title, children }) => {
    return (
        <>
            <h2 className="nunito-semibold mb-6 text-3xl">{title}</h2>
            {children}
        </>
    );
};
