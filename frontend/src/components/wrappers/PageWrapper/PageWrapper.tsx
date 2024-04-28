import { ReactNode, Children } from 'react'
import style from './PageWrapper.module.scss'

function PageWrapper(props: { children: ReactNode }) {
    return (
        <div className={style.wrapper}>
            {Children.map(props.children, (child) => (
                <div className="Row">{child}</div>
            ))}
        </div>
    )
}

export default PageWrapper
