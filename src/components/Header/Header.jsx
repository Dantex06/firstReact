import logo from '/logo-name.svg'
import {useEffect, useState} from "react";
import {styled} from 'styled-components'
// import './Header.css'

const HeaderContainer = styled.header`
    height: 50px;
    display: flex;
    padding: 0 2rem;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    background: #fafafa;
`
function Header(){
    const[now, setNow] = useState(new Date());
    useEffect(()=>{
        const interval = setTimeout(()=> setNow(new Date()), 1000)
        return() => {
            clearInterval(interval)
            console.log('cleaning...')
        }
    }, [])

    // if(now !== (new Date())){
    //     console.log(now.toLocaleTimeString(), new Date().toLocaleTimeString())
    // }
    const name = 'Result'
    return (
        <HeaderContainer>
            {/*<h3>Result University</h3>*/}
            <img src={logo} alt={name}/>
            <span>Time: {now.toLocaleTimeString()}</span>
        </HeaderContainer>
    )
}

export default Header;