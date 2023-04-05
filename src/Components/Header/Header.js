import Footer from "../Footer/Footer";
import "./Header.css"
function Header()
{
    return <> <
        h1 style={{color:"blue"}}>Welcome to our react page</h1>
        <div class="nav">
              <ul class="nav" >
                 <li>Home</li>
                 <li>About us</li>
                 <li>Contact</li>        
             </ul>
        </div>
         <div class="footer">
            <Footer/>
         </div>
        
    </>
}
export default Header;