const initState = {
  organisations: {
    foundations: {
      desc:
        "W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.",
      list: [
        {
          id: 1,
          name: "Dbam o zdrowie",
          goal: "Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
          needs: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
        },
        {
          id: 2,
          name: "Dla dzieci",
          goal: "Pomoc dzieciom z ubogich rodzin",
          needs: "ubrania, meble, zabawki"
        },
        {
          id: 3,
          name: "Bez domu",
          goal: "Pomoc dla osób nie posiadających miejsca zamieszkania.",
          needs: "ubrania, jedzenie, ciepłe koce"
        },
        {
          id: 4,
          name: "Hau hau",
          goal: "Pomoc bezdomnym zwierzakom ze schronisk.",
          needs: "jedzenie, zabawki, ciepłe koce"
        },
        {
          id: 5,
          name: "Lorem ipsum 1",
          goal: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          needs: "Lorem, ipsum, dolor, sit, amet"
        },
        {
          id: 6,
          name: "Lorem ipsum 2",
          goal: "Nunc gravida lectus quis nulla lacinia tincidunt.",
          needs: "Nunc, gravida, lectus"
        },
        {
          id: 7,
          name: "Lorem ipsum 3",
          goal: "Sed tempor elit tortor.",
          needs: "Sed, tempor, elit, tortor"
        },
        {
          id: 8,
          name: "Lorem ipsum 4",
          goal: "Nunc ut ante viverra, rutrum urna ut, varius libero.",
          needs: "Nunc, ut, ante, viverra"
        }
      ]
    },
    ngos: {
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sem metus, fermentum varius posuere in, malesuada et tellus. Praesent consectetur et ipsum sed tempor.",
      list: [
        {
          id: 1,
          name: "Lorem ipsum 1",
          goal: "Nunc ut ante viverra, rutrum urna ut, varius libero.",
          needs: "Nunc, ut, ante, viverra"
        },
        {
          id: 2,
          name: "Lorem ipsum 2",
          goal: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          needs: "Lorem, ipsum, dolor, sit, amet"
        },
        {
          id: 3,
          name: "Lorem ipsum 3",
          goal: "Sed tempor elit tortor.",
          needs: "Sed, tempor, elit, tortor"
        },
        {
          id: 4,
          name: "Lorem ipsum 4",
          goal: "Nunc gravida lectus quis nulla lacinia tincidunt.",
          needs: "Nunc, gravida, lectus"
        },
        {
          id: 5,
          name: "Lorem ipsum 5",
          goal: "Maecenas mollis mollis neque.",
          needs: "Maecenas, mollis, mollis, neque"
        }
      ]
    },
    local: {
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis vitae velit eget sagittis. Sed placerat arcu sit amet lorem malesuada maximus eu id massa.",
      list: [
        {
          id: 1,
          name: "Lorem ipsum 1",
          goal: "Nunc ut ante viverra, rutrum urna ut, varius libero.",
          needs: "Nunc, ut, ante, viverra"
        },
        {
          id: 2,
          name: "Lorem ipsum 2",
          goal: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          needs: "Lorem, ipsum, dolor, sit, amet"
        },
        {
          id: 3,
          name: "Lorem ipsum 3",
          goal: "Maecenas mollis mollis neque.",
          needs: "Maecenas, mollis, mollis, neque"
        }
      ]
    }
  }
};

export const organisationsReducer = (state = initState, action) => {
  return state;
};
