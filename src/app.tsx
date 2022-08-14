import { defineComponent } from '@vue/runtime-core'

type Card = {
  link: string
  src: string
}

export const App = defineComponent({
  data(): { all: Card[]; deck: Card[]; cards: Card[] } {
    return {
      all: [],
      deck: [],
      cards: [],
    }
  },
  created() {
    this.all = Array.from(
      document.querySelectorAll(
        '#deck_image #main .image_set > a'
      )
    ).map((el) => {
      return {
        link: el.getAttribute('href') || '',
        src: el.querySelector('img')!.getAttribute('src') || '',
      }
    })
  },
  mounted() {
    this.reset()
  },
  methods: {
    reset() {
      this.deck = [...this.all]
      this.cards = []
      new Array(5).fill(0).map((_, i) => {
        const count = window.crypto.getRandomValues(new Uint32Array(1))
        const choose = count[0] % this.deck.length
        this.cards.push(this.deck[choose])
        this.deck = this.deck.filter((_, deckIndex) => deckIndex !== choose)
      })
    },
    addOne() {
      if (this.deck.length === 0) {
        return
      }
      new Array(1).fill(0).map((_, i) => {
        const count = window.crypto.getRandomValues(new Uint32Array(1))
        const choose = count[0] % this.deck.length
        this.cards.push(this.deck[choose])
        this.deck = this.deck.filter((_, deckIndex) => deckIndex !== choose)
      })
    },
  },
  render() {
    return (
      <section class="extension-root">
        <header class="subcatergory">
        <div class="icon hex"><span></span></div>
          <div class="top">
            <h3>おためし5枚ドロー</h3>
          </div>
        </header>
        <div class="extension-root__main">
          <ul>
            {this.cards.map((card) => (
              <li>
                <a href={card.link} target="_blank">
                  <img width={95} height={138} src={card.src} alt="" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div class="extension-root__footer">
          <button
            type="button"
            class="btn hex orn"
            onClick={() => {
              this.reset()
            }}
          >
            <span>5枚ドロー</span>
          </button>
          <button
            type="button"
            class="btn hex orn"
            onClick={() => {
              this.addOne()
            }}
          >
            <span>+1枚引く</span>
          </button>
        </div>
      </section>
    )
  },
})
