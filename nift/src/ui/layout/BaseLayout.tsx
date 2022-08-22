import Navlogged from "../../components/navbar/navlogged";

type Props = {
    children?: React.ReactNode;
}

const BaseLayout: React.FC<Props> = ({children}) => {
    return (
        <>
            <Navlogged />
            <div className="py-6 bg-gray-50 overflow-hidden min-h-screen">
                <div className="max-w-7xl mx-auto px-4 space-y-8 lg: px-8">
                    {children}
                </div>
            </div>
        </>
    )
}

export default BaseLayout;