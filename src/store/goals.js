
const state = () => ({
  goals: [],
})

const mutations = {
  goals(state, newGoals) {
    state.goals = newGoals
  }
}

const getters = {
  goal: state => id => {
    const index = findGoalIndexByID(state.goals, id)

    return state.goals[index]
  },
  subgoals: state => id => {
    return state.goals.filter(goal => goal.parent === id)
  },
  topLevelGoals: state => {
    return state.goals.filter(goal => goal.parent === "")
  }
}

const actions = {
  async refresh({ commit }) {
    commit('goals', createMockGoals())
  }
}

export default {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
}

/*
 * Helpers
 */
function findGoalIndexByID(goals, id) {
  return goals.findIndex(goal => goal.id === id)
}

function createMockGoals() {
  return [
    {
      parent: "",
      id: "ecca9e55-c0f4-42c4-b287-4388b25a2066",
      title: "Kjøpe hus/leilighet",
      reasoning: "Har lyst på et sted jeg kan fikle med ting, blandt annet gitar",
    },
    {
      parent: "ecca9e55-c0f4-42c4-b287-4388b25a2066",
      id: "3367984c-b52b-44bd-b587-b527e70b53de",
      title: "Øke lønn",
      reasoning: "Enklere å få lån samt raskere å opparbeide egenandel",
    },
    {
      parent: "ecca9e55-c0f4-42c4-b287-4388b25a2066",
      id: "3367984c-b52b-44bd-b587-b527e70b53de",
      title: "Selge bobil",
      reasoning: "Dette vil redusere lån og utgifter i dag, samt øke evnen til å opparbeide egenandel",
    },
  ]
}
