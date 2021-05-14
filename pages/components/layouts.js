import layoutStyle from './layout.module.scss'

const Layout = ({children}) => (

    <>
        <div className={layoutStyle.container}>{children}</div>
    </>
)

export default Layout