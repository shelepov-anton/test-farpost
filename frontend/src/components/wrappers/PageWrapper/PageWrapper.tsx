import {ReactNode, Children} from 'react';
import classes from './PageWrapper.module.scss';

function PageWrapper(props: { children: ReactNode }) {
    return (
        <div className={classes.wrapper}>
            {Children.map(props.children, child =>
                <div className="Row">
                    {child}
                </div>
            )}
        </div>
    );
}

export default PageWrapper;
