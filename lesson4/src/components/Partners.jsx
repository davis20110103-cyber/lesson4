
import PartnersCard from '../ui/PartnersCard'
import partner1 from '../img/partners.jpg'
import partner2 from '../img/partners1.jpg'
import partner3 from '../img/partners2.jpg'
import partner4 from '../img/partners3.jpg'

const partners = [
  { name:'Hahnemühle',
    img: partner1,
    alt: 'Hahnemühle logo' 
  },

  { name: 'Canson',
    img: partner2,
    alt: 'Canson logo' 
  },

  { name: 'Royal Talens',
    img: partner3,
    alt: 'Royal Talens logo'
  },

  { name: 'Fabriano',
    img: partner4,
    alt: 'Fabriano logo'
  },
]

export default function Partners() {
  return (
    <div className="container partners_cont">
      {partners.map((partner) => (
        <PartnersCard
          key={partner.name}
          img={partner.img}
          alt={partner.alt}
          name={partner.name}
        />
      ))}
    </div>
  )
}
