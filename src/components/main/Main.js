import './main.css'
import HeroImage from '../../assets/restaurantfood.jpg'
import User1 from '../../assets/person1.jpg'
import User2 from '../../assets/person2.jpg'
import User3 from '../../assets/person3.jpg'
import User4 from '../../assets/person4.jpg'
import Star from '../../assets/Star.jpg'


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
           <h1>Testimonials</h1>
           <div className='opinions'>
                <div className='rating'>
                    <div className='stars'>
                        <img src={Star} alt='Star' width={20}/>
                    </div>
                    <div className='user'>
                        <img src={User1} alt='user photo' width={100}/>
                        <h3>Name</h3>
                    </div>
                    <p>Opinion Lorem ipsum</p>
                </div>
                <div className='rating'>
                    <div className='stars'>
                        <img src={Star} alt='Star' width={20}/>
                    </div>
                    <div className='user'>
                        <img src={User2} alt='user photo' width={100}/>
                        <h3>Name</h3>
                    </div>
                    <p>Opinion Lorem ipsum</p>
                </div>
                <div className='rating'>
                    <div className='stars'>
                        <img src={Star} alt='Star' width={20}/>
                    </div>
                    <div className='user'>
                        <img src={User3} alt='user photo' width={100}/>
                        <h3>Name</h3>
                    </div>
                    <p>Opinion Lorem ipsum</p>
                </div>
                <div className='rating'>
                    <div className='stars'>
                        <img src={Star} alt='Star' width={20}/>
                    </div>
                    <div className='user'>
                        <img src={User4} alt='user photo' width={100}/>
                        <h3>Name</h3>
                    </div>
                    <p>Opinion Lorem ipsum</p>
                </div>
            </div>
        </section>
        <section className="about">

        </section>
    </div>
)

export default Main