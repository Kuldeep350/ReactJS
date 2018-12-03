import React from 'react'; //if we are using stateless component then we do not need to import component like this{component}

function DigitalClock(props)
{
//console.log(props.time);
return <div>{props.time}</div>
}
export default DigitalClock;