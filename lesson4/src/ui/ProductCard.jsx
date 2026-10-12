import arrow from '../img/Arrow.png';

export default function ProductCard({ title, count, description, img, alt = 'product' }) {
  return (
    <article className="product_card">
      <div className="product_card_img">
        <img src={img} alt={alt} />
      </div>

      <h3>{title}</h3>
      <p className="product_card_count">Тираж: от {count} штук</p>
      <p className="product_card_desc">{description}</p>

      <a href="#" className="product_card_link">
        Подробнее
        <img src={arrow} alt="arrow" />
      </a>
    </article>
  );
}
