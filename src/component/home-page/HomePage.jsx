import './HomePage.css'
export default function HomePage() {
    return(
        <div className="HomePage">
            <div className="header-container">
                <div className="logo-container">
                    <h1>Logo</h1>
                </div>
                <div className="menu-container">
                    <button className='btn'>Home</button>
                    <button className='btn'>Projects</button>
                    <button className='btn'>Skills</button>
                </div>
            </div>
            <div className='profile-content-container'>
                <div className='name-container'>
                    <div className='name-box'>
                       <h3>Hey There!, I'm -</h3>
                       <h1>Arunachalam</h1>
                       <div className='intro-container'>
                         <p>A brief introduction about yourself, your experience, 
                          and what visitors can expect to find in your portfolio.</p>
                       </div>
                    </div>
                </div>
                <div className='cross-platform-container'>
                   <div className='profile-img-container'>

                   </div>
                </div>
            </div>
        </div>
    )
}