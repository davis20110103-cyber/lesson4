import banner from '../img/banner.png';

export default function Banner() {
  return (
    <section className="container banner_cont">
      <div className="banner_text">
        <h1>Простые вещи. Из бумаги</h1>
        <p>
          Бума́га (предположительно от итал. bombagia, первоисточником же считается иранский) — волокнистый материал с минеральными добавками. 
        </p>
        <button>Каталог</button>
      </div>
      <div className="banner_img">
        <img src={banner} alt="banner" />
      </div>
    </section>
  )
}
