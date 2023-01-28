import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './index.css'


function Home() {
    return (
        <div className='container'>
            <div className="home-page-wrapper">
                <div className="input-wrapper">
                    <input type="text" className='home-input'
                    placeholder="What's the weather?" />
                    <button type='submit' className='input-submit'>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home