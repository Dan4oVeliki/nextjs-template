/* eslint-disable @next/next/no-img-element */

export default function Home() {
  return (
    <div>
      <div className="cover">
        <h1 className="title">Ice cream but not for help</h1>
      </div>

      <div className="columns">
        <div className="column-half">
          <img className="imageSkill" src="https://cdn.discordapp.com/attachments/735131237051662357/1128665634440482937/image.png" alt="image01" />
        </div>
        <div className="column-half">
          <h2 className="section-title">Introduction</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
            reiciendis alias saepe nam atque molestias, perspiciatis itaque, ad
            perferendis minus odio laborum dolore, aliquid natus non quia
            debitis at omnis!
          </p>
        </div>
      </div>

      <div className="columns">
        <div className="column-half">
          <h2 className="section-title">Some more info</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
            reiciendis alias saepe nam atque molestias, perspiciatis itaque, ad
            perferendis minus odio laborum dolore, aliquid natus non quia
            debitis at omnis!
          </p>
        </div>
        <div className="column-half">
          <img className="imageSkill" src="/sandw.png" alt="sandw"/>
        </div>
      </div>

      <div className="container">
        <h2 className="section-title">Some text</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci,
          incidunt! Eius iste omnis unde maxime ut quidem. Eos, dolore
          repellendus ipsum voluptas possimus et dicta at ad nihil sit officiis!
        </p>
      </div>

      <div className="container">
        <h2 className="section-title">Gallery</h2>
        <div className="gallery">
          <img className="gallery-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0K7SansrQv5uNNfzhdc30ulJBtG_82-QuQg&usqp=CAU" alt="image01" />
          <img className="gallery-image" src="https://cdn.discordapp.com/attachments/735131237051662357/1128666727962648587/image.png" alt="image01" />
          <img className="gallery-image" src="https://cdn.discordapp.com/attachments/735131237051662357/1128666889921507418/image.png" alt="image01" />
          <img className="gallery-image" src="https://cdn.discordapp.com/attachments/735131237051662357/1128667063695704155/ice-cream-burger.webp" alt="image01" />
          <img className="gallery-image" src="https://cdn.discordapp.com/attachments/735131237051662357/1128667209888178216/iStock-622440018.jpg" alt="image01" />
          <img className="gallery-image" src="https://cdn.discordapp.com/attachments/735131237051662357/1128667325252513802/image.png" alt="image01" />
        </div>
      </div>

      <div className="container">
        <h2 className="section-title">Our clients</h2>
        <div className="card-container">
          <div className="card">
            <img className="avatar" src="/avatar.png" alt="avatar" />
            <h3 className="card-name">Muhammed</h3>
            <p>
              В този бургер видях просвета
              хапка след хапка стигнах до девета
              тогава със същата сила и страст
              отидох да се изакам в един храст
            </p>
          </div>
          <div className="card">
            <img className="avatar" src="/avatar.png" alt="avatar" />
            <h3 className="card-name">Hose</h3>
            <p>
              doidoh ochakvaiki 500gr i poluchih 210g,
              Nikoga ne sum gubil tolkova mnogo kilogrami
              Blagodarq ti Brugest
            </p>
          </div>
          <div className="card">
            <img className="avatar" src="/avatar.png" alt="avatar" />
            <h3 className="card-name">Name</h3>
            <p>
              tozi burger me podmladi s 2 sedmici
            </p>
          </div>
          <div className="card">
            <img className="avatar" src="/avatar.png" alt="avatar" />
            <h3 className="card-name">Name</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
              pariatur ullam aliquid inventore nam, eligendi unde, obcaecati hic
              minima perferendis numquam. Aliquam esse non possimus mollitia,
              quisquam atque! Explicabo, hic?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
