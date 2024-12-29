import 'react'


function buttonComponent({children}) {
    return (
        <div>
            <button>{children}</button>
        </div>
    );
}

export default buttonComponent;