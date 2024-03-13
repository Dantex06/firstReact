// import React from "react";
// import Button from "./Button/Button.jsx";

export default function IntroSection(){
    return(
        <section>
            <h1 className="centered">Result University</h1>
            <h3 className="centered" style={{color: '#666'}}>Университет frontend-разработки, который насыщает IT-сферу квалифицированными программистами</h3>
            {/*<Button>cc</Button>*/}
        </section>
    )
}

// export default function IntroSection(){
//     return(
//         React.createElement('section', null, [React.createElement('h1', {className: 'centered', key: 1}, 'Result'), React.createElement('h3', {className: 'centered', style: {color: '#666'}, key: 2}, 'Университет frontend-разработки, который насыщает IT-сферу квалифицированными программистами'), React.createElement(Button, {key: 3}, 'bob')])
//     )
// }