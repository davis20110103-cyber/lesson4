


export default function PartnersCard({ img, alt = 'partner logo', name }) {
  return (
    <div className="partners_card">
      <div className="partners_logo">
        <img src={img} alt={alt || name} />
      </div>
    </div>
  )
}
