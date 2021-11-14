
import './home.css'


function Home(){
    const Play =()=>{
        const x = document.getElementsByClassName("video");
            x[0].style.display = "block";
            x[0].style.opacity = 1;
    }
    const Dong =()=>{
        const x = document.getElementsByClassName("video");
            x[0].style.display = "none";
            document.body.style.opacity = 1;
    }

    return (
        <section id="home">
            <div className="home-sub">
                <div className="home-sub-one">
                    <div className="home-content-1">
                        <h1>We help startups launch their products</h1>
                        <p>Etiam sed.Interdum consequat proin vestibulum class at a euismod mus luctus quam.
                            Lorem ipsum dolor sit amet, consectetur adipisicing eli.</p>
                        <a href="#">Get Started <i class="fas fa-arrow-alt-right"></i></a>
                          
                    </div>
                    <div className="home-content-2">
                        <div className="home-content-2-sub">
                            <h4>Get 30 day FREE Trial</h4>
                            <input type="text" placeholder="Name" className="inp1" />
                            <input type="text" placeholder="Email" className="inp2" />
                            <textarea placeholder="Messenger..." type="text" className="textarea" rows="4"></textarea>
                            <a href="#">Send Detail</a>
                        </div>

                    </div>
                </div>
                
            </div>
           
            
        </section>
    )
}
export default Home