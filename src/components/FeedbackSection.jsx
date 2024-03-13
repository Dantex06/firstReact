import Button from "./Button/Button.jsx";
import {useState, useRef} from "react";

function StateVsRef(){
    const input = useRef()
    const [show, setShow] = useState(false)

    function enterFunction(event){
        if(event.key === 'Enter'){
            setShow(true);
        }
    }
    console.log(input.current?.value)
    return(
        <div>
            <h3>Input value: {show && input.current?.value}</h3>
            <input type='text' className='control' ref={input} onKeyDown={enterFunction}/>
        </div>
    )
}

export default function FeedbackSection(){
    const [form, setForm] = useState({
        name: '',
        hasError: false,
        reason: 'help',
    })
    // const[name, setName] = useState('')
    // const[hasError, setHasError] = useState(true)
    // const[reason, setReason] = useState('help')

    function handleNameChange(event){
        // setName(event.target.value)
        // setHasError(event.target.value.trim().length===0)
        setForm((prev)=>({
            ...prev,
            name: event.target.value,
            hasError: event.target.value.trim().length===0,
        }))
    }

    function handleReasonChange(event){
        setForm((prev)=>({
            ...prev,
            reason: event.target.value,
        }))
    }

    // function toggleError(){
    //     setForm((prev)=>({
    //         ...prev,
    //         hasError: !form.hasError,
    //     }))
    // }

    return(
        <section>
            <h3>Обратная связь</h3>
            {/*<Button onClick={toggleError}>Toggle error</Button>*/}
            <form style={{marginBottom: '1rem'}}>
                <label htmlFor="name">Ваше имя</label>

                <input type="text" id="name" className='control' value={form.name}
                       style={{border: form.hasError ? '1px solid red' : null}} onChange={handleNameChange}/>
                <label htmlFor="reason">Причина обращения</label>

                <select id="reason" className='control' value={form.reason} onChange={handleReasonChange}>
                    <option value="error">Ошибка</option>
                    <option value="help">Нужна помощь</option>
                    <option value="suggest">Предложение</option>
                </select>

                {/*<pre>*/}
                {/*{JSON.stringify(form, null, 2)}*/}
                {/*Name {form.name}*/}
                {/*<br/>*/}
                {/*Reason: {form.reason}*/}
                {/*</pre>*/}

                <Button disabled={form.hasError} isActive={!form.hasError}>Отправить</Button>
            </form>
            <StateVsRef/>
        </section>
    )
}