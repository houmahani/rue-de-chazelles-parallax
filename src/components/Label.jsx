const Label = ({ isLoaded }) => {
  return (
    <>
      <div className={`label mobile ${isLoaded ? 'is-loaded' : ''}`}>
        <div>
          <h3>Bartholdi&apos;s Statue of Liberty, 1884</h3>
          <p>
            {' '}
            Image courtesy of Paris Musées, under CCØ license -{' '}
            <a
              href="https://www.carnavalet.paris.fr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Musée Carnavalet - Histoire de Paris
            </a>
          </p>
        </div>
        <div>
          <p>
            Inspired by{' '}
            <a
              href="https://designwand.co/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Designwand
            </a>
          </p>
          <p>
            Built with{' '}
            <a
              href="https://threejs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Three.js
            </a>
          </p>
          <p>
            <a
              href="https://x.com/houm_kn"
              target="_blank"
              rel="noopener noreferrer"
            >
              @houm_kn
            </a>{' '}
          </p>
        </div>
      </div>
      <div className={`label ${isLoaded ? 'is-loaded' : ''} `}>
        <p className="italic">On right</p>

        <div className="group">
          <h3>Bartholdi&apos;s Statue of Liberty, 1884</h3>
          <p className="sub">Oil on Canvas</p>
          <p className="sub">
            Image courtesy of Paris Musées, under CCØ license -{' '}
            <a
              href="https://www.carnavalet.paris.fr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Musée Carnavalet - Histoire de Paris
            </a>
          </p>
        </div>

        <div className="group">
          <h2>Paul-Joseph-Victor Dargaud</h2>
          <p className="sub">French Painter, 19th century</p>
        </div>

        <p className="description">
          This painting depicts the construction of the Statue of Liberty in
          1884 at the Gaget, Gauthier & Co. foundry in Paris. Designed by
          Frédéric Auguste Bartholdi and engineered by Gustave Eiffel, it was
          assembled in Paris, then shipped to the United States in 1885 and
          inaugurated on Liberty Island, New York Harbor, in 1886.
        </p>

        <hr />

        <div className="group about">
          <p>
            Inspired by{' '}
            <a
              href="https://designwand.co/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Designwand
            </a>
            ’s{' '}
            <a
              href="https://rococoinparallax.webflow.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rococo in Parallax
            </a>{' '}
            and their{' '}
            <a
              href="https://youtu.be/nuM_ubawydI"
              target="_blank"
              rel="noopener noreferrer"
            >
              Spline tutorial
            </a>
            . Built with{' '}
            <a
              href="https://threejs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Three.js
            </a>
            , Photoshop using generative fill for layered depth.
          </p>
          <p>
            <a
              href="http://houmahanikane.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Houmahani Kane
            </a>{' '}
            -{' '}
            <a
              href="https://x.com/houm_kn"
              target="_blank"
              rel="noopener noreferrer"
            >
              @houm_kn
            </a>{' '}
            - <a href="mailto:houm.kane@gmail.com">houm.kane@gmail.com</a>
          </p>
        </div>
      </div>
    </>
  )
}

export default Label
