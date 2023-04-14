import './main.css'
import HeroImage from './restauranfood.jpg'


const Main = () => (
    <div>
        <section className='hero'>
            <div className='hero-background'>
                <div className='hero-content'>
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>Lorem ipsum</p>
                    <button>Reserve a table</button>
                </div>
                <div>
                    <img className='hero-imge' src={HeroImage} alt="Imgafe of restaurant food" width={100} />
                </div>
            </div>
        </section>
        <section className='highlights'>
            <div className='highlights-title'>
                <h1>Specials</h1>
                <button>Online Menu</button>
            </div>
            <div className='dishes'>
                <div className='dish'>
                   <img src={HeroImage} alt='Greek salad photo' width={100}/>
                   <div>
                    <h4 className='dish-title'>Greek salad</h4>
                    <h5 className='price'>$ 12.99</h5>
                   </div>
                   <p>Lorem ipsum coś tam coś tam</p>
                   <button>Order delivery</button>
                </div>
                <div className='dish'>
                   <img src={HeroImage} alt='Greek salad photo' width={100}/>
                   <div>
                    <h4 className='dish-title'>Greek salad</h4>
                    <h5 className='price'>$ 12.99</h5>
                   </div>
                   <p>Lorem ipsum coś tam coś tam</p>
                   <button>Order delivery</button>
                </div>
                <div className='dish'>
                   <img src={HeroImage} alt='Greek salad photo' width={100}/>
                   <div>
                    <h4 className='dish-title'>Greek salad</h4>
                    <h5 className='price'>$ 12.99</h5>
                   </div>
                   <p>Lorem ipsum coś tam coś tam</p>
                   <button>Order delivery</button>
                </div>
            </div>
        </section>
        <section className="testimonials">
           <h1>testimonials</h1>
           <div>
            <div>
                
            </div>
           </div>
        </section>
        <section className="about">

        </section>
    </div>
)

export default Main