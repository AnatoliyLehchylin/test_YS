import './style/style.scss'
import Data from "../../../src/data/product.json";
import nov from '../../assets/icons8-новинка-48.png';
import pay from '../../assets/icons8-оплата-50.png';
import delivery from '../../assets/icons8-доставка-50.png';
import check from '../../assets/icons8-галочка-128.png';
import arrow from '../../assets/icons8-процент-64.png';

function Product() {
    const productInfo = Data;

    return (
        <>
            <div className='main-container'>
                <div className='top-menu'>

                    <div className='item-wrapp'>
                        <img src={nov} className='item-img' alt='nov'/>
                        <div className='item-description'>
                            <p className='top-text'>Новинка</p>
                            <p>2025 року</p>
                        </div>
                    </div>

                    <div className='item-wrapp'>
                        <img src={pay} className='item-img' alt='nov'/>
                        <div className='item-description'>
                            <p className='top-text'>Оплата</p>
                            <p>після перевірки</p>
                        </div>
                    </div>

                    <div className='item-wrapp'>
                        <img src={delivery} className='item-img' alt='nov'/>
                        <div className='item-description'>
                            <p className='top-text'>Швидка</p>
                            <p>доставка</p>
                        </div>
                    </div>
                </div>

                <p className='product-name'>{productInfo.name}</p>
                <div className='main-foto-wrapp'>
                    <img src={productInfo.foto} className='product-foto' alt='foto'/>
                </div>

                <div className='product-description-wrapp'>
                    <div className='product-description-item'>
                        <img src={check} alt='check'/>
                        <p>Якісний гіпоалергений матеріал</p>
                    </div>
                    <div className='product-description-item'>
                        <img src={check} alt='check'/>
                        <p>Вирівнювання, приховання недоліків</p>
                    </div>
                    <div className='product-description-item'>
                        <img src={check} alt='check'/>
                        <p>Акція: -50 грн. на другу покупку</p>
                    </div>
                </div>

                <div className='order-wrapp'>
                    <div className='time-wrapp'>
                        <div className='time-item'>
                            <p className='top-time'>14</p>
                            <p>годин</p>
                        </div>
                        <div className='time-item'>
                            <p className='top-time'>55</p>
                            <p>хвилин</p>
                        </div>
                        <div className='time-item'>
                            <p className='top-time'>15</p>
                            <p>секунд</p>
                        </div>
                    </div>

                    <div className='sale-price-wrapp'>
                        <div className='sale-price-item'>
                            <p>ЗВИЧАЙНА ЦІНА</p>
                            <p className='oldPrice'>{productInfo.priceOld} грн.</p>
                        </div>
                        <img src={arrow} alt='arrow'/>
                        <div className='sale-price-item'>
                            <p>ЦІНА ЗА АКЦІЄЮ</p>
                            <p className='newPrice'>{productInfo.priceNew} грн.</p>
                        </div>
                    </div>

                    <button className='button'>ЗАМОВИТИ ЗАРАЗ</button>

                </div>

            </div>
        </>
    )
}

export default Product