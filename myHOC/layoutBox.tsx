import React from 'react';

export function absolute(Component: React.FC) { //TOFIX: 这里是实在不知道该用什么才用的React.FC，但只用函数式组件显然不对
    return (props: JSX.IntrinsicAttributes) => (
        <div className="absolutebox">
            <Component {...props}></Component>
        </div>
    );
}
