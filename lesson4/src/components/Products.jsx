import ProductCard from "../ui/ProductCard";
import product1 from '../img/product.jpg';
import product2 from '../img/product1.jpg';
import product3 from '../img/product2.jpg';
import product4 from '../img/product3.jpg';

const products = [
  {
    title: 'Упаковка',
    count: '50',
    description: 'Сделано из крафт-бумаги или плотного картона. Упаковки имеют различные формы и расцветки, изготовим форму под заказ.',
    img: product1,
  },
  {
    title: 'Пакеты',
    count: '200',
    description: 'С нами вы можете заказать пакеты любого размера, формы и материала. Изготовим пакеты для вашей продукции.',
    img: product2,
  },
  {
    title: 'Кейсы',
    count: '30',
    description: 'Подойдут для документов и мелкой продукции. Доступны разные размеры, формы и материалы для презентации.',
    img: product3,
  },
  {
    title: 'Другие изделия',
    count: '10',
    description: 'Нестандартные упаковки, кейсы и другие изделия различных размеров и конфигураций. Изготовим в кратчайшие сроки.',
    img: product4,
  },
];

export default function Products() {
  return (
    <div className="container product_cont">
      {products.map((product) => (
        <ProductCard
          key={product.title}
          title={product.title}
          count={product.count}
          description={product.description}
          img={product.img}
        />
      ))}
    </div>
  );
}
