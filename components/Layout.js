import TopNav from './TopNav'

export const Layout = ({children}) => {
    return (
        <div>
            <TopNav />
            {children}
        </div>
    )
}
