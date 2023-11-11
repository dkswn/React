import React from 'react';
const style = {
     width:"100px",
        height:"100px",
        backgroundColor:"#01c49f",
        color:"#4293ed"
}
function Box2() {
    console.log("Box2컴포넌트가 렌더링되었습니다.")
    return <div style={style}>Box2</div>
}

export default React.memo(Box2);