import Header from "./components/Header/Header.jsx";
import TeachingSection from "./components/TeachingSection.jsx";
import ListSection from "./components/ListSection.jsx";
import IntroSection from "./components/IntroSection.jsx";
import TabsSection from "./components/TabsSection.jsx";
import FeedbackSection from "./components/FeedbackSection.jsx";
import {useState} from "react";
import EffectSection from "./components/EffectSection.jsx";
function App() {
    const [visible, setVisible] = useState(true)
    const [tab, setTab] = useState('effect')

    // setTimeout(()=>{
    //     setVisible(false)
    // }, 3000)
    return (
        <>
            {visible && <Header/>}
            <main>
                <IntroSection/>
                <TabsSection active={tab} onChange={setTab}/>
                {tab === 'main' && <><TeachingSection/><ListSection/></>}
                {tab === 'feedback' && <><FeedbackSection/></>}
                {tab === 'effect'&& <><EffectSection/></>}
                {/*<TeachingSection/>*/}
                {/*<ListSection/>*/}

                {/*<FeedbackSection/>*/}
            </main>
        </>
    )
}

export default App
